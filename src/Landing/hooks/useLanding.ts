import { useEffect, useState } from "react";
import type { Stat, Feature, TrustBadge } from "../types/landing.types";
import { fetchStats, fetchFeatures, fetchTrustBadges } from "../api/landing.api";

export function useLanding() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [trustBadges, setTrustBadges] = useState<TrustBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [s, f, t] = await Promise.all([fetchStats(), fetchFeatures(), fetchTrustBadges()]);
      setStats(s);
      setFeatures(f);
      setTrustBadges(t);
      setLoading(false);
    }
    load();
  }, []);

  return { stats, features, trustBadges, loading };
}
