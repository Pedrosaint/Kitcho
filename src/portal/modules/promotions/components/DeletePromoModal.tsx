import Modal from "../../../../shared/components/Modal";
import type { Promotion } from "../types/promotion.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  promotion: Promotion | null;
}

export default function DeletePromoModal({ isOpen, onClose, promotion }: Props) {
  if (!promotion) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Promo Code" size="sm">
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Are you sure you want to delete the promo code <span className="font-semibold">{promotion.promoCode}</span>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={onClose} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
