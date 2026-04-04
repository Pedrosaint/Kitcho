import Modal from "../../../../shared/components/Modal";
import type { Chef } from "../types/chef.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  chef: Chef | null;
}

export default function RejectChefModal({ isOpen, onClose, chef }: Props) {
  if (!chef) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reject Chef" size="sm">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Are you sure you want to reject <span className="font-semibold">{chef.kitchenName}</span> ({chef.owner})?
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onClose} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </Modal>
  );
}
