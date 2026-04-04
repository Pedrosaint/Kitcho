import { useState } from "react";
import { Star, CircleX, CircleCheck } from "lucide-react";
import type { Rider, RiderStatus } from "../types/rider.types";
import ToggleRiderModal from "./ToggleRiderModal";

const statusStyles: Record<RiderStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Inactive: "bg-gray-100 text-gray-500",
};

interface Props {
  riders: Rider[];
}

export default function RidersTable({ riders }: Props) {
  const [toggleRider, setToggleRider] = useState<Rider | null>(null);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5 text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Name</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Phone</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Deliveries</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Rating</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {riders.map((rider) => (
                <tr key={rider.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4 font-medium text-gray-900">{rider.name}</td>
                  <td className="px-5 py-4 text-gray-700">{rider.phone}</td>
                  <td className="px-5 py-4 text-gray-700">{rider.deliveries}</td>
                  <td className="px-5 py-4 text-gray-700">
                    <span className="inline-flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      {rider.rating}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[rider.status]}`}>
                      {rider.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    {rider.status === "Active" ? (
                      <button onClick={() => setToggleRider(rider)} className="inline-flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-700">
                        <CircleX size={16} />
                        Deactivate
                      </button>
                    ) : (
                      <button onClick={() => setToggleRider(rider)} className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-800">
                        <CircleCheck size={16} />
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToggleRiderModal isOpen={!!toggleRider} onClose={() => setToggleRider(null)} rider={toggleRider} />
    </>
  );
}
