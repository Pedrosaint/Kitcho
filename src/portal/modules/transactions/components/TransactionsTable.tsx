import type { Transaction, TransactionStatus } from "../types/transaction.types";

const statusStyles: Record<TransactionStatus, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-500",
};

interface Props {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-225 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Transaction ID</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">User</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Amount</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Type</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-4 font-medium text-gray-900">{txn.id}</td>
                <td className="px-5 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{txn.userName}</p>
                    <p className="text-xs text-gray-400">{txn.userRole}</p>
                  </div>
                </td>
                <td className="px-5 py-4 font-medium text-gray-900">{txn.amount}</td>
                <td className="px-5 py-4 text-gray-700">{txn.type}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[txn.status]}`}>
                    {txn.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-500">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
