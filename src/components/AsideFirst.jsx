import React from "react";

function AsideFirst() {
  return (
    <div className="w-full bg-stone-100 text-gray-800 px-10 py-24 max-md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Product Images */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col gap-4">
            <img
              src="/images/perfume-1.webp"
              className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:scale-105 transition"
            />
            <img
              src="/images/perfume-2.webp"
              className="w-20 h-20 object-cover rounded-lg border border-gray-300 hover:scale-105 transition"
            />
          </div>

          <img
            src="/images/perfume-1.webp"
            className="w-80 md:w-96 h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h5 className="font-thin text-sm text-gray-500 mb-1">
              KAREN WALKER FRAGRANCES
            </h5>
            <h1 className="text-4xl md:text-5xl font-bold font-mono mb-3">
              Hi There - 100ml
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold">Rs. 11,000.00</span>
              <span className="text-sm bg-black text-white px-3 py-1 rounded-full">
                New Arrival
              </span>
            </div>
          </div>

          <hr className="border-gray-300 w-3/4" />

          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              <button className="border border-gray-400 rounded-full px-5 py-2 hover:bg-black hover:text-white transition">
                100ml
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Color - Hi There</h3>
            <div className="w-8 h-8 border border-gray-400 rounded-full flex justify-center items-center">
              <div className="w-5 h-5 rounded-full bg-stone-200"></div>
            </div>
          </div>

          <button className="w-full py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <div className="text-sm leading-relaxed font-light">
            <h3 className="text-lg font-semibold mb-2">Product Info</h3>
            <p className="mb-4">
              Hi There is classic Karen Walker: a scent that captures the
              designer’s love of contradiction and contrast — the dichotomy of
              the masculine and the feminine.
            </p>
            <p className="mb-4">
              Clean, bright and dynamic, Hi There leads with top notes of
              Italian lemon, green apple, green melon and pink peppercorn
              evolving through delicate heart notes of white rose, peach and
              lily of the valley to the deep forest undertones of cedarwood and
              amber.
            </p>
            <p className="mb-4">
              Made in Grasse, France. Cruelty-free & vegan.
            </p>
            <p className="text-sm italic">Style code: 527018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideFirst;
