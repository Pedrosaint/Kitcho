export interface CommissionSettings {
  commissionRate: number;
}

export interface DeliveryFeeSettings {
  minFee: number;
  maxFee: number;
}

export interface PaymentGatewaySettings {
  paystackPublicKey: string;
  flutterwavePublicKey: string;
}

export interface NotificationPreferences {
  emailNewOrders: boolean;
  emailSupportTickets: boolean;
  dailySummary: boolean;
  smsCriticalAlerts: boolean;
}

export interface PlatformSettings {
  commission: CommissionSettings;
  deliveryFee: DeliveryFeeSettings;
  paymentGateway: PaymentGatewaySettings;
  notifications: NotificationPreferences;
}
