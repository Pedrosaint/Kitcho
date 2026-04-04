import { Save } from "lucide-react";
import { useSettings } from "../hooks/useSettings";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import Shimmer from "../../../../shared/components/skeletons/Shimmer";
import CommissionSection from "../components/CommissionSection";
import DeliveryFeeSection from "../components/DeliveryFeeSection";
import PaymentGatewaySection from "../components/PaymentGatewaySection";
import NotificationSection from "../components/NotificationSection";

function SettingsSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <div className="h-7 w-28 rounded bg-gray-200 mb-2" />
        <div className="h-4 w-64 rounded bg-gray-100" />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
          <Shimmer className="h-5 w-44" />
          <Shimmer className="h-3 w-56" />
          <Shimmer className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}

export default function SettingsPage() {
  const { settings, loading, updateSettings } = useSettings();

  if (loading || !settings) {
    return <SettingsSkeleton />;
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h2>
          <p className="text-sm text-gray-500">Configure platform settings and preferences</p>
        </div>

        <CommissionSection
          settings={settings.commission}
          onChange={(commission) => updateSettings({ ...settings, commission })}
        />

        <DeliveryFeeSection
          settings={settings.deliveryFee}
          onChange={(deliveryFee) => updateSettings({ ...settings, deliveryFee })}
        />

        <PaymentGatewaySection
          settings={settings.paymentGateway}
          onChange={(paymentGateway) => updateSettings({ ...settings, paymentGateway })}
        />

        <NotificationSection
          settings={settings.notifications}
          onChange={(notifications) => updateSettings({ ...settings, notifications })}
        />

        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition-colors">
            <Save size={16} />
            Save Settings
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
}
