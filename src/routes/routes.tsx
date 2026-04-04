import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../shared/layouts/AdminLayout";
import DashboardPage from "../portal/modules/dashboard/pages/dashboard.page";
import OrderPage from "../portal/modules/orders/pages/order.page";
import CustomerPage from "../portal/modules/customers/pages/customer.page";
import ChefPage from "../portal/modules/chefs/pages/chef.page";
import RiderPage from "../portal/modules/dispatch-riders/pages/rider.page";
import TransactionPage from "../portal/modules/transactions/pages/transaction.page";
import EarningPage from "../portal/modules/earnings/pages/earning.page";
import AnalyticsPage from "../portal/modules/analytics/pages/analytics.page";
import PromotionPage from "../portal/modules/promotions/pages/promotion.page";
import SupportPage from "../portal/modules/support/pages/support.page";
import SettingsPage from "../portal/modules/settings/pages/settings.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "orders", element: <OrderPage /> },
      { path: "customers", element: <CustomerPage /> },
      { path: "chefs", element: <ChefPage /> },
      { path: "dispatch-riders", element: <RiderPage /> },
      { path: "transactions", element: <TransactionPage /> },
      { path: "earnings", element: <EarningPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "promotions", element: <PromotionPage /> },
      { path: "support", element: <SupportPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
