do $$
begin
  if not exists (select 1 from pg_type where typname = 'solicitud_estado') then
    create type public.solicitud_estado as enum ('en_proceso', 'ejecutada');
  end if;
end $$;

create table if not exists public.solicitudes (
  id uuid primary key default gen_random_uuid(),
  numero_solicitud text not null unique,
  client_email text not null,
  estado public.solicitud_estado not null default 'en_proceso',
  created_at timestamptz not null default now()
);

create index if not exists solicitudes_client_email_idx on public.solicitudes (client_email);

create table if not exists public.items_solicitud (
  id uuid primary key default gen_random_uuid(),
  solicitud_id uuid not null references public.solicitudes (id) on delete cascade,
  nombre text not null,
  numero_serie text,
  certificado_path text,
  created_at timestamptz not null default now()
);

create index if not exists items_solicitud_solicitud_id_idx on public.items_solicitud (solicitud_id);

alter table public.solicitudes enable row level security;
alter table public.items_solicitud enable row level security;

-- No se definen policies a propósito: estas tablas solo se leen desde el
-- servidor con la service role key (que ignora RLS), nunca desde el browser
-- con la anon key. Dejar RLS activo sin policies bloquea cualquier acceso
-- accidental vía la anon key si esta llegara a usarse del lado del cliente.
