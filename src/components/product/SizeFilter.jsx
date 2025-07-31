const SIZES = ["S", "M", "L", "XL"];

export default function SizeFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {SIZES.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(selected === size ? "" : size)}
          className={`px-4 py-1.5 border text-xs uppercase tracking-widest font-light transition-all duration-200
            ${
              selected === size
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-black hover:bg-black hover:text-white"
            }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
