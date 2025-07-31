import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Star, StarHalf, Heart } from "lucide-react";

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return { full, half };
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const stars = getStars(product.rating?.rate || 0);

  return (
    <div className="group relative bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col overflow-hidden transition duration-200 hover:shadow-md hover:-translate-y-1">

      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-4 left-4 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase z-10 ${
          product.badge === "SALE"
            ? "bg-red-600 text-white"
            : "bg-green-600 text-white"
        }`}>
          {product.badge}
        </span>
      )}

      {/* Wishlist Heart */}
      <button
        className="absolute top-4 right-4 z-10"
        onClick={() => toggleWishlist(product)}
        aria-label={isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart
          size={20}
          className={`transition-all ${
            isInWishlist(product.id)
              ? "fill-red-600 text-red-600"
              : "text-gray-300 group-hover:text-red-600"
          }`}
          fill={isInWishlist(product.id) ? "currentColor" : "none"}
        />
      </button>

      {/* Image */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-52 overflow-hidden bg-white rounded-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-6 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="flex flex-col gap-2 mt-4 flex-1">
        {/* Title */}
        <Link
          to={`/products/${product.id}`}
          className="text-sm font-medium text-gray-900 truncate hover:underline"
        >
          {product.title}
        </Link>

        {/* Ratings */}
        <div className="flex items-center gap-0.5">
          {[...Array(stars.full)].map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={0} />
          ))}
          {stars.half && <StarHalf size={14} className="text-yellow-400 fill-yellow-400" strokeWidth={0} />}
          {[...Array(5 - stars.full - (stars.half ? 1 : 0))].map((_, i) => (
            <Star key={i} size={14} className="text-gray-300 fill-gray-300" strokeWidth={0} />
          ))}
          {product.rating && (
            <span className="ml-2 text-xs text-gray-500">{`${product.rating.rate} (${product.rating.count})`}</span>
          )}
        </div>

        {/* Price */}
        <div className="text-base font-semibold text-gray-800">₹{product.price}</div>

        {/* CTA */}
        <button
          onClick={() => addToCart(product)}
          className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors duration-200"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
