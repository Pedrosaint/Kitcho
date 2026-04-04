import { useEffect, useState } from "react";
import type { Rider, RiderStats } from "../types/rider.types";
import { fetchRiders, fetchRiderStats } from "../api/riders.api";

export function useRiders() {
  const [riders, setRiders] = useState<Rider[]>([]);
  const [stats, setStats] = useState<RiderStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [r, s] = await Promise.all([fetchRiders(), fetchRiderStats()]);
      setRiders(r);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  return { riders, stats, loading };
}
