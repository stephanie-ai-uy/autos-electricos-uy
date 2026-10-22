-- Autos Eléctricos UY — esquema Supabase (fase 2)
-- Pegar completo en Supabase > SQL Editor > Run. Es re-ejecutable (idempotente).
-- Diseño: cada fila de catálogo guarda su ficha completa en `data` (jsonb) con las mismas
-- claves que assets/data.js, para que importar/exportar sea sin pérdida. Las decisiones
-- están en docs/FASE2-SUPABASE.md.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin','editor')),
  created_at timestamptz not null default now()
);

create table if not exists public.vehicles (
  id text primary key check (id ~ '^[a-z0-9-]{2,60}$'),
  data jsonb not null,
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);
create table if not exists public.benefits (like public.vehicles including all);
create table if not exists public.financing_products (like public.vehicles including all);
create table if not exists public.site_settings (
  id text primary key,
  data jsonb not null,
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.lead_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  topic text not null check (topic in ('modelo','financiacion','seguro','cargador','otro')),
  name text not null check (char_length(name) between 2 and 100),
  contact text not null check (char_length(contact) between 5 and 120),
  message text check (char_length(message) <= 1000),
  vehicle_id text,
  origin_page text check (char_length(origin_page) <= 200),
  consent_contact boolean not null check (consent_contact = true),
  consent_text text not null,
  consent_version text not null,
  status text not null default 'nuevo' check (status in ('nuevo','contactado','descartado','cualificado')),
  shared_with text,           -- destinatario autorizado; null = no compartido con terceros
  delete_after date not null default (current_date + 180)  -- plazo de conservación: 180 días
);

create table if not exists public.audit_logs (
  id bigserial primary key,
  at timestamptz not null default now(),
  user_id uuid,
  table_name text not null,
  row_id text,
  action text not null,
  old_data jsonb,
  new_data jsonb
);

-- ¿Es administrador? (security definer para poder usarla dentro de políticas RLS)
create or replace function public.is_admin() returns boolean
language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

-- Auditoría automática de cambios
create or replace function public.audit_trigger() returns trigger
language plpgsql security definer set search_path = public as $$
declare rid text;
begin
  rid := coalesce((case when tg_op = 'DELETE' then to_jsonb(old) else to_jsonb(new) end)->>'id','');
  insert into public.audit_logs(user_id, table_name, row_id, action, old_data, new_data)
  values (auth.uid(), tg_table_name, rid, tg_op,
          case when tg_op in ('UPDATE','DELETE') then to_jsonb(old) end,
          case when tg_op in ('INSERT','UPDATE') then to_jsonb(new) end);
  return coalesce(new, old);
end $$;

create or replace function public.touch_row() returns trigger
language plpgsql as $$
begin new.updated_at := now(); new.updated_by := auth.uid(); return new; end $$;

do $$
declare t text;
begin
  foreach t in array array['vehicles','benefits','financing_products','site_settings'] loop
    execute format('drop trigger if exists trg_audit on public.%I', t);
    execute format('create trigger trg_audit after insert or update or delete on public.%I for each row execute function public.audit_trigger()', t);
    execute format('drop trigger if exists trg_touch on public.%I', t);
    execute format('create trigger trg_touch before insert or update on public.%I for each row execute function public.touch_row()', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "public read active" on public.%I', t);
    execute format('create policy "public read active" on public.%I for select using (active = true)', t);
    execute format('drop policy if exists "admin read all" on public.%I', t);
    execute format('create policy "admin read all" on public.%I for select using (public.is_admin())', t);
    execute format('drop policy if exists "admin write" on public.%I', t);
    execute format('create policy "admin write" on public.%I for all using (public.is_admin()) with check (public.is_admin())', t);
  end loop;
end $$;

-- Leads: cualquiera puede CREAR (con consentimiento); solo admins pueden leer/modificar/borrar.
alter table public.lead_requests enable row level security;
drop policy if exists "anon insert lead" on public.lead_requests;
create policy "anon insert lead" on public.lead_requests for insert
  with check (consent_contact = true and status = 'nuevo' and shared_with is null);
drop policy if exists "admin manage leads" on public.lead_requests;
create policy "admin manage leads" on public.lead_requests for all using (public.is_admin()) with check (public.is_admin());

-- Auditoría y administradores: solo lectura para admins; nadie escribe a mano (lo hacen triggers/SQL).
alter table public.audit_logs enable row level security;
drop policy if exists "admin read audit" on public.audit_logs;
create policy "admin read audit" on public.audit_logs for select using (public.is_admin());
alter table public.admin_users enable row level security;
drop policy if exists "admin read admins" on public.admin_users;
create policy "admin read admins" on public.admin_users for select using (public.is_admin());

-- Borrado de contactos vencidos (ejecutar periódicamente; ver docs/FASE2-SUPABASE.md)
create or replace function public.purge_expired_leads() returns integer
language plpgsql security definer set search_path = public as $$
declare n integer; begin
  delete from public.lead_requests where delete_after < current_date; get diagnostics n = row_count; return n; end $$;
revoke all on function public.purge_expired_leads() from public, anon, authenticated;

create index if not exists idx_leads_created on public.lead_requests(created_at desc);
create index if not exists idx_audit_at on public.audit_logs(at desc);
