import { create } from "zustand";

type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
  type: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.name === product.name);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),

  removeFromCart: (productName) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== productName),
    })),

  clearCart: () => set({ cart: [] }),
}));
