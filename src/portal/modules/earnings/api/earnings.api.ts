import type { Earning, EarningStats } from "../types/earning.types";

export async function fetchEarningStats(): Promise<EarningStats> {
  return {
    platformCommission: "₦2,990",
    chefEarnings: "₦22,510",
    riderEarnings: "₦4,400",
    totalOrders: "6",
  };
}

export async function fetchEarnings(): Promise<Earning[]> {
  return [
    { id: "1", orderId: "#ORD-1234", customerPayment: "₦3,500", deliveryFee: "₦500", commission: "₦350", chefEarnings: "₦2,650", riderEarnings: "₦500", status: "Settled", date: "2026-04-03" },
    { id: "2", orderId: "#ORD-1235", customerPayment: "₦5,200", deliveryFee: "₦700", commission: "₦520", chefEarnings: "₦3,980", riderEarnings: "₦700", status: "Settled", date: "2026-04-03" },
    { id: "3", orderId: "#ORD-1236", customerPayment: "₦2,800", deliveryFee: "₦400", commission: "₦280", chefEarnings: "₦2,120", riderEarnings: "₦400", status: "Pending", date: "2026-04-03" },
    { id: "4", orderId: "#ORD-1237", customerPayment: "₦6,500", deliveryFee: "₦1,000", commission: "₦650", chefEarnings: "₦4,850", riderEarnings: "₦1,000", status: "Settled", date: "2026-04-03" },
    { id: "5", orderId: "#ORD-1238", customerPayment: "₦4,100", deliveryFee: "₦600", commission: "₦410", chefEarnings: "₦3,090", riderEarnings: "₦600", status: "Settled", date: "2026-04-03" },
    { id: "6", orderId: "#ORD-1240", customerPayment: "₦7,800", deliveryFee: "₦1,200", commission: "₦780", chefEarnings: "₦5,820", riderEarnings: "₦1,200", status: "Pending", date: "2026-04-02" },
  ];
}
