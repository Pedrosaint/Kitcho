import { motion } from "framer-motion";
import { Users, TrendingUp, Store, Star } from "lucide-react";
import type { Stat, TrustBadge } from "../types/landing.types";

const statIcons: Record<string, typeof Users> = {
  users: Users,
  trending: TrendingUp,
  store: Store,
  star: Star,
};

interface Props {
  stats: Stat[];
  trustBadges: TrustBadge[];
}

export default function TrustedBy({ stats }: Props) {
  return (
    <section className="lg:-mt-2 m-5 lg:m-0">
      <div className="mx-auto container px-5 py-4 bg-white rounded-tr-2xl rounded-b-2xl">
        {/* Heading + stats */}
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 md:hidden"
            >
              Trusted by Thousands
            </motion.h2>
            <p className="md:text-lg text-gray-500">
              Join our growing community of happy customers
            </p>

            {/* Avatar stack */}
            <div className="mt-4 flex items-center gap-2 bg-[#FEE0D6] rounded-full px-3 py-1.5 w-max">
              <div className="flex -space-x-3">
                {[
                  "bg-orange-400",
                  "bg-blue-400",
                  "bg-green-400",
                  "bg-purple-400",
                  "bg-rose-400",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-[10px] font-bold`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-orange-500">
                  Trust by 50,000+ Nigerians
                </span>
              </p>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-1 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = statIcons[stat.icon] || Users;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-orange-100 p-4 text-center w-full lg:max-w-30"
                  style={{
                    background: "linear-gradient(to top, #942C07, #FF5A1F)",
                  }}
                >
                  <div className="mx-auto mb-2 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-orange-100 mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
