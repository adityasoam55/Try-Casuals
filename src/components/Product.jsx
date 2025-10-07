import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, title, price, category, rating, id }) {
  return (
    <Link to={`/productdetails/${id}`}>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Product Image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-gray-900 text-base font-semibold truncate w-full">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mt-1 capitalize">{category}</p>

          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-gray-800 font-bold">${price}</span>
            <span className="text-xs text-gray-500">({rating}/5)</span>
          </div>

          <button className="mt-4 bg-gray-900 text-white px-5 py-1.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
