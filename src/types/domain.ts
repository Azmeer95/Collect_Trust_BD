export type PaymentProvider =
  | "bkash"
  | "nagad"
  | "rocket"
  | "upay"
  | "bank"
  | "cash";

export type CollectionStatus =
  | "draft"
  | "active"
  | "closed"
  | "cancelled";

export type PaymentStatus =
  | "unpaid"
  | "pending"
  | "paid"
  | "rejected"
  | "disputed";

export type UserRole =
  | "collector"
  | "member"
  | "viewer"
  | "admin";

export type Profile = {
  id: string;
  full_name: string;
  phone_masked: string | null;
  demo_nid_masked: string | null;
  role: "collector" | "member" | "admin";
  created_at: string;
};

export type Group = {
  id: string;
  name: string;
  description: string | null;
  created_by: string;
  created_at: string;
};

export type Membership = {
  id: string;
  group_id: string;
  profile_id: string;
  role: "collector" | "member" | "viewer";
  status: "active" | "invited" | "removed";
  created_at: string;
};

export type Collection = {
  id: string;
  group_id: string;
  title: string;
  description: string | null;
  amount_per_member_paisa: number;
  currency: "BDT";
  due_date: string;
  status: CollectionStatus;
  created_by: string;
  created_at: string;
};

export type CollectionMember = {
  id: string;
  collection_id: string;
  profile_id: string;
  expected_amount_paisa: number;
  paid_amount_paisa: number;
  status: PaymentStatus;
  preferred_provider: PaymentProvider | null;
  created_at: string;
};