import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Shirt, Heart, ShoppingCart } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

const navItems = [
  { to: "/", Icon: Home },
  { to: "/products", Icon: Shirt },
  { to: "/wishlist", Icon: Heart },
  { to: "/cart", Icon: ShoppingCart },
];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-1px_4px_rgba(0,0,0,0.05)] overflow-visible">
      <div className="flex justify-around items-center h-16 relative">
        {navItems.map(({ to, Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`relative flex items-center justify-center w-10 h-10 ${
                isActive ? "text-black" : "text-neutral-500"
              } hover:text-black`}
            >
              <Icon size={22} />
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 w-1.5 h-1.5 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          );
        })}

        {/* ✅ Interactive ProfileMenu with working dropdown */}
        <div className="relative z-50 w-12 h-12 flex items-center justify-center">
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
}