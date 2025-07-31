import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // <-- this is correct!

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4 py-20 text-center">
        <h1 className="text-3xl font-light tracking-wide uppercase mb-4 text-black">
          Your Bag is Empty
        </h1>
        <p className="text-gray-500 text-sm mb-10 font-light tracking-wide">
          You haven’t added any products yet.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors duration-200"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light uppercase tracking-wide mb-12 text-center">
          Shopping Bag
        </h1>
        <ul className="divide-y divide-gray-200 mb-12">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center py-6 gap-6">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain border rounded"
              />
              {/* Info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-md uppercase tracking-wide font-light mb-2">
                  {item.title}
                </h2>
                <div className="flex items-center text-sm">
                  ₹{item.price} ×
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e =>
                      updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                    }
                    className="ml-2 px-2 w-16 border border-gray-300 rounded text-center"
                  />
                  <span className="ml-4 font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-gray-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {/* Total + Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-lg tracking-wide">
            <span className="uppercase text-sm text-gray-500">Total</span><br />
            <span className="text-xl font-light">₹{total.toFixed(2)}</span>
          </div>
          <button
            onClick={clearCart}
            className="text-sm uppercase text-gray-600 hover:text-black underline tracking-wide"
          >
            Clear Bag
          </button>
        </div>
        <button
          onClick={() => {
            alert("Checkout Coming Soon!");
            navigate("/");
          }}
          className="w-full py-4 bg-black text-white uppercase tracking-wider font-medium hover:bg-gray-900 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}
