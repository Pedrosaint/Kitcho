import { Filter } from "lucide-react";
import type { OrderStatus } from "../types/order.types";

const statuses: Array<OrderStatus | "All"> = ["All", "Delivered", "Preparing", "Pending", "Cancelled"];

interface Props {
  current: OrderStatus | "All";
  onChange: (status: OrderStatus | "All") => void;
  show: boolean;
  onToggle: () => void;
}

export default function OrdersFilter({ current, onChange, show, onToggle }: Props) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Filter size={16} />
        Filters
      </button>

      {show && (
        <div className="absolute right-0 top-full z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => {
                onChange(status);
                onToggle();
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                current === status
                  ? "bg-orange-50 text-orange-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
