export type RiderStatus = "Active" | "Inactive";

export interface Rider {
  id: string;
  name: string;
  phone: string;
  deliveries: number;
  rating: number;
  status: RiderStatus;
}

export interface RiderStats {
  totalRiders: string;
  active: string;
  inactive: string;
  avgRating: string;
}
