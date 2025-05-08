import { useFavorites } from "@/store/favorites";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
  type: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product);

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain"
      />

      {/* botão de favorito */}
      <button
        onClick={() => toggleFavorite(product)}
        className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md"
      >
        {favorite ? (
          <HeartSolid className="h-6 w-6 text-[#4B0F2F]" />
        ) : (
          <HeartOutline className="h-6 w-6 text-gray-400" />
        )}
      </button>

      <div className="p-4 space-y-2">
        <h3 className="text-[#4B0F2F] font-serif text-lg">{product.name}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {product.description}
        </p>
        <span className="block text-[#4B0F2F] text-base font-bold">
          {product.price}
        </span>
      </div>
    </div>
  );
}
