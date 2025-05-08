// src/components/Footer.tsx
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-between items-center shadow-md z-50 md:hidden">
      <button className="flex flex-col items-center text-[#4B0F2F] text-xs">
        <HomeIcon className="h-6 w-6 mb-1" />
        Home
      </button>
      <button className="flex flex-col items-center text-[#4B0F2F] text-xs">
        <HeartIcon className="h-6 w-6 mb-1" />
        Favorites
      </button>
      <button className="flex flex-col items-center text-[#4B0F2F] text-xs">
        <ShoppingCartIcon className="h-6 w-6 mb-1" />
        Cart
      </button>
    </footer>
  );
}
