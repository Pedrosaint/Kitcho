import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ChefHat,
  Bike,
  Receipt,
  Wallet,
  BarChart3,
  Tag,
  Headphones,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Orders", icon: ShoppingCart, path: "/orders" },
  { label: "Customers", icon: Users, path: "/customers" },
  { label: "Chefs (Vendors)", icon: ChefHat, path: "/chefs" },
  { label: "Dispatch Riders", icon: Bike, path: "/dispatch-riders" },
  { label: "Transactions", icon: Receipt, path: "/transactions" },
  { label: "Earnings", icon: Wallet, path: "/earnings" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Promotions", icon: Tag, path: "/promotions" },
  { label: "Support", icon: Headphones, path: "/support" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

interface Props {
  onClose: () => void;
}

export default function Sidebar({ onClose }: Props) {
  return (
    <aside className="flex h-full w-56 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <ChefHat className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-gray-900">Kitcho</h1>
            <p className="text-xs text-gray-400">Admin Portal</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden">
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-2 flex-1 space-y-1 overflow-y-auto px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-l-4 border-orange-500 bg-orange-50/60 text-orange-600 pl-2.5 pr-3"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3"
              }`
            }
          >
            <item.icon className="h-4.5 w-4.5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
