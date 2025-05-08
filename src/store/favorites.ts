import { create } from "zustand";

type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
  type: string;
};

type FavoritesState = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (product: Product) => boolean;
};

export const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: [],
  toggleFavorite: (product) => {
    const exists = get().favorites.find((p) => p.name === product.name);
    if (exists) {
      set((state) => ({
        favorites: state.favorites.filter((p) => p.name !== product.name),
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, product],
      }));
    }
  },
  isFavorite: (product) => {
    return !!get().favorites.find((p) => p.name === product.name);
  },
}));
