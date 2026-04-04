import { useCustomers } from "../hooks/useCustomers";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import CustomerStats from "../components/CustomerStats";
import CustomersTable from "../components/CustomersTable";

export default function CustomerPage() {
  const { customers, stats, loading } = useCustomers();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-36 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-64 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={3} />
        <TableSkeleton columns={6} rows={6} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Customers</h2>
          <p className="text-sm text-gray-500">Manage customer accounts and activity</p>
        </div>

        <CustomerStats stats={stats} />
        <CustomersTable customers={customers} />
      </div>
    </AnimatedPage>
  );
}
