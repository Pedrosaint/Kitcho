import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { PeakHour } from "../types/analytics.types";

interface Props {
  data: PeakHour[];
}

export default function PeakHoursChart({ data }: Props) {
  const maxOrders = Math.max(...data.map((d) => d.orders));

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-900">Peak Hours</h3>
      <p className="mb-4 text-sm text-gray-500">Order distribution throughout the day</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
          <Tooltip />
          <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
            {data.map((entry) => {
              const intensity = entry.orders / maxOrders;
              const color = intensity > 0.7 ? "#ea580c" : intensity > 0.4 ? "#f97316" : "#fdba74";
              return <Cell key={entry.hour} fill={color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
