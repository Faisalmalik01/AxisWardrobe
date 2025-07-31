import { useState, useEffect } from "react";

// Reusable for any product API fetch, e.g. with params
export default function useProducts(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("An error occurred loading products.");
        setLoading(false);
      });
  }, [url]);

  return { products, loading, error };
}
