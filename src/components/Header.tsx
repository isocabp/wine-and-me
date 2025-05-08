"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  onFilterChange: (type: string | null) => void;
};

const Header = ({ onFilterChange }: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (type: string | null) => {
    setSelected(type);
    onFilterChange(type);
  };

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
        <div className="mt-4 flex gap-4 flex-wrap justify-center text-sm text-[#4B0F2F]">
          {["Red", "White", "Rosé"].map((type) => (
            <button
              key={type}
              onClick={() => handleClick(selected === type ? null : type)}
              className={`border rounded-full px-3 py-1 transition ${
                selected === type
                  ? "bg-[#4B0F2F] text-white border-[#4B0F2F]"
                  : "border-[#4B0F2F] hover:bg-[#4B0F2F] hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
