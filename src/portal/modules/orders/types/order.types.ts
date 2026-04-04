export type OrderStatus = "Delivered" | "Preparing" | "Pending" | "Cancelled";

export interface Order {
  id: string;
  customer: string;
  chef: string;
  amount: string;
  status: OrderStatus;
  date: string;
}
