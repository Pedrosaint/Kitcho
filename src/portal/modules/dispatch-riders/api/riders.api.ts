import type { Rider, RiderStats } from "../types/rider.types";

export async function fetchRiderStats(): Promise<RiderStats> {
  return {
    totalRiders: "89",
    active: "72",
    inactive: "17",
    avgRating: "4.7",
  };
}

export async function fetchRiders(): Promise<Rider[]> {
  return [
    { id: "1", name: "Chidi Okonkwo", phone: "+234 801 111 2222", deliveries: 325, rating: 4.9, status: "Active" },
    { id: "2", name: "Ahmed Ibrahim", phone: "+234 802 222 3333", deliveries: 289, rating: 4.7, status: "Active" },
    { id: "3", name: "Emmanuel Bassey", phone: "+234 803 333 4444", deliveries: 412, rating: 4.8, status: "Active" },
    { id: "4", name: "Tunde Adeyemi", phone: "+234 804 444 5555", deliveries: 156, rating: 4.5, status: "Inactive" },
    { id: "5", name: "Ibrahim Musa", phone: "+234 805 555 6666", deliveries: 198, rating: 4.6, status: "Active" },
    { id: "6", name: "Emeka Nwosu", phone: "+234 806 666 7777", deliveries: 245, rating: 4.8, status: "Active" },
  ];
}
