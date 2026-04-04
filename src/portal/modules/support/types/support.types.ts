export type TicketStatus = "Open" | "In Progress" | "Resolved";
export type TicketPriority = "High" | "Medium" | "Low";
export type UserRole = "Customer" | "Chef" | "Rider";

export interface Ticket {
  id: string;
  userName: string;
  userRole: UserRole;
  issueTitle: string;
  issueDescription: string;
  priority: TicketPriority;
  status: TicketStatus;
  date: string;
}

export interface SupportStats {
  totalTickets: string;
  open: string;
  inProgress: string;
  resolved: string;
}
