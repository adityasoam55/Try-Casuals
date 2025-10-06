import React, { useEffect, useState } from "react";
import { getProductWomensDresses } from "./api";
import { Link } from "react-router-dom";

function MustHavePicks() {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let productsPromise = getProductWomensDresses();
    productsPromise
      .then((resp) => {
        setItemList(resp);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-2xl font-light tracking-wide">
        Loading Must Haves...
      </div>
    );
  }

  return (
    <div className="w-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
      {/* Section Title */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-5xl font-extrabold font-sans mb-3 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent max-md:text-3xl">
          Must Haves
        </h1>
        <p className="text-gray-300 text-lg font-light max-md:text-md">
          Some of our favourite picks this week ✨
        </p>
      </div>

      {/* Scrollable Product List */}
      <div
        className="flex gap-8 overflow-x-auto px-10 pb-6 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {itemList.map(({ id, ...item }) => (
          <Link
            to={`/productdetails/${id}`}
            key={id}
            className="flex-shrink-0 group w-80 bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out border border-gray-700"
          >
            {/* Product Image */}
            <div className="h-96 w-full overflow-hidden relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-1 text-left">
              <h3 className="text-xl font-semibold text-teal-300 group-hover:text-teal-200 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 capitalize">
                {item.category}
              </p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-lg font-medium text-white">${item.price}</p>
                <p className="text-sm text-yellow-400">
                  ⭐ {item.rating.toFixed(1)}/5
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MustHavePicks;
