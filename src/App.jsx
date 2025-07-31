import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

// Layout and Auth
import Layout from "./components/layout/Layout";
import PrivateRoute from "./routes/PrivateRoute";


import { Toaster } from "react-hot-toast";

const App = () => {
  const navigate = useNavigate();

  function handleCartClick() {
    navigate("/cart");
  }

  return (
    <Layout onCartClick={handleCartClick}>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />

        {/* ❌ REMOVE this: <Route path="/profile" element={<Profile />} /> */}

        {/* 🔒 Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </Layout>
    
  );
};

export default App;
