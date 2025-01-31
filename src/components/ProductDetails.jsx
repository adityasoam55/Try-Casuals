import React, { useEffect, useState } from "react";
import { getProductDetails } from "./api";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const id = +(useParams().id);

    useEffect(() => {
        getProductDetails(id).then(resp => setProduct(resp))
    }, [])

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section - Image Gallery */}
      { product.images &&
      <div className="flex flex-col">
        <div className="w-full aspect-square bg-gray-200 flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex space-x-4 mt-4">
          {product.images.map((img, index) => (
            <div
              key={index}
              className= "w-20 h-20 border"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      }

      {/* Right Section - Product Details */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-xl text-red-500 font-semibold mt-2">
          ${product.price}
        </p>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <button className="mt-6 bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
