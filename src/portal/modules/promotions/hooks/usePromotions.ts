import { useEffect, useState } from "react";
import type { Promotion, PromoStats } from "../types/promotion.types";
import { fetchPromotions, fetchPromoStats } from "../api/promotions.api";

export function usePromotions() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [stats, setStats] = useState<PromoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [p, s] = await Promise.all([fetchPromotions(), fetchPromoStats()]);
      setPromotions(p);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  return { promotions, stats, loading };
}
