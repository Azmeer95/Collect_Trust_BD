# CollectTrust BD — MVP Scope

## 1. Product Summary

CollectTrust BD is a Bangladesh-focused fintech demo MVP for transparent group collections.

It helps a collector create a collection, add members, track expected payment amounts, and see who has paid, who is pending, and who is unpaid.

This version does not process real payments. It does not integrate with live bKash, Nagad, Rocket, Upay, bank, Bangla QR, or Binimoy APIs. It does not collect real NID or real KYC information.

---

## 2. Target User

The first target user is a collector.

Examples:

- Office lunch fund collector
- Building maintenance treasurer
- Class representative
- Trip organizer
- Small community fund manager
- Coaching center fee collector
- Religious/community donation organizer

---

## 3. Core Problem

In Bangladesh, many small group collections are managed through WhatsApp, Messenger, phone calls, bKash/Nagad screenshots, Excel sheets, and manual reminders.

This creates problems such as:

- The collector does not know who paid.
- Members forget to pay.
- Screenshots can be fake or reused.
- Transaction references are hard to match.
- Phone numbers and payment details are exposed in group chats.
- There is no clean audit trail.
- Disputes become personal and messy.

---

## 4. MVP Goal

The MVP goal is to prove that a structured collection system can reduce manual tracking and improve trust.

By the end of the MVP, a collector should be able to:

1. Log in.
2. View dashboard.
3. Create a collection.
4. See members in a group.
5. Track expected payment amount per member.
6. See payment status: unpaid, pending, paid.
7. View basic collection progress.
8. Use demo Bangladesh-style payment methods such as bKash, Nagad, Rocket, Upay, Bank, and Cash.

---

## 5. In Scope for Day 1

Day 1 includes:

- Landing page
- Login page
- Dashboard page
- Create collection page
- Collection detail page
- Member list
- Demo group data
- Basic Supabase schema
- Masked phone numbers
- Demo-only disclaimer
- README explaining the Bangladesh problem

---

## 6. Out of Scope for Day 1

Day 1 does not include:

- Real bKash API
- Real Nagad API
- Real payment gateway
- Real QR payment
- Real NID
- Real KYC
- Payment proof upload
- Screenshot fraud detection
- Ledger posting
- Disputes
- Notifications
- Analytics
- Deployment

These will be handled later in Day 2, Day 3, and Day 4.

---

## 7. User Roles

### Collector

The collector creates and manages collections.

The collector can:

- Create a group
- Create a collection
- View members
- View payment progress
- See who is unpaid, pending, or paid

### Member

The member belongs to a group and is expected to pay.

The member can:

- View assigned collections
- See how much they owe
- See their payment status

### Viewer

The viewer is a future role.

The viewer can:

- View collection summary
- Not approve or edit payments

For Day 1, the main focus is the collector.

---

## 8. Core Entities

### Profile

A user account inside the app.

Example:

- Alif Khandker
- Rahim Uddin
- Nusrat Jahan

### Group

A collection group.

Example:

- Dhaka Office Lunch Circle
- Mohammadpur Building Maintenance Group
- WUB EMBA Batch 77B Fund

### Membership

The connection between a user and a group.

Example:

Rahim is a member of Dhaka Office Lunch Circle.

### Collection

A specific money collection campaign.

Example:

- July Office Lunch Fund
- Generator Repair Fund
- Batch Picnic Advance

### Collection Member

A member’s payment row inside one collection.

Example:

Rahim owes ৳1,500 for July Office Lunch Fund and his status is paid.

---

## 9. Payment Statuses for Day 1

The MVP will use only three statuses first:

### Unpaid

The member has not submitted or made payment yet.

### Pending

The member claims they paid, but it has not been approved yet.

### Paid

The collector has confirmed the payment.

More statuses will come later:

- Rejected
- Disputed
- Refunded
- Reversed

---

## 10. Day 1 Demo Scenario

The demo group is:

Dhaka Office Lunch Circle

The collector is:

Alif Khandker

The members are:

1. Rahim Uddin
2. Nusrat Jahan
3. Tanvir Hasan
4. Farhana Akter
5. Sajid Rahman
6. Mehedi Hasan
7. Samia Karim
8. Arif Chowdhury

The first demo collection is:

July Office Lunch Fund

Amount per member:

৳1,500

Total members:

8

Total expected:

৳12,000

Example statuses:

- 3 paid
- 2 pending
- 3 unpaid

---

## 11. Success Criteria

This MVP scope is successful if someone can open the app and understand:

- What problem it solves
- Who it is for
- What collection is active
- How much money is expected
- Who paid
- Who has not paid
- Why this is relevant in Bangladesh
- Why this is only a demo and not a real payment processor

---

## 12. Product Positioning Statement

CollectTrust BD helps Bangladesh-based group collectors manage shared collections with structured member tracking, masked personal information, and payment-status visibility, without relying only on messy chat threads and screenshots.