import { useState, useEffect } from "react";
import Modal from "../../../../shared/components/Modal";
import type { Promotion } from "../types/promotion.types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  promotion: Promotion | null;
}

export default function EditPromoModal({ isOpen, onClose, promotion }: Props) {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    if (promotion) {
      setCode(promotion.promoCode);
      setDiscount(promotion.discount);
      setExpiryDate(promotion.expiryDate);
    }
  }, [promotion]);

  if (!promotion) return null;

  const handleSubmit = () => {
    // TODO: integrate with API
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Promo Code">
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Promo Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Discount</label>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={handleSubmit} className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  );
}
