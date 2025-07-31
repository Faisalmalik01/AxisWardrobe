export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      {/* Circle Spinner */}
      <div className="w-10 h-10 border-2 border-black border-t-transparent rounded-full animate-spin mb-4"></div>

      {/* Optional Label */}
      <p className="text-sm tracking-widest uppercase text-gray-600">
        Loading
      </p>
    </div>
  );
}
