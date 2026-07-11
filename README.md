# CollectTrust BD

CollectTrust BD is a Bangladesh-focused fintech demo MVP for transparent group collections.

## Problem

In Bangladesh, many shared collections are managed manually through WhatsApp/Messenger, MFS screenshots, phone numbers, Excel sheets, and verbal trust. This creates reconciliation issues, duplicate proof risk, privacy exposure, and disputes.

## MVP Scope

Day 1 includes:

- React + Vite + TypeScript frontend
- Tailwind CSS
- shadcn/ui
- Basic routing
- Supabase client setup
- Landing page
- Login page
- Dashboard
- Create collection page
- Collection detail page
- Member list
- Demo data
- Masked phone numbers
- Demo-only disclaimer

## Important Disclaimer

This is a demo-only portfolio MVP.

It does not process real payments.
It does not integrate with live bKash, Nagad, Rocket, Upay, bank, Bangla QR, or Binimoy APIs.
It does not collect real NID or real KYC information.

## Bangladesh DFS Concepts Represented

- Group collection tracking
- MFS-style payment method labels
- Masked phone numbers
- Demo-only payment status
- Future payment intent model
- Future audit logs
- Future ledger entries
- Role-based access foundation

## Day 1 Routes

- `/`
- `/login`
- `/dashboard`
- `/collections/new`
- `/collections/:id`
- `/members`