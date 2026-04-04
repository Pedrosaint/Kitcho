import { Bell, Search, Menu } from "lucide-react";

interface Props {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: Props) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button onClick={onMenuToggle} className="text-gray-500 hover:text-gray-700 lg:hidden">
          <Menu size={22} />
        </button>

        {/* Search */}
        <div className="relative hidden w-96 sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders, customers, chefs..."
            className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-100"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile search */}
        <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 sm:hidden">
          <Search className="h-5 w-5" />
        </button>

        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-orange-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-400">admin@kitcho.com</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
            AU
          </div>
        </div>
      </div>
    </header>
  );
}
