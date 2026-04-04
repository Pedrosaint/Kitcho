import { useEffect, useState } from "react";
import type { Transaction, TransactionStats, TransactionStatus } from "../types/transaction.types";
import { fetchTransactions, fetchTransactionStats } from "../api/transactions.api";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [stats, setStats] = useState<TransactionStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<TransactionStatus | "All">("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function load() {
      const [t, s] = await Promise.all([fetchTransactions(), fetchTransactionStats()]);
      setTransactions(t);
      setStats(s);
      setLoading(false);
    }
    load();
  }, []);

  const filteredTransactions =
    statusFilter === "All"
      ? transactions
      : transactions.filter((t) => t.status === statusFilter);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return { transactions: filteredTransactions, stats, loading, statusFilter, setStatusFilter, showFilters, toggleFilters };
}
