import Shimmer from "./Shimmer";

interface Props {
  columns?: number;
  rows?: number;
}

export default function TableSkeleton({ columns = 6, rows = 5 }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="overflow-hidden">
        {/* Header */}
        <div className="flex gap-4 border-b border-gray-100 px-5 py-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Shimmer key={i} className="h-3 w-20 flex-1" />
          ))}
        </div>
        {/* Rows */}
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="flex items-center gap-4 border-b border-gray-50 px-5 py-4 last:border-0">
            {Array.from({ length: columns }).map((_, col) => (
              <Shimmer key={col} className={`h-4 flex-1 ${col === 0 ? "max-w-24" : "max-w-32"}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
