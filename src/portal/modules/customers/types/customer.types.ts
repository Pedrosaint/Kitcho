export type CustomerStatus = "Active" | "Suspended";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  status: CustomerStatus;
}

export interface CustomerStats {
  totalCustomers: string;
  activeUsers: string;
  suspended: string;
}
