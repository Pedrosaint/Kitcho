import type { PaymentGatewaySettings } from "../types/settings.types";

interface Props {
  settings: PaymentGatewaySettings;
  onChange: (updated: PaymentGatewaySettings) => void;
}

export default function PaymentGatewaySection({ settings, onChange }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">Payment Gateway Settings</h3>
      <p className="mb-5 text-sm text-gray-500">Configure payment integration keys</p>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-orange-600">Paystack Public Key</label>
          <input
            type="text"
            value={settings.paystackPublicKey}
            onChange={(e) => onChange({ ...settings, paystackPublicKey: e.target.value })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-orange-600">Flutterwave Public Key</label>
          <input
            type="text"
            value={settings.flutterwavePublicKey}
            onChange={(e) => onChange({ ...settings, flutterwavePublicKey: e.target.value })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
          <strong>Note:</strong> These are test keys for development. Replace with live keys in production.
        </div>
      </div>
    </div>
  );
}
