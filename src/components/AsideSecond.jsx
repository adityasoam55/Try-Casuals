import React from "react";
import { motion } from "framer-motion";

function AsideSecond() {
  return (
    <div className="bg-stone-100 text-gray-800 w-full py-24 max-md:py-16 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Homegrown
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
          We love all of our beautiful brands here at{" "}
          <span className="font-semibold text-black">TryCasuals</span> — but
          there’s a special place in our heart for New Zealand labels. Discover
          the story behind each of these amazing homegrown brands and see what
          makes them so special.
        </p>

        <button className="px-8 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-stone-700 transition-all duration-300 shadow-md">
          Find Out More
        </button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <div className="relative w-full h-[500px] max-md:h-[350px] overflow-hidden rounded-xl shadow-lg group">
          <img
            className="w-full h-full object-cover object-top md:object-center transform group-hover:scale-105 transition-transform duration-500"
            src="/images/homegrown.jpeg"
            alt="Homegrown Brands"
          />
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default AsideSecond;
