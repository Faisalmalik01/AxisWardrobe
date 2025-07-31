import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileSearchBar({ onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/products?q=${encodeURIComponent(query.trim())}`);
    onClose(); // Close the search overlay
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 px-4 py-3 border-b border-gray-200"
      >
        <input
  type="text"
  placeholder="Search products"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="flex-1 px-4 py-2 rounded-lg bg-neutral-100 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
/>

        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-black text-xl font-semibold transition-colors"
        >
          ✕
        </button>
      </form>
    </div>
  );
}
