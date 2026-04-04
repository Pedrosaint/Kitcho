import type { CommissionSettings } from "../types/settings.types";

interface Props {
  settings: CommissionSettings;
  onChange: (updated: CommissionSettings) => void;
}

export default function CommissionSection({ settings, onChange }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">Commission Settings</h3>
      <p className="mb-5 text-sm text-gray-500">Configure platform commission rates</p>

      <div>
        <label className="mb-1 block text-sm font-medium text-orange-600">Commission Rate (%)</label>
        <input
          type="number"
          value={settings.commissionRate}
          onChange={(e) => onChange({ commissionRate: Number(e.target.value) })}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
        <p className="mt-1 text-xs text-gray-400">Percentage taken from each order as platform commission</p>
      </div>
    </div>
  );
}
