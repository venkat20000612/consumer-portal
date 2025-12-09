import { FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#faf4e8] rounded-3xl shadow-md overflow-hidden w-[260px] md:w-[300px] flex flex-col cursor-pointer transition-transform hover:scale-[1.03]"
      onClick={() => navigate(`/product/${item.id}`)}
    >
      {/* Image */}
      <div className="w-full h-60 bg-white flex justify-center items-center ">
        <img
           src={item.images ? item.images[0] : item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">

        
        <p className="text-sm font-semibold text-gray-800 leading-snug">
          {item.name}
        </p>

        
        <p className="text-[15px] text-gray-900 font-semibold">
          ₹ {item.price}{" "}
          <span className="text-gray-400 text-xs">· {item.sizes[0]}</span>
        </p>

       
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1 text-[13px]">
            <div className="flex items-center text-[#ffb400]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <AiFillStar
                  key={idx}
                  className={`text-sm ${
                    idx < Math.round(item.rating) ? "text-[#ffb400]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({item.reviews})
            </span>
          </div>

         
          <button
            className="w-7 h-7 rounded-full bg-[#1f7a3b] text-white flex items-center justify-center text-sm hover:bg-[#186131]"
            onClick={(e) => e.stopPropagation()}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
