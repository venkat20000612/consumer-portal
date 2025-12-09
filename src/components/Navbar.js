import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiShoppingCart, FiX, FiPhoneCall, FiBell, FiUser } from "react-icons/fi";
import { MdAccountBalanceWallet } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-bold border-b-2 border-green-600 pb-1"
      : "hover:text-green-600";

  return (
    <header className="w-full sticky top-0 z-50 bg-[#faf4e8]">

      {/* Top bar for balck bg text */}
      <div className="bg-gray-800 text-white flex items-center justify-center gap-3 py-2 px-4 text-xs md:text-sm">
        <span className="text-center">Your first 5 minutes instant call is free.</span>
        <button className="hidden md:block bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-lg text-xs">
          Try Instant Free Call Now
        </button>
      </div>

      {/* Mobile hamburger icon and x icon */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[#faf4e8] border-b">
        <button onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FiX className="text-2xl text-gray-700" /> : <FiMenu className="text-2xl text-gray-700" />}
        </button>

        <h1 className="text-xl font-bold text-green-800">AMRUTAM</h1>

        <div className="flex items-center gap-3 text-green-700 text-xl">
          <FiShoppingCart />
        </div>
      </div>

      {/* Mobile navbar menu open */}
      {openMenu && (
        <div className="md:hidden bg-[#faf4e8] shadow-lg flex flex-col items-center gap-4 py-5 text-gray-700 font-medium">
          <NavLink to="/" className={menuClass} onClick={() => setOpenMenu(false)}>Home</NavLink>
          <NavLink to="/shop" className={menuClass} onClick={() => setOpenMenu(false)}>Find Doctors</NavLink>
          <NavLink to="/shop" className={menuClass} onClick={() => setOpenMenu(false)}>Lab Tests</NavLink>
          <NavLink to="/shop" className={menuClass} onClick={() => setOpenMenu(false)}>Shop</NavLink>
          <NavLink to="/forum" className={menuClass} onClick={() => setOpenMenu(false)}>Forum</NavLink>
          <NavLink to="/shop" className={menuClass} onClick={() => setOpenMenu(false)}>About Us</NavLink>
        </div>
      )}

      {/* Desktop navbar brand and number */}
      <div className="hidden md:flex items-center justify-between px-6 py-3 bg-[#faf4e8] relative">
        
       
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FiPhoneCall className="text-green-600 text-lg" />
          <span><a href="tel:+919713171999">+91 9826352321</a></span>
        </div>

      
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold text-green-800 tracking-wide">
          AMRUTAM
        </h1>

        
      </div>





      {/* Desktop navbar and icons */}
<div className="hidden md:flex justify-center bg-[#faf4e8] shadow sticky top-0 z-50">

  <div className="flex items-center justify-between w-[70%] max-w-5xl py-4">

    <nav className="flex items-center gap-12 text-green-900 font-medium text-[16px]">
      <NavLink to="/" className={menuClass}>Home</NavLink>
      <NavLink to="/find-doctors" className={menuClass}>Find Doctors</NavLink>
      <NavLink to="/lab-tests" className={menuClass}>Lab Tests</NavLink>
      <NavLink to="/shop" className={menuClass}>Shop</NavLink>
      <NavLink to="/forum" className={menuClass}>Forum</NavLink>
      <NavLink to="/about" className={menuClass}>About Us</NavLink>
    </nav>

    {/* Icons Center Right */}
    <div className="flex items-center gap-4 text-green-900">
      <div className="relative flex items-center justify-center w-9 h-9 bg-[#dfe9dd] rounded-full cursor-pointer">
        <MdAccountBalanceWallet className="text-xl" />
        <span className="absolute -top-1 -right-1 bg-green-900 text-white text-[10px] px-[5px] py-[1px] rounded-full">
          ₹2
        </span>
      </div>

      <div className="relative flex items-center justify-center w-9 h-9 bg-[#dfe9dd] rounded-full cursor-pointer">
        <FiShoppingCart className="text-xl" />
        <span className="absolute -top-1 -right-1 bg-green-900 text-white text-[10px] px-[5px] py-[1px] rounded-full">
          1
        </span>
      </div>

      <div className="relative flex items-center justify-center w-9 h-9 bg-[#dfe9dd] rounded-full cursor-pointer">
        <FiBell className="text-xl" />
        <span className="absolute -top-1 -right-1 bg-green-900 text-white text-[10px] px-[5px] py-[1px] rounded-full">
          1
        </span>
      </div>

      <div className="relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center w-9 h-9 bg-[#dfe9dd] rounded-full cursor-pointer"
        >
          <FiUser className="text-xl" />
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg py-2 w-40 text-sm border">
            <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Profile</NavLink>
            <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Orders</NavLink>
            <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100">Wishlist</NavLink>
            <NavLink to="#" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</NavLink>
          </div>
        )}
      </div>
    </div>

  </div>
</div>

    </header>
  );
};

export default Navbar;
