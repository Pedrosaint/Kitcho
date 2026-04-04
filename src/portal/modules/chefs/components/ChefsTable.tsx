import { useState } from "react";
import { Eye, UserX, CircleCheck, CircleX, Star } from "lucide-react";
import type { Chef, ChefStatus } from "../types/chef.types";
import ViewChefModal from "./ViewChefModal";
import ApproveChefModal from "./ApproveChefModal";
import RejectChefModal from "./RejectChefModal";
import SuspendChefModal from "./SuspendChefModal";

const statusStyles: Record<ChefStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Suspended: "bg-red-100 text-red-500",
};

interface Props {
  chefs: Chef[];
}

export default function ChefsTable({ chefs }: Props) {
  const [viewChef, setViewChef] = useState<Chef | null>(null);
  const [approveChef, setApproveChef] = useState<Chef | null>(null);
  const [rejectChef, setRejectChef] = useState<Chef | null>(null);
  const [suspendChef, setSuspendChef] = useState<Chef | null>(null);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-237.5 text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Kitchen Name</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Owner</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Location</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Orders</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Rating</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {chefs.map((chef) => (
                <tr key={chef.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4 font-medium text-gray-900">{chef.kitchenName}</td>
                  <td className="px-5 py-4 text-gray-700">{chef.owner}</td>
                  <td className="px-5 py-4 text-gray-700">{chef.location}</td>
                  <td className="px-5 py-4 text-gray-700">{chef.orders}</td>
                  <td className="px-5 py-4 text-gray-700">
                    {chef.rating !== null ? (
                      <span className="inline-flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        {chef.rating}
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[chef.status]}`}>
                      {chef.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setViewChef(chef)} className="text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                      {chef.status === "Active" && (
                        <button onClick={() => setSuspendChef(chef)} className="text-red-400 hover:text-red-600">
                          <UserX size={18} />
                        </button>
                      )}
                      {chef.status === "Pending" && (
                        <>
                          <button onClick={() => setApproveChef(chef)} className="text-green-500 hover:text-green-700">
                            <CircleCheck size={18} />
                          </button>
                          <button onClick={() => setRejectChef(chef)} className="text-red-400 hover:text-red-600">
                            <CircleX size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ViewChefModal isOpen={!!viewChef} onClose={() => setViewChef(null)} chef={viewChef} />
      <ApproveChefModal isOpen={!!approveChef} onClose={() => setApproveChef(null)} chef={approveChef} />
      <RejectChefModal isOpen={!!rejectChef} onClose={() => setRejectChef(null)} chef={rejectChef} />
      <SuspendChefModal isOpen={!!suspendChef} onClose={() => setSuspendChef(null)} chef={suspendChef} />
    </>
  );
}
