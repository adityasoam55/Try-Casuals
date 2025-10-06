import React from "react";
import { motion } from "framer-motion";

const brandLogos = [
  "/images/brandlogo-1.png",
  "/images/brandlogo-2.png",
  "/images/brandlogo-3.png",
  "/images/brandlogo-4.png",
  "/images/brandlogo-5.png",
  "/images/brandlogo-6.png",
  "/images/brandlogo-7.png",
  "/images/brandlogo-8.png",
];

function BrandsLogo() {
  return (
    <div className="w-screen py-20 max-md:pb-20 max-md:px-7 bg-stone-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-evenly items-center gap-8"
      >
        {brandLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transform transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.08 }}
          >
            <img
              className="w-36 md:w-40 h-auto filter grayscale hover:grayscale-0 transition duration-500"
              src={logo}
              alt={`Brand ${index + 1}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BrandsLogo;
