import { useChefs } from "../hooks/useChefs";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import ChefStats from "../components/ChefStats";
import ChefsTable from "../components/ChefsTable";

export default function ChefPage() {
  const { chefs, stats, loading } = useChefs();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-40 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={7} rows={6} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Chefs (Vendors)</h2>
          <p className="text-sm text-gray-500">Manage chef accounts and kitchen operations</p>
        </div>

        <ChefStats stats={stats} />
        <ChefsTable chefs={chefs} />
      </div>
    </AnimatedPage>
  );
}
