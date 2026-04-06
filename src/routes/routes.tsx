import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../shared/layouts/AdminLayout";
import LandingLayout from "../shared/layouts/LandingLayout";
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
import LandingPage from "../Landing/pages/landing.page";
import GeneralLayout from "../shared/layouts/GeneralLayout";
import FaqPage from "../Landing/pages/faq.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  { path: "/faqs", element: <GeneralLayout />, children: [{ index: true, element: <FaqPage /> }] },
  {
    path: "/admin",
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
