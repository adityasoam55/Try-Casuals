import React from 'react';
import { motion } from 'framer-motion';

function MainImage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        className="w-full h-full object-cover"
        src="/images/mainimage.avif"
        alt="Fashion Background"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-32 left-10 max-md:bottom-20 max-md:left-6 text-white space-y-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-wide">
          New Camilla + Marc
        </h1>
        <p className="text-lg md:text-xl font-light max-w-lg">
          Discover timeless silhouettes crafted for effortless luxury.
        </p>

        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </motion.div>
    </div>
  );
}

export default MainImage;
