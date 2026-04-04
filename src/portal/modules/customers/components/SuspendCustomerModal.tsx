import Modal from "../../../../shared/components/Modal";
import type { Customer } from "../types/customer.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer | null;
}

export default function SuspendCustomerModal({ isOpen, onClose, customer }: Props) {
  if (!customer) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Suspend Customer" size="sm">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Are you sure you want to suspend <span className="font-semibold">{customer.name}</span>? They will no longer be able to place orders.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onClose} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            Suspend
          </button>
        </div>
      </div>
    </Modal>
  );
}
