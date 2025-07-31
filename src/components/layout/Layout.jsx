import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./Footer";
import MobileMenuDrawer from "./MobileMenuDrawer";
import MobileSearchBar from "../MobileSearchBar";

export default function Layout({ children, onCartClick }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleMenuClick = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleSearchClick = () => setShowMobileSearch(true);
  const handleCloseSearch = () => setShowMobileSearch(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchText.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setSearchText("");
      setShowMobileSearch(false);
    }
  };

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setShowMobileSearch(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar onCartClick={onCartClick} />
      <MobileNavbar onMenuClick={handleMenuClick} onSearchClick={handleSearchClick} />
      <MobileMenuDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

      {/* Mobile Search Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out bg-white shadow-md ${
          showMobileSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center px-4 py-3 border-b border-gray-200"
        >
          <input
            type="text"
            placeholder="Search for items"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-100 text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            autoFocus
          />
          <button
            type="button"
            onClick={handleCloseSearch}
            className="ml-3 text-black font-semibold text-xl hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </form>
      </div>

      <main className="flex-1 pt-16 pb-20">{children}</main>

      {showMobileSearch && <MobileSearchBar onClose={handleCloseSearch} />}
      
      <BottomNavbar />
      <Footer />
    </div>
  );
}
