import type { Order, OrderStatus } from "../types/order.types";

const statusStyles: Record<OrderStatus, string> = {
  Delivered: "bg-green-100 text-green-700",
  Preparing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

interface Props {
  orders: Order[];
}

export default function OrdersTable({ orders }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-212.5 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Order ID</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Customer</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Chef</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Amount</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-4 font-medium text-gray-900">{order.id}</td>
                <td className="px-5 py-4 text-gray-700">{order.customer}</td>
                <td className="px-5 py-4 text-gray-700">{order.chef}</td>
                <td className="px-5 py-4 font-medium text-gray-900">{order.amount}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
