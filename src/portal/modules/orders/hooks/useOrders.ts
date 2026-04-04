import { useEffect, useState } from "react";
import type { Order, OrderStatus } from "../types/order.types";
import { fetchOrders } from "../api/orders.api";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  const filteredOrders =
    statusFilter === "All"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return {
    orders: filteredOrders,
    loading,
    statusFilter,
    setStatusFilter,
    showFilters,
    toggleFilters,
  };
}
