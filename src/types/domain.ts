export type PaymentProvider =
  | "bkash"
  | "nagad"
  | "rocket"
  | "upay"
  | "bank"
  | "cash";

export type CollectionStatus = "draft" | "active" | "closed" | "cancelled";

export type PaymentStatus =
  | "unpaid"
  | "pending"
  | "paid"
  | "rejected"
  | "disputed";

export type UserRole = "collector" | "member" | "viewer" | "admin";

export type Profile = {
  id: string;
  fullName: string;
  phoneMasked: string;
  role: UserRole;
};

export type Group = {
  id: string;
  name: string;
  description?: string;
};

export type Collection = {
  id: string;
  groupId: string;
  title: string;
  description?: string;
  amountPerMemberPaisa: number;
  currency: "BDT";
  dueDate: string;
  status: CollectionStatus;
};

export type CollectionMember = {
  id: string;
  collectionId: string;
  profileId: string;
  expectedAmountPaisa: number;
  paidAmountPaisa: number;
  status: PaymentStatus;
  preferredProvider: PaymentProvider;
};