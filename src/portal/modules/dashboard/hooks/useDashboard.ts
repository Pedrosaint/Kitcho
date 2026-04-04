import { useEffect, useState } from "react";
import type {
  DashboardStats,
  RecentOrder,
  OrderTrendPoint,
  RevenueTrendPoint,
} from "../types/dashboard.types";
import {
  fetchStats,
  fetchRecentOrders,
  fetchOrderTrends,
  fetchRevenueTrends,
} from "../api/dashboard.api";

export function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
  const [orderTrends, setOrderTrends] = useState<OrderTrendPoint[]>([]);
  const [revenueTrends, setRevenueTrends] = useState<RevenueTrendPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [s, o, ot, rt] = await Promise.all([
        fetchStats(),
        fetchRecentOrders(),
        fetchOrderTrends(),
        fetchRevenueTrends(),
      ]);
      setStats(s);
      setRecentOrders(o);
      setOrderTrends(ot);
      setRevenueTrends(rt);
      setLoading(false);
    }
    load();
  }, []);

  return { stats, recentOrders, orderTrends, revenueTrends, loading };
}
