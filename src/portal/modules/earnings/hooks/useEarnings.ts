import { useEffect, useState } from "react";
import type { Earning, EarningStats, EarningStatus } from "../types/earning.types";
import { fetchEarnings, fetchEarningStats } from "../api/earnings.api";

export function useEarnings() {
  const [earnings, setEarnings] = useState<Earning[]>([]);
  const [stats, setStats] = useState<EarningStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<EarningStatus | "All">("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function load() {
      const [e, s] = await Promise.all([fetchEarnings(), fetchEarningStats()]);
      setEarnings(e);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  const filteredEarnings =
    statusFilter === "All"
      ? earnings
      : earnings.filter((e) => e.status === statusFilter);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return { earnings: filteredEarnings, stats, loading, statusFilter, setStatusFilter, showFilters, toggleFilters };
}
