import type { NotificationPreferences } from "../types/settings.types";

interface Props {
  settings: NotificationPreferences;
  onChange: (updated: NotificationPreferences) => void;
}

const items: { key: keyof NotificationPreferences; label: string }[] = [
  { key: "emailNewOrders", label: "Email notifications for new orders" },
  { key: "emailSupportTickets", label: "Email notifications for support tickets" },
  { key: "dailySummary", label: "Daily summary reports via email" },
  { key: "smsCriticalAlerts", label: "SMS notifications for critical alerts" },
];

export default function NotificationSection({ settings, onChange }: Props) {
  const toggle = (key: keyof NotificationPreferences) => {
    onChange({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
      <p className="mb-5 text-sm text-gray-500">Manage email and push notifications</p>

      <div className="space-y-4">
        {items.map((item) => (
          <label key={item.key} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={settings[item.key]}
              onChange={() => toggle(item.key)}
              className="h-4 w-4 rounded border-gray-300 text-orange-500 accent-orange-500"
            />
            <span className="text-sm text-gray-700">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
