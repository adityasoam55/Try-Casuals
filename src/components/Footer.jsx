import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 text-center">
      {/* Join Section */}
      <div className="max-w-3xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-bold font-mono text-white mb-4">
          Join Us
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          We’ll let you know when we have new arrivals, events, and promos — no
          spam, just style.
        </p>

        {/* Email Input */}
        <div className="flex justify-center w-full max-w-md mx-auto mt-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
          />
          <button className="bg-white text-gray-800 px-4 py-2 rounded-r-full hover:bg-gray-200 transition">
            <TfiEmail />
          </button>
        </div>
      </div>

      <hr className="border-gray-700 w-10/12 mx-auto mb-8" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="#"
            className="p-3 border border-gray-500 rounded-full hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
          >
            <RxInstagramLogo className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 border border-gray-500 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
          >
            <GrFacebookOption className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p className="text-xs text-gray-500">
          © 2023 TryCasuals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
