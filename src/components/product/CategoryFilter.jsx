import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/api";

export default function CategoryFilter({ selected, onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
    .then(setCategories)
    .catch(() => setCategories([])); // Fallback if error
}, []);
  const baseClasses =
    "px-4 py-1.5 text-xs uppercase tracking-wide border font-light transition-all duration-200";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("")}
        className={`${baseClasses} ${
          selected === ""
            ? "bg-black text-white border-black"
            : "bg-white text-black border-black hover:bg-black hover:text-white"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`${baseClasses} capitalize ${
            selected === cat
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black hover:bg-black hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
