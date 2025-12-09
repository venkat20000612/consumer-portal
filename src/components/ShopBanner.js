import React from "react";
import banner from "../assets/banner-1.png";
import { FiSearch, FiShoppingBag  } from "react-icons/fi";

const ShopBanner = () => {
  return (
    <section
      className="w-full h-[200px] md:h-[300px] flex flex-col justify-center items-center bg-cover bg-center relative "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 drop-shadow-lg">
        Store
      </h1>

     
     <div className="flex justify-center items-center gap-3 mt-4 w-full px-4">
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-[75%] md:w-[40%]">
          <FiSearch className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search for Kuntal Care"
            className="w-full outline-none ml-3 text-sm text-gray-800 bg-transparent"
          />
        </div>

  
      <div className="bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:shadow-lg transition">
        <FiShoppingBag className="text-green-700 text-2xl" />
      </div>

      </div>
    </section>
  );
};

export default ShopBanner;
