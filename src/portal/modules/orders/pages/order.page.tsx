import { useOrders } from "../hooks/useOrders";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import OrdersTable from "../components/OrdersTable";
import OrdersFilter from "../components/OrdersFilter";

export default function OrderPage() {
  const { orders, loading, statusFilter, setStatusFilter, showFilters, toggleFilters } = useOrders();

  if (loading) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-48 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-64 rounded bg-gray-100" />
        </div>
        <TableSkeleton columns={6} rows={6} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Orders Management</h2>
            <p className="text-sm text-gray-500">Manage and track all customer orders</p>
          </div>
          <OrdersFilter
            current={statusFilter}
            onChange={setStatusFilter}
            show={showFilters}
            onToggle={toggleFilters}
          />
        </div>

        <OrdersTable orders={orders} />
      </div>
    </AnimatedPage>
  );
}
