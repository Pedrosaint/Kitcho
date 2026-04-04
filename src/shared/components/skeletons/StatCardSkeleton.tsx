import Shimmer from "./Shimmer";

interface Props {
  count?: number;
}

export default function StatCardSkeleton({ count = 4 }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Shimmer className="h-8 w-24" />
              <Shimmer className="h-4 w-20" />
            </div>
            <Shimmer className="h-12 w-12 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
