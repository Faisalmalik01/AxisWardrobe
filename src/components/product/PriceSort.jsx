export default function PriceSort({ sortOrder, onSort }) {
  return (
    <div className="flex gap-3">
      {["asc", "desc"].map((order) => (
        <button
          key={order}
          onClick={() => onSort(order)}
          className={`px-4 py-1.5 border text-xs uppercase tracking-wider font-light transition-all duration-200
            ${
              sortOrder === order
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-black hover:bg-black hover:text-white"
            }`}
        >
          Price: {order === "asc" ? "Low → High" : "High → Low"}
        </button>
      ))}
    </div>
  );
}
