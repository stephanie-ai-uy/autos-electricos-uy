-- Notificaciones de sugerencias por email y registro de ventas de la guía.
-- La función de aviso no usa claves compartidas: recibe solo el id del mensaje y comprueba en la base que existe, es reciente y no fue avisado antes.
create extension if not exists pg_net;

alter table public.lead_requests add column if not exists notified_at timestamptz;

create table if not exists public.sales (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  buyer_name text not null check (char_length(buyer_name) between 2 and 100),
  buyer_email text not null check (buyer_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  mp_operation text check (char_length(mp_operation) <= 60),
  amount_uyu numeric not null default 1200 check (amount_uyu >= 0),
  status text not null default 'pagada' check (status in ('pagada','entregada','revision_enviada','cancelada')),
  guide_sent_at timestamptz,
  review_sent_at timestamptz,
  notes text check (char_length(notes) <= 500)
);
alter table public.sales enable row level security;
drop policy if exists "admin manage sales" on public.sales;
create policy "admin manage sales" on public.sales for all using (public.is_admin()) with check (public.is_admin());
grant all on public.sales to authenticated;

insert into storage.buckets (id, name, public) values ('guides', 'guides', false) on conflict (id) do nothing;

create or replace function public.notify_new_lead() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
begin
  perform net.http_post(
    url := 'https://uyxggpizizqgbsssngmz.supabase.co/functions/v1/notify-lead',
    headers := jsonb_build_object('Content-Type','application/json'),
    body := jsonb_build_object('id', new.id)
  );
  return new;
exception when others then
  return new;  -- una falla de aviso nunca debe impedir que se guarde el mensaje
end $$;
drop trigger if exists trg_notify_lead on public.lead_requests;
create trigger trg_notify_lead after insert on public.lead_requests for each row execute function public.notify_new_lead();
