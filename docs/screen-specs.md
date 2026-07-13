# CollectTrust BD — Screen Specifications

## Day 1 Screens

1. Landing Page
2. Login Page
3. Dashboard
4. Create Collection
5. Collection Detail
6. Member List

The primary user for Day 1 is the collector.
All screens should be mobile-first.
The app is demo-only and should not imply real payment processing.

## 1. Landing Page

### Purpose
Introduce CollectTrust BD and explain the Bangladesh-specific collection problem.

### Target user
Collector or evaluator viewing the portfolio MVP for the first time.

### Main message
CollectTrust BD helps Bangladesh-based group collectors track shared collections in a structured way instead of relying on WhatsApp threads, screenshots, and manual reminders.

### Sections
1. Hero section
2. Problem section
3. Solution section
4. Demo disclaimer section
5. CTA buttons

### Main CTA
- Start Demo
- Login

### Secondary CTA
- See How It Works

## 2. Login Page

### Purpose
Allow the collector to enter the app.

### Main elements
- Email input
- Password input
- Login button
- Optional demo login button

### Notes
The page should be simple and minimal.
If Supabase auth is not fully wired yet, a demo login flow can be used temporarily.

## 3. Dashboard

### Purpose
Give the collector a quick summary of collection activity and let them navigate to collections.

### Main sections
1. Top summary stats
2. Active collection cards
3. Recent activity
4. Quick action button to create a collection

### Required stats
- Active collections
- Total expected amount
- Total collected amount
- Pending amount
- Number of unpaid members

### Main CTA
- Create Collection

## 4. Create Collection

### Purpose
Allow the collector to create a new collection.

### Required fields
- Collection title
- Description
- Group
- Amount per member
- Due date
- Allowed payment methods

### Primary action
Create Collection

## 5. Collection Detail

### Purpose
Show all important information for one specific collection.

### Required sections
1. Collection header
2. Progress summary
3. Amount summary
4. Member payment status table

### Header should show
- Collection title
- Group name
- Due date
- Collection status

### Progress summary should show
- Total expected
- Total collected
- Remaining amount
- Progress bar

## 6. Member List

### Purpose
Show the members belonging to a group and their basic information.

### Required columns
- Member name
- Masked phone number
- Preferred payment provider
- Group role
- Current overall status (optional)

### Notes
This is a group-level member roster, not a payment-proof screen.