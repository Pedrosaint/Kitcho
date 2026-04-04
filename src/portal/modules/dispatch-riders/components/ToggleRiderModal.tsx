import Modal from "../../../../shared/components/Modal";
import type { Rider } from "../types/rider.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  rider: Rider | null;
}

export default function ToggleRiderModal({ isOpen, onClose, rider }: Props) {
  if (!rider) return null;

  const isActivating = rider.status === "Inactive";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isActivating ? "Activate Rider" : "Deactivate Rider"} size="sm">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Are you sure you want to {isActivating ? "activate" : "deactivate"}{" "}
          <span className="font-semibold">{rider.name}</span>?
          {isActivating
            ? " They will be able to accept delivery orders."
            : " They will no longer be able to accept delivery orders."}
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button
            onClick={onClose}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
              isActivating ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isActivating ? "Activate" : "Deactivate"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
