import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function useCart() {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [initialized, setInitialized] = useState(false);

  // Unique key per user
  const storageKey = user?.email ? `cart_${user.email}` : null;

  // Load cart from localStorage only once after login
  useEffect(() => {
    if (storageKey && !initialized) {
      const savedCart = localStorage.getItem(storageKey);
      setCart(savedCart ? JSON.parse(savedCart) : []);
      setInitialized(true);
    }
  }, [storageKey, initialized]);

  // Persist cart on every update
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(cart));
    }
  }, [cart, storageKey]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = (wipeStorage = false) => {
    setCart([]);
    if (wipeStorage && storageKey) {
      localStorage.removeItem(storageKey);
    }
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
  };
}