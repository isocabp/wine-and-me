"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products as allProducts } from "@/data/products";

export default function Home() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProducts = filter
    ? allProducts.filter((p) => p.type === filter)
    : allProducts;

  return (
    <main className="min-h-screen pb-24 bg-[#FAFAF8]">
      <Header onFilterChange={setFilter} />
      <section className="px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
