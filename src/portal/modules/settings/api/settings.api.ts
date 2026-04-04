import type { PlatformSettings } from "../types/settings.types";

export async function fetchSettings(): Promise<PlatformSettings> {
  return {
    commission: { commissionRate: 10 },
    deliveryFee: { minFee: 300, maxFee: 1500 },
    paymentGateway: {
      paystackPublicKey: "pk_test_xxxxxxxxxxxxxxxx",
      flutterwavePublicKey: "FLWPUBK_TEST-xxxxxxxxxxxxxxxx",
    },
    notifications: {
      emailNewOrders: true,
      emailSupportTickets: true,
      dailySummary: true,
      smsCriticalAlerts: false,
    },
  };
}
