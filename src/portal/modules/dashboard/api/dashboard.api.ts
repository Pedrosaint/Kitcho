import type {
  DashboardStats,
  RecentOrder,
  OrderTrendPoint,
  RevenueTrendPoint,
} from "../types/dashboard.types";

export async function fetchStats(): Promise<DashboardStats> {
  return {
    totalOrders: { title: "Total Orders", value: "2,845", change: 12.5, icon: "orders" },
    totalRevenue: { title: "Total Revenue", value: "₦4,250,000", change: 8.2, icon: "revenue" },
    activeChefs: { title: "Active Chefs", value: "156", change: 3, icon: "chefs" },
    activeRiders: { title: "Active Riders", value: "89", change: -2, icon: "riders" },
  };
}

export async function fetchRecentOrders(): Promise<RecentOrder[]> {
  return [
    { id: "#ORD-1234", customer: "John Doe", chef: "Mama's Kitchen", amount: "₦3,500", status: "Delivered", time: "5 mins ago" },
    { id: "#ORD-1235", customer: "Sarah Smith", chef: "Spice Route", amount: "₦5,200", status: "Preparing", time: "12 mins ago" },
    { id: "#ORD-1236", customer: "Mike Johnson", chef: "Bowl & Co", amount: "₦2,800", status: "Pending", time: "18 mins ago" },
    { id: "#ORD-1237", customer: "Emily Brown", chef: "The Grill House", amount: "₦6,500", status: "Delivered", time: "25 mins ago" },
    { id: "#ORD-1238", customer: "David Wilson", chef: "Fresh Bites", amount: "₦4,100", status: "Preparing", time: "32 mins ago" },
  ];
}

export async function fetchOrderTrends(): Promise<OrderTrendPoint[]> {
  return [
    { day: "Mon", orders: 220 },
    { day: "Tue", orders: 320 },
    { day: "Wed", orders: 280 },
    { day: "Thu", orders: 390 },
    { day: "Fri", orders: 420 },
    { day: "Sat", orders: 480 },
    { day: "Sun", orders: 510 },
  ];
}

export async function fetchRevenueTrends(): Promise<RevenueTrendPoint[]> {
  return [
    { day: "Mon", revenue: 65000 },
    { day: "Tue", revenue: 105000 },
    { day: "Wed", revenue: 88000 },
    { day: "Thu", revenue: 130000 },
    { day: "Fri", revenue: 195000 },
    { day: "Sat", revenue: 175000 },
    { day: "Sun", revenue: 185000 },
  ];
}
