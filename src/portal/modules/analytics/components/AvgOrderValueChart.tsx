import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "../../../utils/formatCurrency";
import type { AvgOrderValue } from "../types/analytics.types";

interface Props {
  data: AvgOrderValue[];
}

export default function AvgOrderValueChart({ data }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-900">Avg Order Value</h3>
      <p className="mb-4 text-sm text-gray-500">Average revenue per order</p>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="aovGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
          <Tooltip formatter={(value) => [formatCurrency(Number(value)), "Avg Value"]} />
          <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="url(#aovGrad)" strokeWidth={2} dot={{ fill: "#8b5cf6", stroke: "#fff", strokeWidth: 2, r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
