import type { Customer, CustomerStats } from "../types/customer.types";

export async function fetchCustomerStats(): Promise<CustomerStats> {
  return {
    totalCustomers: "2,845",
    activeUsers: "2,820",
    suspended: "25",
  };
}

export async function fetchCustomers(): Promise<Customer[]> {
  return [
    { id: "1", name: "John Doe", email: "john@example.com", phone: "+234 801 234 5678", totalOrders: 45, status: "Active" },
    { id: "2", name: "Sarah Smith", email: "sarah@example.com", phone: "+234 802 345 6789", totalOrders: 32, status: "Active" },
    { id: "3", name: "Mike Johnson", email: "mike@example.com", phone: "+234 803 456 7890", totalOrders: 28, status: "Active" },
    { id: "4", name: "Emily Brown", email: "emily@example.com", phone: "+234 804 567 8901", totalOrders: 52, status: "Active" },
    { id: "5", name: "David Wilson", email: "david@example.com", phone: "+234 805 678 9012", totalOrders: 18, status: "Suspended" },
    { id: "6", name: "Lisa Anderson", email: "lisa@example.com", phone: "+234 806 789 0123", totalOrders: 38, status: "Active" },
  ];
}
