import type { RevenueTrend, OrderVolume, DeliveryPerformance, TopChef, CustomerGrowth, AvgOrderValue, PeakHour } from "../types/analytics.types";

export async function fetchRevenueTrends(): Promise<RevenueTrend[]> {
  return [
    { month: "Oct", revenue: 850000 },
    { month: "Nov", revenue: 920000 },
    { month: "Dec", revenue: 1100000 },
    { month: "Jan", revenue: 1200000 },
    { month: "Feb", revenue: 1400000 },
    { month: "Mar", revenue: 1650000 },
  ];
}

export async function fetchOrderVolume(): Promise<OrderVolume[]> {
  return [
    { month: "Oct", orders: 480 },
    { month: "Nov", orders: 620 },
    { month: "Dec", orders: 750 },
    { month: "Jan", orders: 820 },
    { month: "Feb", orders: 1050 },
    { month: "Mar", orders: 1150 },
  ];
}

export async function fetchDeliveryPerformance(): Promise<DeliveryPerformance[]> {
  return [
    { name: "On Time", value: 85, color: "#22c55e" },
    { name: "Delayed", value: 12, color: "#eab308" },
    { name: "Cancelled", value: 3, color: "#ef4444" },
  ];
}

export async function fetchTopChefs(): Promise<TopChef[]> {
  return [
    { rank: 1, kitchenName: "Mama's Kitchen", totalOrders: 450, totalRevenue: "₦675,000" },
    { rank: 2, kitchenName: "The Grill House", totalOrders: 420, totalRevenue: "₦630,000" },
    { rank: 3, kitchenName: "Spice Route", totalOrders: 380, totalRevenue: "₦570,000" },
    { rank: 4, kitchenName: "Fresh Bites", totalOrders: 310, totalRevenue: "₦465,000" },
    { rank: 5, kitchenName: "Bowl & Co", totalOrders: 290, totalRevenue: "₦435,000" },
  ];
}

export async function fetchCustomerGrowth(): Promise<CustomerGrowth[]> {
  return [
    { month: "Oct", customers: 1820, newSignups: 145 },
    { month: "Nov", customers: 2050, newSignups: 230 },
    { month: "Dec", customers: 2310, newSignups: 260 },
    { month: "Jan", customers: 2480, newSignups: 170 },
    { month: "Feb", customers: 2680, newSignups: 200 },
    { month: "Mar", customers: 2845, newSignups: 165 },
  ];
}

export async function fetchAvgOrderValue(): Promise<AvgOrderValue[]> {
  return [
    { month: "Oct", value: 1770 },
    { month: "Nov", value: 1484 },
    { month: "Dec", value: 1467 },
    { month: "Jan", value: 1463 },
    { month: "Feb", value: 1333 },
    { month: "Mar", value: 1435 },
  ];
}

export async function fetchPeakHours(): Promise<PeakHour[]> {
  return [
    { hour: "8am", orders: 45 },
    { hour: "9am", orders: 62 },
    { hour: "10am", orders: 38 },
    { hour: "11am", orders: 55 },
    { hour: "12pm", orders: 142 },
    { hour: "1pm", orders: 168 },
    { hour: "2pm", orders: 120 },
    { hour: "3pm", orders: 65 },
    { hour: "4pm", orders: 48 },
    { hour: "5pm", orders: 72 },
    { hour: "6pm", orders: 155 },
    { hour: "7pm", orders: 185 },
    { hour: "8pm", orders: 162 },
    { hour: "9pm", orders: 98 },
  ];
}
