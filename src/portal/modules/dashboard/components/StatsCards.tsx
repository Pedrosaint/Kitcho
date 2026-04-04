import { ShoppingBag, ChefHat, Bike } from "lucide-react";
import NairaIcon from "../../../../shared/components/NairaIcon";
import type { DashboardStats } from "../types/dashboard.types";
import AnimatedCard from "../../../../shared/components/AnimatedCard";
import CountUp from "../../../../shared/components/CountUp";

const cardConfig = {
  orders: { icon: ShoppingBag, gradient: "from-orange-500 to-amber-400" },
  revenue: { icon: NairaIcon, gradient: "from-green-500 to-emerald-400" },
  chefs: { icon: ChefHat, gradient: "from-blue-500 to-cyan-400" },
  riders: { icon: Bike, gradient: "from-purple-500 to-violet-400" },
};

interface Props {
  stats: DashboardStats;
}

export default function StatsCards({ stats }: Props) {
  const cards = [stats.totalOrders, stats.totalRevenue, stats.activeChefs, stats.activeRiders];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => {
        const config = cardConfig[card.icon];
        const Icon = config.icon;
        return (
          <AnimatedCard key={card.title} delay={i * 0.08} className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <CountUp value={card.value} className="mt-1 block text-2xl font-bold text-gray-900" />
              </div>
              <div className={`rounded-xl bg-linear-to-br ${config.gradient} p-3 shadow-lg shadow-${card.icon === "orders" ? "orange" : card.icon === "revenue" ? "green" : card.icon === "chefs" ? "blue" : "purple"}-500/20`}>
                <Icon size={22} className="text-white" />
              </div>
            </div>
            <p className={`mt-3 text-sm font-medium ${card.change >= 0 ? "text-green-600" : "text-red-500"}`}>
              {card.change >= 0 ? "+" : ""}
              {card.change}%{" "}
              <span className="text-gray-400 font-normal">vs last week</span>
            </p>
          </AnimatedCard>
        );
      })}
    </div>
  );
}
