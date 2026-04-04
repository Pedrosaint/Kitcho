import type { Ticket, SupportStats } from "../types/support.types";

export async function fetchSupportStats(): Promise<SupportStats> {
  return {
    totalTickets: "24",
    open: "8",
    inProgress: "6",
    resolved: "10",
  };
}

export async function fetchTickets(): Promise<Ticket[]> {
  return [
    { id: "TKT-001", userName: "John Doe", userRole: "Customer", issueTitle: "Order not delivered", issueDescription: "My order #ORD-1234 was marked as delivered but I never received it.", priority: "High", status: "Open", date: "2026-04-03 10:30" },
    { id: "TKT-002", userName: "Mama's Kitchen", userRole: "Chef", issueTitle: "Payment not received", issueDescription: "I completed 5 orders yesterday but the payment has not been credited to my wallet.", priority: "High", status: "In Progress", date: "2026-04-03 09:15" },
    { id: "TKT-003", userName: "Chidi Okonkwo", userRole: "Rider", issueTitle: "App not working", issueDescription: "The delivery app keeps crashing when I try to accept orders.", priority: "Medium", status: "Open", date: "2026-04-03 08:45" },
    { id: "TKT-004", userName: "Sarah Smith", userRole: "Customer", issueTitle: "Wrong order received", issueDescription: "I ordered Jollof Rice but received Fried Rice instead.", priority: "Low", status: "Resolved", date: "2026-04-02 18:20" },
    { id: "TKT-005", userName: "Spice Route", userRole: "Chef", issueTitle: "Menu update request", issueDescription: "I need help updating my menu items and prices.", priority: "Low", status: "In Progress", date: "2026-04-02 16:00" },
  ];
}
