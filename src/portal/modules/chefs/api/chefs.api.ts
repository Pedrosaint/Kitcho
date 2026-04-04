import type { Chef, ChefStats } from "../types/chef.types";

export async function fetchChefStats(): Promise<ChefStats> {
  return {
    totalChefs: "156",
    active: "142",
    pendingApproval: "8",
    suspended: "6",
  };
}

export async function fetchChefs(): Promise<Chef[]> {
  return [
    { id: "1", kitchenName: "Mama's Kitchen", owner: "Mrs. Adebayo", location: "Lekki, Lagos", orders: 450, rating: 4.8, status: "Active" },
    { id: "2", kitchenName: "Spice Route", owner: "Mr. Patel", location: "Victoria Island, Lagos", orders: 380, rating: 4.6, status: "Active" },
    { id: "3", kitchenName: "Bowl & Co", owner: "Ms. Johnson", location: "Ikeja, Lagos", orders: 290, rating: 4.7, status: "Active" },
    { id: "4", kitchenName: "The Grill House", owner: "Mr. Williams", location: "Ikoyi, Lagos", orders: 520, rating: 4.9, status: "Active" },
    { id: "5", kitchenName: "Fresh Bites", owner: "Mrs. Okafor", location: "Surulere, Lagos", orders: 310, rating: null, status: "Pending" },
    { id: "6", kitchenName: "Asian Fusion", owner: "Mr. Chen", location: "Ajah, Lagos", orders: 0, rating: 3.2, status: "Suspended" },
  ];
}
