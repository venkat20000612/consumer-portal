import React from "react";
import ProductCard from "./ProductCard";
import { FiChevronRight } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import mobileImg from "../assets/mobile-appp.png";



const ShopProductSection = ({ products }) => {
  return (
    <section className="px-6 pt-10 pb-12">

      {/* Heading */}
      <h2 className="text-lg md:text-xl text-gray-800 font-semibold mb-6 md:self-start md:ml-6">
        Summer Collection
      </h2>

      {/* Product Cards */}
      <div className="relative flex justify-center gap-6 md:gap-8 flex-wrap md:flex-nowrap">

        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}

       
        <button className="hidden lg:flex absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 bg-white items-center justify-center hover:bg-gray-100 shadow-md">
          <FiChevronRight className="text-2xl text-gray-700" />
        </button>

      </div>


{/* Heading */}
      <h2 className="text-lg md:text-xl text-gray-800 font-semibold mb-6 md:self-start md:ml-6">
  Summer Collection
</h2>

     {/* Product Cards */}
<div className="relative flex justify-center gap-6 md:gap-8 flex-wrap md:flex-nowrap">

 
  {products.map((item) => (
    <ProductCard key={item.id} item={item} />
  ))}

  
  <button className="hidden lg:flex absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 bg-white items-center justify-center hover:bg-gray-100 shadow-md">
    <FiChevronRight className="text-2xl text-gray-700" />
  </button>

</div>

{/* Download Amrutam Ayurveda App Now section */}
<section className="w-full bg-[#faf4e8] py-12 px-4 md:px-10">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

   
    <div className="space-y-6 text-center lg:text-left">

      <h2 className="text-[22px] md:text-[28px] font-bold text-green-800 leading-snug mx-auto lg:mx-0 max-w-[330px]">
        Download Amrutam Ayurveda App Now
      </h2>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed mx-auto lg:mx-0 max-w-[360px]">
        The Amrutam Ayurveda App is your one-stop app for all things Ayurvedic!
        Apart from mimicking the website, the app has added benefits.
      </p>

      
      <div className="grid grid-cols-2 gap-3 md:gap-4 justify-items-center lg:justify-items-start">
        {[
          "Access To Prescriptions",
          "Track Health Efficiently",
          "Direct Chat With Doctors",
          "In-App Reminders",
        ].map((label, i) => (
          <div
            key={i}
            className="bg-[#f0e8d6] rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm flex items-center gap-2 md:gap-3 w-full max-w-[150px] md:max-w-[180px]"
          >
            <FiMessageCircle className="text-green-700 text-lg md:text-xl" />
            <span className="text-[11px] md:text-sm text-gray-700 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center lg:justify-start gap-3 md:gap-4 pt-2">
        <img src={googlePlay} alt="Google Play" className="w-32 md:w-36 cursor-pointer" />
        <img src={appStore} alt="App Store" className="w-32 md:w-36 cursor-pointer" />
      </div>
    </div>

 
    <div className="relative flex justify-center items-center min-h-[260px]">

     
      <div className="absolute w-[210px] md:w-[330px] h-[210px] md:h-[330px] bg-[#e7dfc9] rounded-full -z-10" />

      <img src={mobileImg} className="w-[200px] md:w-[300px] object-contain" alt="App" />

    </div>

  </div>
</section>


    </section>



  );
}
export default ShopProductSection;