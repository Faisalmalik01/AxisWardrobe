import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
export function useCart() { return useContext(CartContext); }

export function CartProvider({ children }) {
  const { user } = useAuth();
  // Unique per user or guest
  const storageKey = user && user.email ? `cart_${user.email}` : "cart_guest";

  const [cart, setCart] = useState([]);

  // Sync cart when user changes (login/logout)
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setCart(saved ? JSON.parse(saved) : []);
  }, [storageKey]);

  // Save cart to storage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart, storageKey]);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  function isInCart(id) {
    return cart.some(item => item.id === id);
  }

  return (
    <CartContext.Provider value={{
      cart, setCart, addToCart, removeFromCart, updateQuantity, clearCart, isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
}
