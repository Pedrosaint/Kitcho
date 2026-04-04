import { useState } from "react";
import { Plus } from "lucide-react";
import { usePromotions } from "../hooks/usePromotions";
import AnimatedPage from "../../../../shared/components/AnimatedPage";
import StatCardSkeleton from "../../../../shared/components/skeletons/StatCardSkeleton";
import TableSkeleton from "../../../../shared/components/skeletons/TableSkeleton";
import PromoStats from "../components/PromoStats";
import PromotionsTable from "../components/PromotionsTable";
import CreatePromoModal from "../components/CreatePromoModal";

export default function PromotionPage() {
  const { promotions, stats, loading } = usePromotions();
  const [showCreate, setShowCreate] = useState(false);

  if (loading || !stats) {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="h-7 w-36 rounded bg-gray-200 mb-2" />
          <div className="h-4 w-56 rounded bg-gray-100" />
        </div>
        <StatCardSkeleton count={4} />
        <TableSkeleton columns={6} rows={4} />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Promotions</h2>
            <p className="text-sm text-gray-500">Create and manage promo codes</p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex w-full max-w-50 items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 transition-colors"
          >
            <Plus size={16} />
            Create Promo Code
          </button>
        </div>

        <PromoStats stats={stats} />
        <PromotionsTable promotions={promotions} />
        <CreatePromoModal isOpen={showCreate} onClose={() => setShowCreate(false)} />
      </div>
    </AnimatedPage>
  );
}
