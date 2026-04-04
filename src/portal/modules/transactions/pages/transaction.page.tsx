import { useTransactions } from "../hooks/useTransactions";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import TransactionStats from "../components/TransactionStats";
import TransactionsTable from "../components/TransactionsTable";
import TransactionsFilter from "../components/TransactionsFilter";

export default function TransactionPage() {
  const { transactions, stats, loading, statusFilter, setStatusFilter, showFilters, toggleFilters } = useTransactions();

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-40 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-64 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={6} rows={7} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Transactions</h2>
            <p className="text-sm text-gray-500">Monitor all payment transactions</p>
          </div>
          <TransactionsFilter
            current={statusFilter}
            onChange={setStatusFilter}
            show={showFilters}
            onToggle={toggleFilters}
          />
        </div>

        <TransactionStats stats={stats} />
        <TransactionsTable transactions={transactions} />
      </div>
    </AnimatedPage>
  );
}
