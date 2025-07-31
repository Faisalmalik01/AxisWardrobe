import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();
export function useWishlist() { return useContext(WishlistContext); }

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const storageKey = user && user.email ? `wishlist_${user.email}` : "wishlist_guest";

  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    setWishlist(stored ? JSON.parse(stored) : []);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(wishlist));
  }, [wishlist, storageKey]);

  function addToWishlist(product) {
    setWishlist(prev =>
      prev.some(item => item.id === product.id) ? prev : [...prev, product]
    );
  }

  function removeFromWishlist(id) {
    setWishlist(prev => prev.filter(item => item.id !== id));
  }

  function isInWishlist(id) {
    return wishlist.some(item => item.id === id);
  }

  function toggleWishlist(product) {
    if (isInWishlist(product.id)) removeFromWishlist(product.id);
    else addToWishlist(product);
  }

  return (
    <WishlistContext.Provider value={{
      wishlist, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
}
