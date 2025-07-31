import React from "react";
import { Heart } from "lucide-react";

const FeaturedProducts = () => {
  // Sample product data with working placeholder images
  const featuredProducts = [
    {
      id: 1,
      name: "Minimalist Wool Coat",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop",
      badge: "SALE",
      colors: ["Black", "Beige", "Navy"]
    },
    {
      id: 2,
      name: "Classic White Shirt",
      price: "$89",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
      badge: "NEW",
      colors: ["White", "Light Blue", "Black"]
    },
    {
      id: 3,
      name: "Tailored Trousers",
      price: "$159",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      colors: ["Black", "Navy", "Grey", "Brown"]
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      price: "$199",
      originalPrice: "$249",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop",
      badge: "SALE",
      colors: ["Cream", "Grey", "Black"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-[0.2em] text-black mb-2">
            Featured
          </h2>
          <div className="w-12 h-px bg-black mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden bg-white mb-3">
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-medium tracking-wider ${
                      product.badge === "SALE"
                        ? "bg-red-500 text-white"
                        : product.badge === "NEW"
                        ? "bg-black text-white"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex gap-1">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full border border-gray-300 ${
                        color.toLowerCase() === "white"
                          ? "bg-white"
                          : color.toLowerCase() === "black"
                          ? "bg-black"
                          : color.toLowerCase() === "beige"
                          ? "bg-amber-100"
                          : color.toLowerCase() === "navy"
                          ? "bg-blue-900"
                          : color.toLowerCase() === "cream"
                          ? "bg-amber-50"
                          : color.toLowerCase() === "grey" ||
                            color.toLowerCase() === "gray"
                          ? "bg-gray-400"
                          : color.toLowerCase() === "brown"
                          ? "bg-amber-800"
                          : color.toLowerCase() === "blue"
                          ? "bg-blue-600"
                          : color.toLowerCase() === "light blue"
                          ? "bg-blue-300"
                          : "bg-gray-300"
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-black text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;