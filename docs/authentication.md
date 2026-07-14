# CollectTrust BD — Authentication

## Authentication Method

The MVP uses email and password authentication through Supabase Auth.

## User Data Model

Supabase manages authentication identities in:

`auth.users`

CollectTrust-specific profile information is stored in:

`public.profiles`

The two records share the same UUID.

## Automatic Profile Creation

A PostgreSQL trigger runs after a new Auth user is created.

The trigger creates a corresponding row in `public.profiles`.

Signup metadata currently includes:

- full name
- masked phone number
- role

The signup flow only allows automatic creation of:

- collector
- member

Admin access cannot be self-assigned through normal signup.

## Route Protection

Private application routes use a React `ProtectedRoute` component.

Public routes:

- `/`
- `/login`
- `/signup`

Protected routes:

- `/dashboard`
- `/collections/new`
- `/collections/:id`
- `/members`

## Security

Frontend route protection improves user experience but is not the database security boundary.

Database authorization is enforced separately through Supabase Row-Level Security.