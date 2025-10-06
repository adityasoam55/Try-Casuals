import React, { useState, useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar({ cartValue }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu automatically when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="box-border relative w-full">
      {/* Promotional Banner */}
      <span className="text-neutral-300 text-xs text-center font-light p-3 flex flex-wrap justify-center bg-gray-900/80 backdrop-blur-md shadow-sm max-md:px-5 transition-all duration-300 tracking-wide">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED TryCasuals
        TOTE BAG WITH PURCHASES $250+.
      </span>

      {/* Main Navbar */}
      <div className="w-full bg-gray-900/60 backdrop-blur-xl text-white flex items-center justify-between py-6 px-6 relative shadow-lg border-b border-gray-700/40">
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl hover:cursor-pointer transform hover:scale-110 transition-transform duration-200">
          {isMobileMenuOpen ? (
            <AiOutlineClose onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>

        {/* Brand Name */}
        <div className="pl-2 text-3xl font-extrabold tracking-tight">
          <Link
            to="/"
            className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-blue-300 transition-all duration-300"
          >
            TryCasuals
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap justify-center text-center text-lg gap-10 px-2">
          {["HOME", "ALL PRODUCTS", "CATEGORIES"].map((item, index) => (
            <Link
              key={index}
              to={
                item === "HOME"
                  ? "/"
                  : item === "ALL PRODUCTS"
                  ? "/allproducts/"
                  : "/categorylist/"
              }
              className="relative group transition-all duration-300"
            >
              <span className="hover:text-teal-300">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* User & Cart Icons */}
        <div className="flex gap-6 text-3xl pr-2">
          <Link
            to="/login/"
            aria-label="User Profile"
            className="hover:text-teal-300 transform hover:scale-110 transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]"
          >
            <IoPersonOutline />
          </Link>
          <Link
            to="/cartpage/"
            aria-label="Shopping Bag"
            className="relative flex justify-center hover:drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]"
          >
            <BsHandbag className="hover:text-teal-300 transform hover:scale-110 transition-all duration-200" />
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartValue || 0}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-gray-900/60 backdrop-blur-lg text-white z-50 w-full flex flex-col items-start py-6 px-6 gap-5 shadow-xl transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-10 opacity-0 invisible"
        }`}
      >
        {["HOME", "ALL PRODUCTS", "CATEGORIES"].map((item, index) => (
          <Link
            key={index}
            to={
              item === "HOME"
                ? "/"
                : item === "ALL PRODUCTS"
                ? "/allproducts/"
                : "/categorylist/"
            }
            className="text-lg hover:text-teal-300 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
