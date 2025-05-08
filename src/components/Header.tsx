"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="bg-[#FAFAF8] px-4 py-6 shadow-sm">
      <h1 className="text-2xl font-serif text-[#4B0F2F] text-center tracking-widest">
        WINE & ME
      </h1>

      <div className="mt-6 flex justify-center items-center gap-2">
        <span className="text-[#4B0F2F] text-sm font-medium">Filter by</span>

        <button onClick={() => setShowFilters(!showFilters)}>
          <ChevronDownIcon
            className={`h-5 w-5 text-[#4B0F2F] transition-transform ${
              showFilters ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 flex gap-4 flex-wrap text-sm text-[#4B0F2F]">
          <button className="border border-[#4B0F2F] rounded-full px-3 py-1 hover:bg-[#4B0F2F] hover:text-white transition">
            Red
          </button>
          <button className="border border-[#4B0F2F] rounded-full px-3 py-1 hover:bg-[#4B0F2F] hover:text-white transition">
            White
          </button>
          <button className="border border-[#4B0F2F] rounded-full px-3 py-1 hover:bg-[#4B0F2F] hover:text-white transition">
            Rosé
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
