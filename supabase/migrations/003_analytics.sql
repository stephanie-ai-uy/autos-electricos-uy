-- Estadísticas propias del sitio, sin cookies ni datos personales.
-- Se guarda: página o acción, un identificador aleatorio de la visita (se borra al cerrar la pestaña), sitio de origen (solo el dominio),
-- tipo de dispositivo e idioma. NO se guarda IP, ni email, ni lo que la persona escribe en los formularios.
create table if not exists public.site_events (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  day date not null default ((now() at time zone 'America/Montevideo')::date),
  sid text check (char_length(sid) between 6 and 40),
  kind text not null check (kind in ('view','action')),
  name text not null check (char_length(name) between 1 and 60),
  ref text check (char_length(ref) <= 80),
  dev text check (dev in ('mobile','tablet','desktop')),
  lang text check (char_length(lang) <= 10),
  meta text check (char_length(meta) <= 80)
);
alter table public.site_events enable row level security;
drop policy if exists "anon insert events" on public.site_events;
create policy "anon insert events" on public.site_events for insert with check (true);
drop policy if exists "admin read events" on public.site_events;
create policy "admin read events" on public.site_events for select using (public.is_admin());
drop policy if exists "admin delete events" on public.site_events;
create policy "admin delete events" on public.site_events for delete using (public.is_admin());
create index if not exists idx_events_day on public.site_events(day, kind, name);
grant insert on public.site_events to anon;
grant select, delete on public.site_events to authenticated;
