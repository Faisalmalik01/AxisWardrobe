export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-softWhite rounded-2xl shadow-md p-4 flex flex-col gap-4 h-full transition">
      
      {/* Image */}
      <div className="h-52 w-full bg-gray-200 rounded-xl shadow-sm" />

      {/* Title line */}
      <div className="h-5 w-3/4 bg-gray-200 rounded-md" />

      {/* Subtitle line */}
      <div className="h-4 w-1/2 bg-gray-200 rounded-md" />

      {/* Price/Button skeleton */}
      <div className="mt-auto h-10 w-full bg-gray-200 rounded-xl" />
    </div>
  );
}
