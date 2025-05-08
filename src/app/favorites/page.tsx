"use client";

import ProductCard from "@/components/ProductCard";
import { useFavorites } from "@/store/favorites";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen pb-24 bg-[#FAFAF8]">
      <Header onFilterChange={() => {}} />

      <section className="px-4 py-10">
        <h2 className="text-[#4B0F2F] text-xl font-semibold mb-6 text-center">
          Your Favorites
        </h2>

        {favorites.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No favorites yet 🍷</p>
        )}
      </section>

      <Footer />
    </main>
  );
}
