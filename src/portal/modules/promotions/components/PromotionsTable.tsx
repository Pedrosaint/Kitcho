import { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import type { Promotion, PromoStatus } from "../types/promotion.types";
import EditPromoModal from "./EditPromoModal";
import DeletePromoModal from "./DeletePromoModal";

const statusStyles: Record<PromoStatus, string> = {
  Active: "bg-green-100 text-green-700",
  Expired: "bg-red-100 text-red-500",
};

interface Props {
  promotions: Promotion[];
}

export default function PromotionsTable({ promotions }: Props) {
  const [editPromo, setEditPromo] = useState<Promotion | null>(null);
  const [deletePromo, setDeletePromo] = useState<Promotion | null>(null);

  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5 text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Promo Code</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Discount</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Expiry Date</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Usage Count</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Status</th>
                <th className="px-5 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo) => (
                <tr key={promo.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4 font-medium text-gray-900">{promo.promoCode}</td>
                  <td className="px-5 py-4 text-gray-700">{promo.discount}</td>
                  <td className="px-5 py-4 text-gray-700">{promo.expiryDate}</td>
                  <td className="px-5 py-4 text-gray-700">{promo.usageCount}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[promo.status]}`}>
                      {promo.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setEditPromo(promo)} className="text-blue-400 hover:text-blue-600">
                        <SquarePen size={18} />
                      </button>
                      <button onClick={() => setDeletePromo(promo)} className="text-red-400 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <EditPromoModal isOpen={!!editPromo} onClose={() => setEditPromo(null)} promotion={editPromo} />
      <DeletePromoModal isOpen={!!deletePromo} onClose={() => setDeletePromo(null)} promotion={deletePromo} />
    </>
  );
}
