import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar({ value = "", onChange }) {
  const [searchTerm, setSearchTerm] = useState(value);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync when value changes from props
  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();
    if (trimmed) {
      if (location.pathname !== "/products") {
        navigate(`/products?q=${encodeURIComponent(trimmed)}`);
      } else {
        navigate(`?q=${encodeURIComponent(trimmed)}`);
      }

      if (onChange) onChange(trimmed);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md border-b border-black focus-within:border-black"
    >
      <input
        type="text"
        placeholder="Search"
        className="flex-1 text-sm tracking-wide px-1 py-2 bg-transparent text-black placeholder-gray-500 focus:outline-none"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-sm uppercase font-medium text-black px-3"
      >
        Search
      </button>
    </form>
  );
}
