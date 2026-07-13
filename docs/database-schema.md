# CollectTrust BD — Database Schema

## Core Relationship

auth.users
→ profiles
→ memberships
→ groups
→ collections
→ collection_members

## Core Tables

### profiles
Stores CollectTrust-specific user information linked 1:1 to Supabase Auth.

### groups
Represents a collection community or organization.

### memberships
Connects users to groups and stores their role.

### collections
Represents a specific collection campaign.

### collection_members
Stores the expected amount, paid amount, payment status, and preferred provider for each member in a collection.

## Money Storage

All monetary values are stored as integer paisa.

Example:

৳1,500 = 150000 paisa

## Privacy

No real NID data is stored.

Phone numbers shown in the MVP are masked.

## Security

Row-Level Security is enabled from the beginning.

The initial RLS policies are starter policies and will be tightened as new payment, proof, dispute, and role flows are added.