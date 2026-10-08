-- Run this once in the Supabase SQL Editor of the new project.
create extension if not exists pgcrypto;

create table if not exists public.cp2_students (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  student_number text not null unique,
  section_number text,
  password text not null,
  progress jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- The app talks to this table directly with the anon key.
alter table public.cp2_students enable row level security;

drop policy if exists "anon full access" on public.cp2_students;
create policy "anon full access" on public.cp2_students
  for all to anon, authenticated
  using (true) with check (true);
