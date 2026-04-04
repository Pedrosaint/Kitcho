import type { Promotion, PromoStats } from "../types/promotion.types";

export async function fetchPromoStats(): Promise<PromoStats> {
  return {
    totalPromos: "8",
    active: "5",
    expired: "3",
    totalUsage: "1,204",
  };
}

export async function fetchPromotions(): Promise<Promotion[]> {
  return [
    { id: "1", promoCode: "WELCOME20", discount: "20% off", expiryDate: "2026-05-30", usageCount: 245, status: "Active" },
    { id: "2", promoCode: "FREESHIP", discount: "Free Delivery", expiryDate: "2026-04-15", usageCount: 189, status: "Active" },
    { id: "3", promoCode: "SAVE15", discount: "15% off", expiryDate: "2026-06-01", usageCount: 312, status: "Active" },
    { id: "4", promoCode: "SUMMER50", discount: "50% off", expiryDate: "2026-03-31", usageCount: 458, status: "Expired" },
  ];
}
