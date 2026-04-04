import type { Transaction, TransactionStats } from "../types/transaction.types";

export async function fetchTransactionStats(): Promise<TransactionStats> {
  return {
    totalVolume: "₦4,250,000",
    completed: "1,245",
    pending: "12",
    failed: "8",
  };
}

export async function fetchTransactions(): Promise<Transaction[]> {
  return [
    { id: "TXN-001234", userName: "John Doe", userRole: "Customer", amount: "₦3,500", type: "Order Payment", status: "Completed", date: "2026-04-03 14:30" },
    { id: "TXN-001235", userName: "Mama's Kitchen", userRole: "Chef", amount: "₦125,000", type: "Withdrawal", status: "Completed", date: "2026-04-03 12:15" },
    { id: "TXN-001236", userName: "Sarah Smith", userRole: "Customer", amount: "₦5,200", type: "Order Payment", status: "Completed", date: "2026-04-03 11:45" },
    { id: "TXN-001237", userName: "Chidi Okonkwo", userRole: "Rider", amount: "₦45,000", type: "Withdrawal", status: "Pending", date: "2026-04-03 10:20" },
    { id: "TXN-001238", userName: "Mike Johnson", userRole: "Customer", amount: "₦2,800", type: "Order Payment", status: "Completed", date: "2026-04-03 09:55" },
    { id: "TXN-001239", userName: "Spice Route", userRole: "Chef", amount: "₦98,000", type: "Withdrawal", status: "Completed", date: "2026-04-02 18:30" },
    { id: "TXN-001240", userName: "Emily Brown", userRole: "Customer", amount: "₦6,500", type: "Order Payment", status: "Failed", date: "2026-04-02 16:20" },
  ];
}
