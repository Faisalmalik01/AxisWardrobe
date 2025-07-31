// import { Link } from "react-router-dom";
// import { Heart, ShoppingCart, User } from "lucide-react";
// import ProfileMenu from "./ProfileMenu";

// export default function Navbar({ onCartClick, isLoggedIn = false }) {
//   return (
//     <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-12 py-4 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
//       {/* Logo */}
//       <Link
//         to="/"
//         className="text-[1.6rem] font-semibold tracking-[0.15em] uppercase text-black"
//         aria-label="Go to homepage"
//       >
//         AxisWardrobe
//       </Link>

//       {/* Navigation Links */}
//       <div className="flex items-center space-x-10 text-sm font-medium tracking-wide text-gray-700">
//         {/* Shop */}
//         <Link
//           to="/products"
//           className="relative pb-1 hover:text-black transition-colors duration-200 group"
//         >
//           Shop
//           <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
//         </Link>

//         {/* Wishlist */}
//         <Link
//           to="/wishlist"
//           aria-label="View Wishlist"
//           className="hover:text-black transition-colors duration-200"
//         >
//           <Heart size={20} strokeWidth={1.75} />
//         </Link>

//         {/* Cart */}
//         <button
//           onClick={onCartClick}
//           aria-label="Open Cart"
//           className="hover:text-black transition-colors duration-200"
//         >
//           <ShoppingCart size={22} strokeWidth={1.75} />
//         </button>

//         {/* User / Auth Links */}
//         {isLoggedIn ? (
//           <>
//             <Link
//               to="/profile"
//               className="hover:text-black transition-colors duration-200 flex items-center gap-1"
//             >
//               <User size={20} strokeWidth={1.75} />
//               <span className="hidden lg:inline">Profile</span>
//             </Link>

//             <Link
//               to="/logout"
//               className="hover:text-black transition-colors duration-200"
//             >
//               Logout
//             </Link>
//           </>
//         ) : (
//           <Link
//             to="/login"
//             className="hover:text-black transition-colors duration-200"
//           >
//             Login
//           </Link>
//         )}
//         <ProfileMenu />
//       </div>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

export default function Navbar({ onCartClick }) {
  return (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-12 py-4 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <Link to="/" className="text-xl font-bold tracking-widest uppercase">AxisWardrobe</Link>

      <div className="flex items-center space-x-8 text-sm font-medium text-gray-700">
        <Link to="/products" className="hover:text-black transition">Shop</Link>
        <Link to="/wishlist" className="hover:text-black transition">
          <Heart size={20} />
        </Link>
        <button onClick={onCartClick} className="hover:text-black transition">
          <ShoppingCart size={20} />
        </button>

        {/* Profile Menu for Desktop */}
        <ProfileMenu />
      </div>
    </nav>
  );
}
