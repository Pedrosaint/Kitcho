import { useEffect, useState } from "react";
import type { Customer, CustomerStats } from "../types/customer.types";
import { fetchCustomers, fetchCustomerStats } from "../api/customers.api";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [stats, setStats] = useState<CustomerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [c, s] = await Promise.all([fetchCustomers(), fetchCustomerStats()]);
      setCustomers(c);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  return { customers, stats, loading };
}
