import { useEffect, useState } from "react";
import type { Chef, ChefStats } from "../types/chef.types";
import { fetchChefs, fetchChefStats } from "../api/chefs.api";

export function useChefs() {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [stats, setStats] = useState<ChefStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [c, s] = await Promise.all([fetchChefs(), fetchChefStats()]);
      setChefs(c);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  return { chefs, stats, loading };
}
