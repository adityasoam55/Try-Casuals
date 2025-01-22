import React, { useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { TfiSearch } from 'react-icons/tfi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="box-border relative w-full">
      <span className="text-neutral-300 text-xs text-center font-thin p-2 flex flex-wrap justify-center max-md:px-5">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG
        WITH PURCHASES $250+.
      </span>

      <div className="w-full bg-gray-400 text-white flex items-center justify-between py-7 px-6 relative">
        <div className="md:hidden text-2xl hover:cursor-pointer">
          {isMobileMenuOpen ? (
            <AiOutlineClose onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>

        <div className="pl-2 text-3xl font-bold">
          <a href="/">Hebe</a>
        </div>

        <div className="hidden md:flex flex-wrap justify-center text-center text-sm gap-8 px-2 hover:cursor-pointer">
          <Link to="/allproducts/" className="hover:underline underline-offset-8">
            ALL PRODUCTS
          </Link>
          <a className="hover:underline underline-offset-8" href="">
            BRANDS
          </a>
          <a className="hover:underline underline-offset-8" href="">
            MY GIRLFRIENDS BACK
          </a>
          <a className="hover:underline underline-offset-8" href="">
            STAFF EDIT
          </a>
        </div>

        <div className="hidden md:flex gap-6 text-2xl pr-2 hover:cursor-pointer">
          <a href="" aria-label="User Profile">
            <IoPersonOutline />
          </a>
          <a href="" aria-label="Search">
            <TfiSearch />
          </a>
          <a href="" aria-label="Shopping Bag">
            <BsHandbag />
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-400 bg-opacity-60 text-white z-50 w-full flex flex-col items-start py-4 px-4 gap-4 shadow-lg">
          <a className="hover:underline underline-offset-8 text-lg" href="">
            ALL PRODUCTS
          </a>
          <a className="hover:underline underline-offset-8 text-lg" href="">
            BRANDS
          </a>
          <a className="hover:underline underline-offset-8 text-lg" href="">
            MY GIRLFRIENDS BACK
          </a>
          <a className="hover:underline underline-offset-8 text-lg" href="">
            STAFF EDIT
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBar;

