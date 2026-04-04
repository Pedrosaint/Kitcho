export interface RevenueTrend {
  month: string;
  revenue: number;
}

export interface OrderVolume {
  month: string;
  orders: number;
}

export interface DeliveryPerformance {
  name: string;
  value: number;
  color: string;
}

export interface TopChef {
  rank: number;
  kitchenName: string;
  totalOrders: number;
  totalRevenue: string;
}

export interface CustomerGrowth {
  month: string;
  customers: number;
  newSignups: number;
}

export interface AvgOrderValue {
  month: string;
  value: number;
}

export interface PeakHour {
  hour: string;
  orders: number;
}
