import { Tag, Zap, TimerOff, TrendingUp } from "lucide-react";
import type { PromoStats as Stats } from "../types/promotion.types";
import AnimatedCard from "../../../../shared/components/AnimatedCard";
import CountUp from "../../../../shared/components/CountUp";

interface Props {
  stats: Stats;
}

export default function PromoStats({ stats }: Props) {
  const cards = [
    { label: "Total Promos", value: stats.totalPromos, icon: Tag, gradient: "from-gray-700 to-gray-500" },
    { label: "Active", value: stats.active, icon: Zap, gradient: "from-green-500 to-emerald-400" },
    { label: "Expired", value: stats.expired, icon: TimerOff, gradient: "from-yellow-500 to-amber-400" },
    { label: "Total Usage", value: stats.totalUsage, icon: TrendingUp, gradient: "from-orange-500 to-amber-400" },
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
