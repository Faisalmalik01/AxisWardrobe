import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MobileMenuDrawer({ isOpen, onClose }) {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  const navItems = [
    { label: "WOMAN", path: "/products?category=woman", sub: ["Dresses", "Shoes", "Accessories"] },
    { label: "MAN", path: "/products?category=man", sub: ["Shirts", "Trousers", "Shoes"] },
    { label: "KIDS", path: "/products?category=kids" },
    { label: "NEW IN", path: "/new-in" },
    { label: "SALE", path: "/sale" },
    { label: "ACCOUNT", path: "/account" },
    { label: "WISHLIST", path: "/wishlist" },
    { label: "CART", path: "/cart" },
  ];

  // Lock scroll on open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 bottom-0 w-full max-w-[320px] h-full p-6 bg-white text-black z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-2xl font-semibold self-end text-gray-500 hover:text-black transition mb-6"
        >
          ✕
        </button>

        {/* Nav Menu */}
        <nav className="mt-4 flex flex-col space-y-5 font-sans text-[15px] font-medium uppercase tracking-wide">
          {navItems.map(({ label, path, sub }) => {
            const isActive = location.pathname === path;

            return (
              <div key={label}>
                <button
                  onClick={() => (sub ? setOpenSection(openSection === label ? null : label) : onClose())}
                  className={`w-full text-left transition-colors duration-200 pb-1 border-b border-transparent hover:border-black ${
                    isActive ? "text-orange-500 border-black" : "text-gray-800"
                  }`}
                >
                  {label}
                </button>

                {/* Sub-links */}
                {sub && openSection === label && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2 text-[14px] text-gray-600 font-normal">
                    {sub.map((item) => (
                      <Link
                        key={item}
                        to={`/products?category=${label.toLowerCase()}/${item.toLowerCase()}`}
                        onClick={onClose}
                        className="pl-1 border-l border-transparent hover:border-black transition-all duration-200 hover:text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
