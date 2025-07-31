const API = import.meta.env.VITE_API_URL;

export async function fetchProducts(category = "") {
  let url = category ? `${API}/products/category/${encodeURIComponent(category)}` : `${API}/products`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch products.");
  return await response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${API}/products/categories`);
  if (!response.ok) throw new Error("Failed to fetch categories.");
  return await response.json();
}

export async function fetchProduct(id) {
  const response = await fetch(`${API}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product.");
  return await response.json();
}
