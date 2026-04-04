import { useAnalytics } from "../hooks/useAnalytics";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import ChartSkeleton from "../../../../shared/components/skeletons/ChartSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import RevenueTrendsChart from "../components/RevenueTrendsChart";
import CustomerGrowthChart from "../components/CustomerGrowthChart";
import AvgOrderValueChart from "../components/AvgOrderValueChart";
import PeakHoursChart from "../components/PeakHoursChart";
import OrderVolumeChart from "../components/OrderVolumeChart";
import DeliveryPerformanceChart from "../components/DeliveryPerformanceChart";
import TopChefsTable from "../components/TopChefsTable";

export default function AnalyticsPage() {
  const { revenueTrends, orderVolume, deliveryPerformance, topChefs, customerGrowth, avgOrderValue, peakHours, loading } = useAnalytics();

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-32 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <TableSkeleton columns={4} rows={5} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics</h2>
          <p className="text-sm text-gray-500">Comprehensive insights and performance metrics</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <RevenueTrendsChart data={revenueTrends} />
          <CustomerGrowthChart data={customerGrowth} />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <AvgOrderValueChart data={avgOrderValue} />
          <PeakHoursChart data={peakHours} />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <OrderVolumeChart data={orderVolume} />
          <DeliveryPerformanceChart data={deliveryPerformance} />
        </div>

        <TopChefsTable chefs={topChefs} />
      </div>
    </AnimatedPage>
  );
}
