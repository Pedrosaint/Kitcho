export type ChefStatus = "Active" | "Pending" | "Suspended";

export interface Chef {
  id: string;
  kitchenName: string;
  owner: string;
  location: string;
  orders: number;
  rating: number | null;
  status: ChefStatus;
}

export interface ChefStats {
  totalChefs: string;
  active: string;
  pendingApproval: string;
  suspended: string;
}
