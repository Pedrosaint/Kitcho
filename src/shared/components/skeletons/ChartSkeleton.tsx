import Shimmer from "./Shimmer";

interface Props {
  height?: string;
}

export default function ChartSkeleton({ height = "h-[340px]" }: Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${height}`}>
      <div className="space-y-2 mb-6">
        <Shimmer className="h-5 w-32" />
        <Shimmer className="h-3 w-48" />
      </div>
      <div className="flex items-end gap-3 h-[calc(100%-80px)]">
        {[40, 65, 50, 80, 70, 90, 55].map((h, i) => (
          <Shimmer key={i} className="flex-1 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
