import React, { useState } from "react";
import { FiGrid, FiChevronRight } from "react-icons/fi";
import { GiComb, GiStomach, GiBoneKnife } from "react-icons/gi";
import { FaFaceSmileBeam } from "react-icons/fa6";
import { TbShieldCheck } from "react-icons/tb";

const categories = [
  { id: 1, name: "All", icon: <FiGrid /> },
  { id: 2, name: "Hair", icon: <GiComb /> },
  { id: 3, name: "Skin", icon: <FaFaceSmileBeam /> },
  { id: 4, name: "Digestion", icon: <GiStomach /> },
  { id: 5, name: "Bones", icon: <GiBoneKnife /> },
  { id: 6, name: "Immunity", icon: <TbShieldCheck /> },
  { id: 7, name: "More", icon: <FiChevronRight />, noActive: true },
];

const CategoryIcons = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="w-full px-4 py-6">
      <div className="flex md:justify-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => !cat.noActive && setActive(cat.name)}
            className="flex-shrink-0 flex flex-col items-center cursor-pointer"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full shadow-md border text-2xl transition
              ${
                active === cat.name
                  ? "border-green-600 text-green-600"
                  : "border-gray-300 text-gray-600 hover:text-green-500"
              }`}
            >
              {cat.icon}
            </div>

            <span
              className={`text-xs mt-2 font-medium transition
              ${
                active === cat.name && !cat.noActive
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
