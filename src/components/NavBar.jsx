import React, { useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NavBar({cartValue}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="box-border relative w-full">
      <span className="text-neutral-300 text-xs text-center font-thin p-2 flex flex-wrap justify-center max-md:px-5">
        $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED TryCasuals TOTE BAG
        WITH PURCHASES $250+.
      </span>

      <div className="w-full bg-gray-400 text-white flex items-center justify-between py-7 px-4 relative">
        <div className="md:hidden text-2xl hover:cursor-pointer">
          {isMobileMenuOpen ? (
            <AiOutlineClose onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>

        <div className="pl-2 text-3xl font-bold">
          <a href="/">TryCasuals</a>
        </div>

        <div className="hidden md:flex flex-wrap justify-center text-center text-sm gap-8 px-2 hover:cursor-pointer">
          <Link to="/" className="hover:underline underline-offset-8">
            HOME
          </Link>
          <Link to="/allproducts/" className="hover:underline underline-offset-8">
            ALL PRODUCTS
          </Link>
          <Link to="/categorylist/" className="hover:underline underline-offset-8">
            CATEGORIES
          </Link>
          <Link className="hover:underline underline-offset-8">
            MY GIRLFRIENDS BACK
          </Link>
        </div>

        <div className="flex gap-4 text-3xl pr-2 hover:cursor-pointer">
          <Link to="/login/" aria-label="User Profile">
            <IoPersonOutline />
          </Link>
          <Link to="/cartpage/" aria-label="Shopping Bag">
            <div className='relative flex justify-center'>
              <BsHandbag />
              <span className='absolute top-2.5 text-sm font-medium'>{cartValue}</span>
            </div>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-400 bg-opacity-60 text-white z-50 w-full flex flex-col items-start py-4 px-4 gap-4 shadow-lg">
          <Link
            to="/"
            className="hover:underline underline-offset-8 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/allproducts/"
            className="hover:underline underline-offset-8 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ALL PRODUCTS
          </Link>
          <Link
            to="/categorylist/"
            className="hover:underline underline-offset-8 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CATEGORIES
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-8 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            MY GIRLFRIENDS BACK
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;

