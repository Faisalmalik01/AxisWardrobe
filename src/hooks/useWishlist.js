import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // adjust path if different

const useWishlist = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  // Key: Unique to each user
  const storageKey = user ? `wishlist_${user.email}` : null;

  useEffect(() => {
    if (storageKey) {
      const stored = localStorage.getItem(storageKey);
      setWishlist(stored ? JSON.parse(stored) : []);
    }
  }, [storageKey]);

  const saveWishlist = (updated) => {
    if (!storageKey) return;
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setWishlist(updated);
  };

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      const updated = [...wishlist, product];
      saveWishlist(updated);
    }
  };

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter(item => item.id !== productId);
    saveWishlist(updated);
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};

export default useWishlist;
