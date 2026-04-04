import type { Order } from "../types/order.types";

export async function fetchOrders(): Promise<Order[]> {
  return [
    { id: "#ORD-1234", customer: "John Doe", chef: "Mama's Kitchen", amount: "₦3,500", status: "Delivered", date: "2026-04-03 14:30" },
    { id: "#ORD-1235", customer: "Sarah Smith", chef: "Spice Route", amount: "₦5,200", status: "Preparing", date: "2026-04-03 14:18" },
    { id: "#ORD-1236", customer: "Mike Johnson", chef: "Bowl & Co", amount: "₦2,800", status: "Pending", date: "2026-04-03 14:12" },
    { id: "#ORD-1237", customer: "Emily Brown", chef: "The Grill House", amount: "₦6,500", status: "Delivered", date: "2026-04-03 13:45" },
    { id: "#ORD-1238", customer: "David Wilson", chef: "Fresh Bites", amount: "₦4,100", status: "Preparing", date: "2026-04-03 13:38" },
    { id: "#ORD-1239", customer: "Lisa Anderson", chef: "Mama's Kitchen", amount: "₦3,200", status: "Cancelled", date: "2026-04-03 13:15" },
  ];
}
