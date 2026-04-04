import type { Earning, EarningStatus } from "../types/earning.types";

const statusStyles: Record<EarningStatus, string> = {
  Settled: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

interface Props {
  earnings: Earning[];
}

export default function EarningsTable({ earnings }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-275 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Order ID</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Customer Payment</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Delivery Fee</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Commission (10%)</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Chef Earnings</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Rider Earnings</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
              <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((earning) => (
              <tr key={earning.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-4 font-medium text-gray-900">{earning.orderId}</td>
                <td className="px-5 py-4 text-gray-700">{earning.customerPayment}</td>
                <td className="px-5 py-4 text-gray-700">{earning.deliveryFee}</td>
                <td className="px-5 py-4 text-orange-500 font-medium">{earning.commission}</td>
                <td className="px-5 py-4 text-green-600 font-medium">{earning.chefEarnings}</td>
                <td className="px-5 py-4 text-blue-600 font-medium">{earning.riderEarnings}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[earning.status]}`}>
                    {earning.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-500">{earning.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
