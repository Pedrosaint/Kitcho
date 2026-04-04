export type EarningStatus = "Settled" | "Pending";

export interface Earning {
  id: string;
  orderId: string;
  customerPayment: string;
  deliveryFee: string;
  commission: string;
  chefEarnings: string;
  riderEarnings: string;
  status: EarningStatus;
  date: string;
}

export interface EarningStats {
  platformCommission: string;
  chefEarnings: string;
  riderEarnings: string;
  totalOrders: string;
}
