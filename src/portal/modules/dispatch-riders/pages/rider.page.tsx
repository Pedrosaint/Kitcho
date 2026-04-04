import { useRiders } from "../hooks/useRiders";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import RiderStats from "../components/RiderStats";
import RidersTable from "../components/RidersTable";

export default function RiderPage() {
  const { riders, stats, loading } = useRiders();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-44 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-72 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={6} rows={6} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dispatch Riders</h2>
          <p className="text-sm text-gray-500">Manage delivery riders and their performance</p>
        </div>

        <RiderStats stats={stats} />
        <RidersTable riders={riders} />
      </div>
    </AnimatedPage>
  );
}
