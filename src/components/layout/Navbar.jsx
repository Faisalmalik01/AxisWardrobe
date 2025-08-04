import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import ProfileMenu from "./ProfileMenu";
import { useCart } from "../../context/CartContext";

export default function Navbar({ onCartClick }) {
  const { cart } = useCart();
  // Calculate total quantity from cart items
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-12 py-4 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <Link to="/" className="text-xl font-bold tracking-widest uppercase">
        AxisWardrobe
      </Link>

      <div className="flex items-center space-x-8 text-sm font-medium text-gray-700">
        <Link to="/products" className="hover:text-black transition">
          Shop
        </Link>
        <Link to="/wishlist" className="hover:text-black transition">
          <Heart size={20} />
        </Link>
        <button onClick={onCartClick} className="relative hover:text-black transition">
          <ShoppingCart size={20} />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {totalQuantity}
            </span>
          )}
        </button>

        {/* Profile Menu for Desktop */}
        <ProfileMenu />
      </div>
    </nav>
  );
}
