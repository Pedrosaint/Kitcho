import Modal from "../../../../shared/components/Modal";
import type { Customer } from "../types/customer.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customer: Customer | null;
}

export default function ViewCustomerModal({ isOpen, onClose, customer }: Props) {
  if (!customer) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Customer Details">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-gray-900">{customer.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-900">{customer.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-900">{customer.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="font-medium text-gray-900">{customer.totalOrders}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className={`font-medium ${customer.status === "Active" ? "text-green-600" : "text-red-500"}`}>{customer.status}</p>
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
