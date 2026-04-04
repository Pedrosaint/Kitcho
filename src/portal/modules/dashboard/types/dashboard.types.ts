export interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: "orders" | "revenue" | "chefs" | "riders";
}

export interface DashboardStats {
  totalOrders: StatCard;
  totalRevenue: StatCard;
  activeChefs: StatCard;
  activeRiders: StatCard;
}

export type OrderStatus = "Delivered" | "Preparing" | "Pending" | "Cancelled";

export interface RecentOrder {
  id: string;
  customer: string;
  chef: string;
  amount: string;
  status: OrderStatus;
  time: string;
}

export interface OrderTrendPoint {
  day: string;
  orders: number;
}

export interface RevenueTrendPoint {
  day: string;
  revenue: number;
}
