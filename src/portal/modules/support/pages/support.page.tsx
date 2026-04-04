import { useSupport } from "../hooks/useSupport";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import SupportStats from "../components/SupportStats";
import TicketsTable from "../components/TicketsTable";

export default function SupportPage() {
  const { tickets, stats, loading } = useSupport();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-48 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={7} rows={5} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Support & Disputes</h2>
          <p className="text-sm text-gray-500">Manage customer and vendor support tickets</p>
        </div>

        <SupportStats stats={stats} />
        <TicketsTable tickets={tickets} />
      </div>
    </AnimatedPage>
  );
}
