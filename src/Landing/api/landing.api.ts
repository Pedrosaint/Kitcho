import type { Stat, Feature, TrustBadge } from "../types/landing.types";

export async function fetchStats(): Promise<Stat[]> {
  return [
    { icon: "users", value: "50k+", label: "Active Users" },
    { icon: "trending", value: "100k+", label: "Orders Delivered" },
    { icon: "store", value: "150+", label: "Verified Kitchen" },
    { icon: "star", value: "4.8★", label: "User Rating" },
  ];
}

export async function fetchFeatures(): Promise<Feature[]> {
  return [
    {
      icon: "rocket",
      iconBg: "bg-orange-100 text-orange-500",
      title: "Faster Delivery Within Your Area",
      description:
        "Hyper-local focus means your food arrives hot and fresh, faster than competitors.",
    },
    {
      icon: "naira",
      iconBg: "bg-green-100 text-green-600",
      title: "Lower Service Fees",
      description:
        "We keep our fees low to ensure both customers and chefs get the best value.",
    },
    {
      icon: "heart",
      iconBg: "bg-rose-100 text-rose-500",
      title: "Reliable Local Vendors",
      description:
        "Support your community by ordering from verified local kitchens and chefs.",
    },
    {
      icon: "sparkle",
      iconBg: "bg-orange-100 text-orange-500",
      title: "Better Customer Experience",
      description:
        "Intuitive app, responsive support, and a seamless ordering process.",
    },
  ];
}

export async function fetchTrustBadges(): Promise<TrustBadge[]> {
  return [
    { icon: "shield", label: "Secure Payment" },
    { icon: "zap", label: "Fast Delivery" },
    { icon: "gift", label: "Cashback Rewards" },
  ];
}
