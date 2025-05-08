import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Vinho Tinto Premium",
    image: "/images/vinho-tinto.jpg",
    price: "R$ 89,90",
    description: "Um vinho encorpado, perfeito para noites frias.",
  },
  {
    name: "Vinho Branco Suave",
    image: "/images/vinho-branco.jpg",
    price: "R$ 74,90",
    description: "Refrescante, ideal para acompanhar frutos do mar.",
  },
  {
    name: "Rosé Delicado",
    image: "/images/vinho-rose.jpg",
    price: "R$ 65,00",
    description: "Leve e frutado, perfeito para tardes de verão.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <section className="px-4 mb-[65px] py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
