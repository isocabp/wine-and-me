"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { useCart } from "@/store/cart";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const menu = [
    { name: "home", label: "Home", icon: HomeIcon, path: "/" },
    {
      name: "favorites",
      label: "Favorites",
      icon: HeartIcon,
      path: "/favorites",
    },
    { name: "cart", label: "Cart", icon: ShoppingCartIcon, path: "/cart" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-between items-center shadow-md z-50 md:hidden">
      {menu.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;

        return (
          <button
            key={item.name}
            onClick={() => router.push(item.path)}
            className={`flex flex-col items-center text-xs transition-all ${
              isActive ? "text-[#4B0F2F] font-semibold" : "text-gray-500"
            }`}
          >
            <div className="relative">
              <Icon className={`h-6 w-6 mb-1 ${isActive ? "scale-110" : ""}`} />

              {item.name === "cart" && totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#4B0F2F] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                  {totalItems}
                </span>
              )}
            </div>
            {item.label}
          </button>
        );
      })}
    </footer>
  );
};

export default Footer;
