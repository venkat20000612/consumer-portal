import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d7e2d8] text-gray-800 py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-10 lg:grid lg:grid-cols-3">

        {/* LEFT COLUMN */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="font-semibold text-green-800 text-lg lg:text-xl">Get in touch</h3>

          <p className="text-sm">support@amrutam.global</p>

          <p className="text-sm leading-relaxed max-w-[260px] mx-auto lg:mx-0">
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            Chitragupt Ganj, Nai Sadak, Lashkar,<br />
            Gwalior - 474001
          </p>

          <a href="tel:+919713171999"><p className="text-sm">+91 9713171999</p></a>

          
          <div className="flex gap-4 justify-center lg:justify-start flex-nowrap mx-auto lg:mx-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaFacebookF size={18} />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaInstagram size={18} />
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaYoutube size={18} />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaTwitter size={18} />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaLinkedinIn size={18} />
              </div>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:opacity-80">
                <FaPinterestP size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="space-y-3 text-center lg:text-left">
          <h3 className="font-semibold text-green-800 text-lg lg:text-xl">Information</h3>

          <ul className="space-y-2 text-sm md:text-[15px] leading-normal">
            <li><NavLink to="#" className="hover:text-green-700">About Us</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">Terms and Conditions</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">Privacy Policy</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">Privacy Policy for Mobile Apps</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">Shipping & Return Policy</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">International Delivery</NavLink></li>
            <li><NavLink to="#" className="hover:text-green-700">For Businesses & Hotels</NavLink></li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full text-center lg:text-left">
          <h3 className="font-semibold text-green-800 text-lg lg:text-xl leading-tight max-w-[280px] mx-auto lg:mx-0">
            Subscribe to our Newsletter<br />
            Amrutam Family today!
          </h3>

          <div className="flex justify-center lg:justify-start mt-5">
            <div className="flex bg-white w-full max-w-full md:max-w-[350px] rounded-full shadow-md overflow-hidden">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <button className="bg-black text-white px-5 py-3 text-xs md:text-sm font-semibold rounded-full hover:bg-gray-900 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
