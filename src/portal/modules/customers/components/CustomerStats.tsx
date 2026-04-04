import { Users, UserCheck, UserX } from "lucide-react";
import type { CustomerStats as Stats } from "../types/customer.types";
import AnimatedCard from "../../../../shared/components/AnimatedCard";
import CountUp from "../../../../shared/components/CountUp";

interface Props {
  stats: Stats;
}

export default function CustomerStats({ stats }: Props) {
  const cards = [
    { label: "Total Customers", value: stats.totalCustomers, icon: Users, gradient: "from-gray-700 to-gray-500" },
    { label: "Active Users", value: stats.activeUsers, icon: UserCheck, gradient: "from-green-500 to-emerald-400" },
    { label: "Suspended", value: stats.suspended, icon: UserX, gradient: "from-red-500 to-rose-400" },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {cards.map((card, i) => (
        <AnimatedCard key={card.label} delay={i * 0.08} className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <CountUp value={card.value} className="text-2xl font-bold text-gray-900" />
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
            <div className={`rounded-xl bg-linear-to-br ${card.gradient} p-3`}>
              <card.icon size={22} className="text-white" />
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}
