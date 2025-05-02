export type Roles = "ADMIN" | "STAFF" | "CUSTOMER" | "FACTORYOWNER";

export type UserEntity = {
  __typename?: "UserEntity";
  createdAt: string; // DateTime
  createdBy?: string | null;
  dateOfBirth?: string | null; // DateTime
  deletedAt?: string | null; // DateTime
  deletedBy?: string | null;
  email?: string | null;
  gender: boolean;
  id: string;
  imageUrl?: string | null;
  isActive: boolean;
  isDeleted: boolean;
  name?: string | null;
  phoneNumber?: string | null;
  role: Roles; // enum type
  updatedAt?: string | null; // DateTime
  updatedBy?: string | null;
};
