import { useDashboard } from "../hooks/useDashboard";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import ChartSkeleton from "../../../../shared/components/skeletons/ChartSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import StatsCards from "../components/StatsCards";
import OrderTrendsChart from "../components/OrderTrendsChart";
import RevenueChart from "../components/RevenueChart";
import RecentOrdersTable from "../components/RecentOrdersTable";

export default function DashboardPage() {
  const { stats, recentOrders, orderTrends, revenueTrends, loading } = useDashboard();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-48 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <TableSkeleton columns={6} rows={5} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>

        <StatsCards stats={stats} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <OrderTrendsChart data={orderTrends} />
          <RevenueChart data={revenueTrends} />
        </div>

        <RecentOrdersTable orders={recentOrders} />
      </div>
    </AnimatedPage>
  );
}
