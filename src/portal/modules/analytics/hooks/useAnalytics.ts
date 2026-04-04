import { useEffect, useState } from "react";
import type { RevenueTrend, OrderVolume, DeliveryPerformance, TopChef, CustomerGrowth, AvgOrderValue, PeakHour } from "../types/analytics.types";
import { fetchRevenueTrends, fetchOrderVolume, fetchDeliveryPerformance, fetchTopChefs, fetchCustomerGrowth, fetchAvgOrderValue, fetchPeakHours } from "../api/analytics.api";

export function useAnalytics() {
  const [revenueTrends, setRevenueTrends] = useState<RevenueTrend[]>([]);
  const [orderVolume, setOrderVolume] = useState<OrderVolume[]>([]);
  const [deliveryPerformance, setDeliveryPerformance] = useState<DeliveryPerformance[]>([]);
  const [topChefs, setTopChefs] = useState<TopChef[]>([]);
  const [customerGrowth, setCustomerGrowth] = useState<CustomerGrowth[]>([]);
  const [avgOrderValue, setAvgOrderValue] = useState<AvgOrderValue[]>([]);
  const [peakHours, setPeakHours] = useState<PeakHour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [rt, ov, dp, tc, cg, aov, ph] = await Promise.all([
        fetchRevenueTrends(),
        fetchOrderVolume(),
        fetchDeliveryPerformance(),
        fetchTopChefs(),
        fetchCustomerGrowth(),
        fetchAvgOrderValue(),
        fetchPeakHours(),
      ]);
      setRevenueTrends(rt);
      setOrderVolume(ov);
      setDeliveryPerformance(dp);
      setTopChefs(tc);
      setCustomerGrowth(cg);
      setAvgOrderValue(aov);
      setPeakHours(ph);
      setLoading(false);
    }
    load();
  }, []);

  return { revenueTrends, orderVolume, deliveryPerformance, topChefs, customerGrowth, avgOrderValue, peakHours, loading };
}
