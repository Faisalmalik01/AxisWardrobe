import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Loader from "../components/common/Loader";
import { fetchProduct } from "../services/api";
export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  setLoading(true);
  setError("");
  fetchProduct(id)
    .then(setProduct)
    .catch(() => setError("Error loading product."))
    .finally(() => setLoading(false));
}, [id]);

  if (loading) return <Loader />;
  if (error || !product)
    return (
      <div className="py-16 text-center text-red-600 font-body font-semibold">
        {error || "Product not found"}
      </div>
    );

  return (
<section className="min-h-screen bg-white text-black px-4 py-24">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
    {/* Product Image */}
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-[500px] transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>
    </div>

    {/* Product Info */}
    <div className="w-full flex flex-col justify-between">
      <div>
        <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">
          {product.category}
        </p>

        <h1 className="uppercase font-light text-2xl mb-6 leading-tight tracking-wide">
          {product.title}
        </h1>

        <p className="text-lg mb-8 tracking-wide leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="text-lg font-light mb-6">₹{product.price}</div>

        <button
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
          className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-gray-900 transition"
        >
          Add to Bag
        </button>
      </div>
    </div>
  </div>
</section>


  );
}
