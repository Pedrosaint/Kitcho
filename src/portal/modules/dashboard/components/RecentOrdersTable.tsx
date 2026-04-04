import type { OrderStatus, RecentOrder } from "../types/dashboard.types";

const statusStyles: Record<OrderStatus, string> = {
  Delivered: "bg-green-100 text-green-700",
  Preparing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

interface Props {
  orders: RecentOrder[];
}

export default function RecentOrdersTable({ orders }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <p className="text-sm text-gray-500">Latest customer orders</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-212.5 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Order ID</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Customer</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Chef</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Amount</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
              <th className="pb-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 last:border-0">
                <td className="py-3.5 pr-4 font-medium text-gray-900">{order.id}</td>
                <td className="py-3.5 pr-4 text-gray-700">{order.customer}</td>
                <td className="py-3.5 pr-4 text-gray-700">{order.chef}</td>
                <td className="py-3.5 pr-4 font-medium text-gray-900">{order.amount}</td>
                <td className="py-3.5 pr-4">
                  <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3.5 text-gray-500">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
