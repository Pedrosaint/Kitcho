export type PromoStatus = "Active" | "Expired";

export interface Promotion {
  id: string;
  promoCode: string;
  discount: string;
  expiryDate: string;
  usageCount: number;
  status: PromoStatus;
}

export interface PromoStats {
  totalPromos: string;
  active: string;
  expired: string;
  totalUsage: string;
}
