import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopBanner from "../components/ShopBanner";
import { productsData } from "../data/productsData";
import { FiChevronLeft } from "react-icons/fi";
import gokhruImg from "../assets/gokhru.png";


const IngredientDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const sheetRef = useRef(null);
  const startY = useRef(0);
 
  const ingredient = {
    name,
    img: gokhruImg,
    description: "Also known as Tribulus, it's used to prevent infections and manage diabetes. It’s known for its potential to boost testosterone levels and improve reproductive health."
  };

  const product = productsData.find((p) =>
    p.ingredients.some((ing) => ing.name === ingredient?.name)
  ) || productsData[0];

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <Navbar />
      <ShopBanner />

      <div className="bg-[#faf4e8] min-h-screen px-6 md:px-20 py-10">

        {/* Back Button */}
        <button
          className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm mb-6"
          onClick={() => navigate(-1)}
        >
          <FiChevronLeft /> Back
        </button>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT — Ingredient Info */}
          <div className="text-gray-800 pb-32 md:pb-0">
            <img
              src={ingredient.img}
              alt={ingredient.name}
              className="w-72 h-72 mx-auto object-contain rounded-xl bg-[#faf4e8] shadow-md p-4"
            />
            <h2 className="text-xl font-bold mt-6">{ingredient.name}</h2>
            <p className="text-sm mt-3 text-gray-700 leading-relaxed">
              {ingredient.description}
            </p>
          </div>

          {/* RIGHT — ingrident info */}
          <div className="hidden md:block">
            <h3 className="font-semibold text-lg mb-6">
              Products with <span className="text-green-700">"{ingredient.name}"</span>
            </h3>

            <div className="space-y-6">
              {Array(4).fill(product).map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-[#faf4e8] rounded-lg p-3 shadow-md cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img src={item.images[0]} className="w-28 h-28 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name.substring(0, 42)}...</p>
                    <p className="font-semibold mt-1">₹ {item.price}</p>
                  </div>
                  <button className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Darbale bottom sheet enable in mobile */}
<div
  ref={sheetRef}
  className="fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-xl md:hidden transition-all duration-300"
  style={{
    transform: `translateY(${isSheetOpen ? "0%" : "70%"})`,
    touchAction: "none"
  }}
  onTouchStart={(e) => {
    startY.current = e.touches[0].clientY;
  }}
  onTouchMove={(e) => {
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;
    if (diff > 0) {
      e.currentTarget.style.transform = `translateY(${diff}px)`;
    }
  }}
  onTouchEnd={(e) => {
    const currentY = parseInt(
      e.currentTarget.style.transform.replace("translateY(", "")
    );
    if (currentY > 120) {
      setIsSheetOpen(false);
    } else {
      setIsSheetOpen(true);
    }
  }}
>
  <div
    className="w-full flex justify-center mt-2 cursor-pointer"
    onClick={() => setIsSheetOpen(!isSheetOpen)}
  >
    <div className="w-12 h-1.5 bg-gray-400 rounded-full"></div>
  </div>

  <h3 className="font-semibold text-sm text-center mb-4">
    Products with <span className="text-green-700">"{ingredient.name}"</span>
  </h3>

  <div className="max-h-[55vh] overflow-y-scroll px-4 space-y-4 pb-6">
    {Array(4).fill(product).map((item, idx) => (
      <div
        key={idx}
        className="flex gap-4 bg-[#faf4e8] rounded-lg p-3 shadow cursor-pointer"
        onClick={() => navigate(`/product/${item.id}`)}
      >
        <img
          src={item.images[0]}
          className="w-20 h-20 rounded-lg object-cover"
          alt="Ingredient Product"
        />
        <div className="flex-1">
          <p className="text-sm font-semibold">
            {item.name.substring(0, 36)}...
          </p>
          <p className="font-semibold mt-1">₹ {item.price}</p>
        </div>

        <button className="bg-green-700 text-white w-7 h-7 rounded-full flex items-center justify-center">
          +
        </button>
      </div>
    ))}
  </div>
</div>

      </div>

      <Footer />
    </>
  );
};

export default IngredientDetails;
