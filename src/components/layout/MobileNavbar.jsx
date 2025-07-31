import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";

export default function MobileNavbar({ onMenuClick, onSearchClick }) {
  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-white backdrop-blur-lg border-b border-gray-200 shadow-sm px-4 flex items-center justify-between">
      
      {/* Menu Button */}
      <button
        onClick={onMenuClick}
        aria-label="Toggle Menu"
        className="p-2 text-black hover:scale-110 transition-transform"
      >
        <Menu size={24} />
      </button>

      {/* Brand Logo */}
      <Link
        to="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-bold uppercase tracking-tight text-xl text-black"
      >
        AxisWardrobe
      </Link>

      {/* Search Button */}
      <button
        onClick={onSearchClick}
        aria-label="Search"
        className="p-2 text-black hover:scale-110 transition-transform"
      >
        <Search size={24} />
      </button>
    </nav>
  );
}
