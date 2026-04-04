export type TransactionStatus = "Completed" | "Pending" | "Failed";
export type TransactionType = "Order Payment" | "Withdrawal";
export type UserRole = "Customer" | "Chef" | "Rider";

export interface Transaction {
  id: string;
  userName: string;
  userRole: UserRole;
  amount: string;
  type: TransactionType;
  status: TransactionStatus;
  date: string;
}

export interface TransactionStats {
  totalVolume: string;
  completed: string;
  pending: string;
  failed: string;
}
