import type { DeliveryFeeSettings } from "../types/settings.types";

interface Props {
  settings: DeliveryFeeSettings;
  onChange: (updated: DeliveryFeeSettings) => void;
}

export default function DeliveryFeeSection({ settings, onChange }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">Delivery Fee Range</h3>
      <p className="mb-5 text-sm text-gray-500">Set minimum and maximum delivery fees</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-orange-600">Minimum Delivery Fee (₦)</label>
          <input
            type="number"
            value={settings.minFee}
            onChange={(e) => onChange({ ...settings, minFee: Number(e.target.value) })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-orange-600">Maximum Delivery Fee (₦)</label>
          <input
            type="number"
            value={settings.maxFee}
            onChange={(e) => onChange({ ...settings, maxFee: Number(e.target.value) })}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
