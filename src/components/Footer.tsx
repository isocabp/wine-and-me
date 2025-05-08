"use client";

import { useState } from "react";
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  const [active, setActive] = useState("home");

  const menu = [
    { name: "home", label: "Home", icon: HomeIcon },
    { name: "favorites", label: "Favorites", icon: HeartIcon },
    { name: "cart", label: "Cart", icon: ShoppingCartIcon },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-between items-center shadow-md z-50 md:hidden">
      {menu.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex flex-col items-center text-xs transition-all ${
              isActive ? "text-[#4B0F2F] font-semibold" : "text-gray-500"
            }`}
          >
            <Icon className={`h-6 w-6 mb-1 ${isActive ? "scale-110" : ""}`} />
            {item.label}
          </button>
        );
      })}
    </footer>
  );
};

export default Footer;
