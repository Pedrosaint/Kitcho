import { motion } from "framer-motion";
import { Shield, Zap, Gift } from "lucide-react";
import type { TrustBadge } from "../types/landing.types";

const badgeIcons: Record<string, typeof Shield> = {
  shield: Shield,
  zap: Zap,
  gift: Gift,
};

interface Props {
  trustBadges: TrustBadge[];
}

export default function TrustBadges({ trustBadges }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-4 flex flex-wrap items-center justify-center gap-8 sm:gap-12 bg-white p-10"
    >
      {trustBadges.map((badge) => {
        const Icon = badgeIcons[badge.icon] || Shield;
        return (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-gray-500"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
              <Icon size={16} className="text-orange-400" />
            </div>
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        );
      })}
    </motion.div>
  );
}
