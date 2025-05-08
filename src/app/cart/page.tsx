"use client";

import { useCart } from "@/store/cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(
      item.price.replace("U$", "").replace(",", ".").trim()
    );
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen pb-24 bg-[#FAFAF8]">
      <Header onFilterChange={() => {}} />

      <section className="px-4 py-10">
        <h2 className="text-[#4B0F2F] text-xl font-semibold mb-6 text-center">
          Your Cart
        </h2>

        {cart.length > 0 ? (
          <>
            <ul className="space-y-6">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-[#4B0F2F] font-serif text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <p className="text-[#4B0F2F] font-semibold">
                Total:{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </p>
              <button
                onClick={clearCart}
                className="mt-4 bg-[#4B0F2F] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
              >
                Finalize Order
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty 🛒</p>
        )}
      </section>

      <Footer />
    </main>
  );
}
