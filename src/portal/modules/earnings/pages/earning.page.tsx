import { useEarnings } from "../hooks/useEarnings";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import EarningStats from "../components/EarningStats";
import EarningsTable from "../components/EarningsTable";
import EarningsFilter from "../components/EarningsFilter";

export default function EarningPage() {
  const { earnings, stats, loading, statusFilter, setStatusFilter, showFilters, toggleFilters } = useEarnings();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-52 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={8} rows={6} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Earnings & Settlements</h2>
            <p className="text-sm text-gray-500">Financial breakdown of orders and commissions</p>
          </div>
          <EarningsFilter
            current={statusFilter}
            onChange={setStatusFilter}
            show={showFilters}
            onToggle={toggleFilters}
          />
        </div>

        <EarningStats stats={stats} />
        <EarningsTable earnings={earnings} />

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
          <strong>Note:</strong> Platform commission is automatically calculated as 10% of the order value. Chef earnings include order value minus commission, and rider earnings are based on delivery fees.
        </div>
      </div>
    </AnimatedPage>
  );
}
