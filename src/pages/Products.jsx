import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import CategoryFilter from "../components/product/CategoryFilter";
import SizeFilter from "../components/product/SizeFilter";
import PriceSort from "../components/product/PriceSort";
import SkeletonCard from "../components/common/SkeletonCard";
import SearchBar from "../components/product/SearchBar";
import { fetchProducts } from "../services/api";
const PRODUCTS_PER_PAGE = 8;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryFromURL = searchParams.get("q") || "";
    setSearch(queryFromURL);
  }, [searchParams]);

 useEffect(() => {
  setLoading(true);
  setError("");
  fetchProducts(selectedCategory)
    .then(setProducts)
    .catch(() => setError("An error occurred loading products."))
    .finally(() => setLoading(false));
}, [selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSize, sortOrder, search]);

  let filtered = products;
  if (selectedSize) {
    filtered = filtered.filter(p =>
      Array.isArray(p.sizes) ? p.sizes.includes(selectedSize) : true
    );
  }

  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(p =>
      p.title?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
    );
  }

  if (sortOrder === "asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  return (
    <section className="min-h-screen bg-white px-4 py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 tracking-tight">The Collection</h1>

        {/* Filters */}
<div className="flex flex-col gap-10 mb-10 sticky top-0 z-10 bg-white py-5 px-4">
  <SearchBar value={search} onChange={setSearch} />

  <div className="flex flex-col gap-3">
    <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
    <SizeFilter selected={selectedSize} onSelect={setSelectedSize} />
    <PriceSort sortOrder={sortOrder} onSort={setSortOrder} />
  </div>
</div>



        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : paginated.map(product => <ProductCard key={product.id} product={product} />)
          }

          {!loading && paginated.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No products found.
            </div>
          )}
        </div>

        {/* Pagination */}
{/* Minimalist Monochrome Pagination */}
{totalPages > 1 && (
  <div className="flex justify-center items-center mt-16 gap-2 text-sm font-medium text-black">
    <button
      onClick={() => setCurrentPage(1)}
      disabled={currentPage === 1}
      className="px-2.5 py-1 border border-black text-black rounded hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
    >
      First
    </button>
    <button
      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
      disabled={currentPage === 1}
      className="px-2.5 py-1 border border-black text-black rounded hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
    >
      Prev
    </button>
    <span className="text-gray-700 px-2 select-none">
      Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
    </span>
    <button
      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
      disabled={currentPage === totalPages}
      className="px-2.5 py-1 border border-black text-black rounded hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
    >
      Next
    </button>
    <button
      onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}
      className="px-2.5 py-1 border border-black text-black rounded hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-black"
    >
      Last
    </button>
  </div>
)}

      </div>
    </section>
  );
}
