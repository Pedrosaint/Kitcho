import Modal from "../../../../shared/components/Modal";
import { Star } from "lucide-react";
import type { Chef } from "../types/chef.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  chef: Chef | null;
}

export default function ViewChefModal({ isOpen, onClose, chef }: Props) {
  if (!chef) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Chef Details">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Kitchen Name</p>
            <p className="font-medium text-gray-900">{chef.kitchenName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Owner</p>
            <p className="font-medium text-gray-900">{chef.owner}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-900">{chef.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Orders</p>
            <p className="font-medium text-gray-900">{chef.orders}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-medium text-gray-900">
              {chef.rating !== null ? (
                <span className="inline-flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  {chef.rating}
                </span>
              ) : "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className={`font-medium ${chef.status === "Active" ? "text-green-600" : chef.status === "Pending" ? "text-yellow-600" : "text-red-500"}`}>{chef.status}</p>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
