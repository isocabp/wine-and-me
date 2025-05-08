type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-[#4B0F2F] font-serif text-lg">{product.name}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {product.description}
        </p>
        <span className="block text-[#7B294E] text-base font-bold">
          {product.price}
        </span>
      </div>
    </div>
  );
}
