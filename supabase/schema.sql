create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone_masked text,
  demo_nid_masked text,
  role text not null default 'member'
    check (role in ('collector', 'member', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_by uuid not null
    references public.profiles(id)
    on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null
    references public.groups(id)
    on delete cascade,
  profile_id uuid not null
    references public.profiles(id)
    on delete cascade,
  role text not null default 'member'
    check (role in ('collector', 'member', 'viewer')),
  status text not null default 'active'
    check (status in ('active', 'invited', 'removed')),
  created_at timestamptz not null default now(),

  unique (group_id, profile_id)
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null
    references public.groups(id)
    on delete cascade,
  title text not null,
  description text,
  amount_per_member_paisa integer not null
    check (amount_per_member_paisa > 0),
  currency text not null default 'BDT'
    check (currency = 'BDT'),
  due_date date not null,
  status text not null default 'active'
    check (status in ('draft', 'active', 'closed', 'cancelled')),
  created_by uuid not null
    references public.profiles(id)
    on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.collection_members (
  id uuid primary key default gen_random_uuid(),
  collection_id uuid not null
    references public.collections(id)
    on delete cascade,
  profile_id uuid not null
    references public.profiles(id)
    on delete cascade,
  expected_amount_paisa integer not null
    check (expected_amount_paisa >= 0),
  paid_amount_paisa integer not null default 0
    check (paid_amount_paisa >= 0),
  status text not null default 'unpaid'
    check (
      status in (
        'unpaid',
        'pending',
        'paid',
        'rejected',
        'disputed'
      )
    ),
  preferred_provider text
    check (
      preferred_provider in (
        'bkash',
        'nagad',
        'rocket',
        'upay',
        'bank',
        'cash'
      )
    ),
  created_at timestamptz not null default now(),

  unique (collection_id, profile_id)
);

alter table public.profiles enable row level security;
alter table public.groups enable row level security;
alter table public.memberships enable row level security;
alter table public.collections enable row level security;
alter table public.collection_members enable row level security;

create policy "Users can view own profile"
on public.profiles
for select
to authenticated
using (
  auth.uid() = id
);

create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (
  auth.uid() = id
)
with check (
  auth.uid() = id
);

create policy "Members can view their groups"
on public.groups
for select
to authenticated
using (
  exists (
    select 1
    from public.memberships m
    where m.group_id = groups.id
      and m.profile_id = auth.uid()
      and m.status = 'active'
  )
);

create policy "Authenticated users can create groups"
on public.groups
for insert
to authenticated
with check (
  created_by = auth.uid()
);

create policy "Members can view memberships in their groups"
on public.memberships
for select
to authenticated
using (
  profile_id = auth.uid()
  or exists (
    select 1
    from public.memberships m
    where m.group_id = memberships.group_id
      and m.profile_id = auth.uid()
      and m.status = 'active'
  )
);

create policy "Members can view collections in their groups"
on public.collections
for select
to authenticated
using (
  exists (
    select 1
    from public.memberships m
    where m.group_id = collections.group_id
      and m.profile_id = auth.uid()
      and m.status = 'active'
  )
);

create policy "Collectors can create collections"
on public.collections
for insert
to authenticated
with check (
  created_by = auth.uid()
  and exists (
    select 1
    from public.memberships m
    where m.group_id = collections.group_id
      and m.profile_id = auth.uid()
      and m.role = 'collector'
      and m.status = 'active'
  )
);

create policy "Members can view collection member rows in their groups"
on public.collection_members
for select
to authenticated
using (
  exists (
    select 1
    from public.collections c
    join public.memberships m
      on m.group_id = c.group_id
    where c.id = collection_members.collection_id
      and m.profile_id = auth.uid()
      and m.status = 'active'
  )
);

