import { Wallet, CircleCheck, Clock, CircleX } from "lucide-react";
import type { TransactionStats as Stats } from "../types/transaction.types";
import AnimatedCard from "../../../../shared/components/AnimatedCard";
import CountUp from "../../../../shared/components/CountUp";

interface Props {
  stats: Stats;
}

export default function TransactionStats({ stats }: Props) {
  const cards = [
    { label: "Total Volume", value: stats.totalVolume, icon: Wallet, gradient: "from-gray-700 to-gray-500" },
    { label: "Completed", value: stats.completed, icon: CircleCheck, gradient: "from-green-500 to-emerald-400" },
    { label: "Pending", value: stats.pending, icon: Clock, gradient: "from-yellow-500 to-amber-400" },
    { label: "Failed", value: stats.failed, icon: CircleX, gradient: "from-red-500 to-rose-400" },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
