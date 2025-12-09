import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryIcons from "../components/CategoryIcons";
import ShopBanner from "../components/ShopBanner";
import { AiFillStar } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus } from "react-icons/fi";
import videoImg from "../assets/video-img.png";
import reviewIMG from "../assets/review-image.png"
import { useNavigate } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { FaStethoscope } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import mobileImg from "../assets/mobile-appp.png";
import { GiBowlOfRice } from "react-icons/gi";


const ProductDetails = () => {
  const { id } = useParams();
    
  const navigate = useNavigate(); 

  const product = productsData.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  if (!product) return <h2 className="text-center mt-20">Product Not Found</h2>;

  return (
    <>
      <Navbar />
      <ShopBanner />

      <div className="w-full bg-[#faf4e8] py-3">
        <CategoryIcons />
      </div>

      <div className="bg-[#faf4e8] min-h-screen px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left side of the page images and thumb nails */}
          <div>
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="rounded-xl shadow-md w-full h-[420px] object-cover"
              />

              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-md"
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0
                      ? product.images.length - 1
                      : selectedImage - 1
                  )
                }
              >
                <FiChevronLeft />
              </button>

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center shadow-md"
                onClick={() =>
                  setSelectedImage(
                    selectedImage === product.images.length - 1
                      ? 0
                      : selectedImage + 1
                  )
                }
              >
                <FiChevronRight />
              </button>
            </div>

           
            <div className="flex gap-3 mt-4 justify-center">
              {product.images.map((img, id) => (
                <img
                  key={id}
                  src={img}
                  onClick={() => setSelectedImage(id)}
                  className={`w-20 h-20 rounded-md cursor-pointer shadow ${
                    selectedImage === id
                      ? "opacity-100 border-2 border-green-600"
                      : "opacity-60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* right side of the page content*/}
          <div className="space-y-7 text-gray-800">

            <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>

        
            <div className="flex items-center gap-2">
              <div className="flex text-[#ffb400]">
                {Array.from({ length: 5 }).map((_, id) => (
                  <AiFillStar
                    key={id}
                    className={`text-lg ${
                      id < Math.round(product.rating)
                        ? "text-[#ffb400]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

        
            <p className="text-xl font-bold">₹ {product.price}</p>

        
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 text-sm rounded-full border ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

           
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-500 rounded-full">
                <button className="px-3" onClick={() => qty > 1 && setQty(qty - 1)}>
                  <FiMinus />
                </button>
                <span className="px-4">{qty}</span>
                <button className="px-3" onClick={() => setQty(qty + 1)}>
                  <FiPlus />
                </button>
              </div>

              <button className="bg-[#1f7a3b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#14582a]">
                Add to cart
              </button>
            </div>

          
            <p className="text-sm leading-relaxed">
              {product.description}
            </p>

         
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2"> 
                <GiBowlOfRice className="text-green-700 text-lg" />  <span>Product Highlights</span>
                </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.highlights.map((h, id) => (
                  <div key={id} className="bg-[#f0e8d6] px-4 py-3 rounded-xl shadow text-sm">
                    {h}
                  </div>
                ))}
              </div>
            </div>

      
<div className="space-y-3">
  <h3 className="font-semibold text-lg flex items-center gap-2">
    <GiBowlOfRice className="text-green-700 text-lg" /><span>Key Ingredients</span> 
    </h3>

  <div className="hidden lg:grid grid-cols-2 gap-4">
    {product.ingredients.map((ing, idx) => (
      <div
        key={idx}
        onClick={() => navigate(`/ingredient/${ing.name}`)}
        className="bg-[#f0e8d6] p-4 rounded-xl shadow flex items-center gap-3 cursor-pointer hover:bg-[#e6dec4] transition"
      >
        <img src={ing.img} className="w-12 h-12 rounded object-cover" alt={ing.name} />
        <div>
          <p className="font-semibold text-sm">{ing.name}</p>
          <p className="text-xs text-gray-700">{ing.desc}</p>
        </div>
        <FiChevronRight className="text-green-700" />
      </div>
    ))}
  </div>

  <div className="hidden lg:grid grid-cols-2 gap-4 mt-2">
    {product.ingredients.map((ing, idx) => (
      <div
        key={idx}
        onClick={() => navigate(`/ingredient/${ing.name}`)}
        className="bg-[#f0e8d6] p-4 rounded-xl shadow flex items-center gap-3 cursor-pointer hover:bg-[#e6dec4] transition"
      >
        <img src={ing.img} className="w-12 h-12 rounded object-cover" alt={ing.name} />
        <div>
          <p className="font-semibold text-sm">{ing.name}</p>
          <p className="text-xs text-gray-700">{ing.desc}</p>
        </div>
        <FiChevronRight className="text-green-700" />
      </div>
    ))}
  </div>

</div>



    {/* How to use section */}
<div className="space-y-2">
  <h3 className="font-semibold text-lg">How to use</h3>
  <p className="text-sm bg-[#f0e8d6] p-4 rounded-xl shadow-md leading-relaxed">
    Mix one or two tablespoons of Herbal Child Care Malt with milk or
    100–200ml warm water and then consume twice a day or consult our
    Ayurvedic Expert to find the right Ayurvedic recipe for you.
  </p>
</div>

{/* General Instructions */}
<div className="space-y-2">
  <h3 className="font-semibold text-lg">General Instructions</h3>
  <p className="text-sm bg-[#f0e8d6] p-4 rounded-xl shadow-md leading-relaxed">
    Store in a cool and dry place away from direct sunlight. Not advisable
    for diabetic patients.
  </p>
</div>

{/* Commonly Asked Questions */}
<div className="space-y-4">
  <h3 className="font-semibold text-lg">Commonly Asked Questions</h3>

  
  <div className="bg-[#f0e8d6fd] p-5 rounded-xl shadow-md space-y-1">
    <p className="font-semibold text-sm">
      Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care
    </p>
    <p className="text-xs text-gray-700 leading-relaxed">
      This product is ideal for growing babies and kids to nurture their health
      in a holistic manner.
    </p>
  </div>

 
  <div className="bg-[#f0e8d6] p-5 rounded-xl shadow-md space-y-1">
    <p className="font-semibold text-sm">
      Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care
    </p>
    <p className="text-xs text-gray-700 leading-relaxed">
      Amrutam’s Child Care Malt helps improve immunity and is useful in
      enhancing vitality and vigor in children.<br />
       This 100% natural Ayurvedic
      jam is extremely effective in fighting chronic diseases.<br/> 
      Giving your little one Amrutam’s Child Care Malt daily will help them improve their
      appetite and digestion.<br/>
       It is useful in treating anemia, general debility
      and maintaining a healthy weight.<br/>
       100% Natural and Ayurvedic<br/>
        PETA certified cruelty-free.<br/>
        Hand-picked and ethically sourced ingredients<br/>
        AYUSH certified and US FDA approved
    </p>
  </div>

  {/* Voice Section */}
<div className="mt-14 space-y-4">
  <h3 className="font-semibold text-lg">Trust the voice</h3>

  <div className="w-full flex justify-center">
    <div className="w-full md:w-4/5 lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-lg">
      <img
        src={videoImg}
        alt="Video Thumbnail"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
</div>
          </div>
          
        </div>



        {/* Reviews and Ratings Section */}
<div className="w-full py-16 px-4 md:px-10">
  
  <h3 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
    Reviews and Ratings
  </h3>


  <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 w-full">


    <div className="bg-white rounded-xl p-6 w-full md:w-1/4 shadow-md text-center">
      <h2 className="text-4xl font-bold text-gray-800">5.0</h2>
      <div className="flex justify-center text-[#ffb400] text-xl mt-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <AiFillStar key={idx} />
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Based on 20 reviews
      </p>
    </div>


    <div className="flex gap-4 flex-wrap justify-center">
      <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 shadow-md text-sm font-medium">
        See More Reviews
      </button>
      <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 shadow-md text-sm font-medium">
        Write a review
      </button>
    </div>
  </div>


    <div className="mt-12 w-full">

  <div className="space-y-5 md:space-y-6 max-w-md md:max-w-full mx-auto">

    {[1, 2].map((r) => (
      <div
        key={r}
        className="
          bg-[#fdeed1] p-4 md:p-5 
          rounded-xl shadow-md 
          flex gap-3 md:gap-4 items-start
        "
      >
        
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold shadow">
          SJ
        </div>

       
        <div className="flex-1">
          <p className="text-[13px] md:text-sm leading-relaxed text-gray-700">
            Might be bit early to confirm but yes I can see noticeable 
            difference in my hairfall. Will write again after using it longer.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-gray-600 mt-2">
            <span>Sabarinath J</span>
            <span className="hidden md:block">•</span>
            <span>20 January 2023</span>
            <div className="flex text-[#ffb400] text-[10px] md:text-xs">
              {Array.from({ length: 5 }).map((_, idx) => (
                <AiFillStar key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}

  </div>

</div>


</div>

{/* People also bought section */}
<div className="w-full bg-[#faf4e8] py-14 px-4 md:px-10 mt-10">
  <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
    People has also bought
  </h3>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

    {productsData.slice(0, 3).map((item) => (
      <div
        key={item.id}
        className="bg-[#faf4e8] rounded-3xl shadow-md overflow-hidden w-[260px] md:w-[300px] flex flex-col cursor-pointer hover:scale-[1.02] duration-200"
        onClick={() => navigate(`/product/${item.id}`)}
      >
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-56 md:h-72 object-cover"
        />

        <div className="p-4 flex flex-col gap-2">
          <p className="text-[13px] md:text-sm font-semibold text-gray-800 leading-snug">
            {item.name}
          </p>

          <p className="text-[15px] text-gray-900 font-semibold">
            ₹ {item.price}{" "}
            <span className="text-gray-400 text-xs">· {item.sizes[0]}</span>
          </p>

          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-500">({item.reviews} reviews)</span>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>


{/* Meet our experts section */}
<div className="py-10 bg-[#faf4e8]">

  <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-12">
    Meet our Experts
  </h2>

  <div className="relative flex items-center justify-center gap-6 md:gap-10">

    
    <button className="hidden lg:flex w-14 h-14 rounded-full border bg-white shadow items-center justify-center">
      <FiChevronLeft size={22} className="text-gray-700" />
    </button>

   
    <div className="flex gap-4 overflow-x-auto no-scrollbar md:overflow-visible md:grid md:grid-cols-2 lg:flex lg:gap-8 scroll-smooth px-2">
      {Array(3).fill().map((_, i) => (
        <div
          key={i}
          className="min-w-[250px] sm:min-w-[260px] lg:w-[270px] bg-[#faefd7] rounded-[28px] shadow-xl flex-shrink-0 flex-col"
        >
          
          <div className="flex justify-center mt-8 relative">
            <img
              src={reviewIMG}
              className="w-[115px] h-[115px] rounded-full object-cover border-4 border-[#faefd7]"
              alt="Doctor"
            />

          
            <div className="absolute -bottom-3 bg-black text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <span>4.5</span>
              <AiFillStar className="text-yellow-400 text-sm" />
            </div>
          </div>

      
          <div className="mt-10 text-center px-3">
            <h3 className="font-semibold text-[15px]">Dr. Vaishali Sharma</h3>
            <p className="text-gray-600 text-xs mt-1">
              Ayurveda Practitioner (BAMS, MD)
            </p>

            
            <p className="text-gray-700 text-xs flex justify-center gap-1 items-center mt-2">
              <BsClockHistory size={12} /> 25 years of experience
            </p>

           
            <div className="inline-flex items-center justify-center mx-auto gap-1 bg-green-100 text-green-800 text-[11px] px-3 py-[6px] rounded-full mt-2 shadow-sm">
              <FaStethoscope size={12} /> Skin Specialist
            </div>
          </div>

      
          <button
  className="bg-[#1f7a3b] text-white py-3 w-full rounded-b-[28px] font-semibold text-sm tracking-wide hover:bg-[#14582a] transition-all"
>
  Book a Session
</button>

        </div>
      ))}
    </div>

 
    <button className="hidden lg:flex w-14 h-14 rounded-full border bg-white shadow items-center justify-center">
      <FiChevronRight size={22} className="text-gray-700" />
    </button>

  </div>


  <div className="flex justify-center gap-2 mt-6">
    <span className="w-3 h-3 rounded-full bg-green-800"></span>
    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
  </div>

  <div className="flex justify-center mt-10">
    <button className="border border-gray-700 text-gray-800 py-3 px-7 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-gray-200 hover:border-gray-900 transition-all duration-200">
      Find more experts
      <FiChevronRight className="text-[18px]" />
    </button>
  </div>

</div>

{/* Download Amrutam Ayurveda App Now section */}


<section className="w-full bg-[#faf4e8] px-4 md:px-10">
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




      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
