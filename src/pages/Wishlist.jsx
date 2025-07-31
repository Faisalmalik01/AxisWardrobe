import useWishlist from "../hooks/useWishlist";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-white text-center">
        <h1 className="text-3xl font-light tracking-wide uppercase mb-4 text-black">
          Wishlist is empty
        </h1>
        <p className="text-gray-500 text-sm mb-10 font-light tracking-wide">
          Save your favourites — start curating your ultimate wardrobe today.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors duration-200"
        >
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold uppercase mb-10 text-black tracking-wide">
          Your Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map(product => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl border border-gray-200 overflow-hidden group flex flex-col shadow-sm transition-all duration-300"
            >
              {/* Remove Button */}
              <button
                className="absolute top-4 right-4 z-10 p-1.5 bg-white border border-gray-300 rounded-full shadow-sm hover:scale-110 transition"
                aria-label="Remove from Wishlist"
                 onClick={() => removeFromWishlist(product.id)}
              >
                <Heart fill="#1a1a1a" stroke="#1a1a1a" size={20} />
              </button>

              {/* Product Image */}
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-60 w-full object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between px-5 pb-5">
                <Link
                  to={`/products/${product.id}`}
                  className="mt-3 text-base font-medium text-black uppercase tracking-wide hover:underline"
                >
                  {product.title}
                </Link>

                <div className="text-lg font-semibold text-black mt-2">
                  ₹{product.price}
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 py-2.5 px-4 bg-black text-white rounded-full text-sm tracking-wide font-medium transition hover:bg-neutral-800"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
