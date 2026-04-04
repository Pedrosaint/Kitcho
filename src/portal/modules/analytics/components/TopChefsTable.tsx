import type { TopChef } from "../types/analytics.types";

const rankColors: Record<number, string> = {
  1: "bg-yellow-100 text-yellow-700",
  2: "bg-gray-100 text-gray-600",
  3: "bg-orange-100 text-orange-700",
  4: "bg-blue-50 text-blue-600",
  5: "bg-green-50 text-green-600",
};

interface Props {
  chefs: TopChef[];
}

export default function TopChefsTable({ chefs }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Chefs</h3>
        <p className="text-sm text-gray-500">Highest revenue generating kitchens</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-175 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Rank</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Kitchen Name</th>
              <th className="pb-3 pr-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Total Orders</th>
              <th className="pb-3 font-semibold text-gray-500 uppercase text-xs tracking-wide">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {chefs.map((chef) => (
              <tr key={chef.rank} className="border-b border-gray-50 last:border-0">
                <td className="py-4 pr-4">
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${rankColors[chef.rank] ?? "bg-gray-50 text-gray-500"}`}>
                    {chef.rank}
                  </span>
                </td>
                <td className="py-4 pr-4 font-medium text-blue-600">{chef.kitchenName}</td>
                <td className="py-4 pr-4 text-gray-700">{chef.totalOrders}</td>
                <td className="py-4 font-medium text-gray-900">{chef.totalRevenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
