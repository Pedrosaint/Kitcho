import { useEffect, useState } from "react";
import type { Ticket, SupportStats } from "../types/support.types";
import { fetchTickets, fetchSupportStats } from "../api/support.api";

export function useSupport() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [stats, setStats] = useState<SupportStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [t, s] = await Promise.all([fetchTickets(), fetchSupportStats()]);
      setTickets(t);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  return { tickets, stats, loading };
}
