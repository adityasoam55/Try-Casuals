import React, { useEffect, useState } from "react";
import { getProductDetails } from "./api";
import { Link, useParams } from "react-router-dom";
import Input from "./Input";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Loading from "./Loading";

function ProductDetails({ handleAddCart }) {
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const id = +(useParams().id);

  useEffect(() => {
    getProductDetails(id)
      .then(resp => setProduct(resp))
    setLoading(false);
  }, [])

  function handleAddToCart() {
    handleAddCart(value, id)
  }

  function handlePlus() {
    setValue(value + 1);
  }

  function handleMinus() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  function handleInputChange(e) {
    setValue(+e.target.value)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Link to="/allproducts/" >
        <p className="text-right px-4 mt-1">Back</p>
      </Link>

      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Image Gallery */}
        <div className="flex flex-col">
          <div className="w-full aspect-square bg-gray-200 flex justify-center items-center">
            <img
              src={product.thumbnail}
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>
          {product.images &&
            <div className="flex space-x-4 mt-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 border"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          }
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col justify-center ">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <div className="flex items-center justify-between">
            <p className="text-xl text-red-500 font-semibold mt-2">
              ${product.price}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleMinus}
                className="text-2xl text-gray-600"
              >
                <AiOutlineMinusCircle />
              </button>
              <Input value={value} onChange={handleInputChange} classname="w-14 text-center px-0 " />
              <button
                onClick={handlePlus}
                className="text-2xl text-gray-600"
              >
                <AiOutlinePlusCircle />
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-gray-400 text-black py-2 px-4 rounded hover:bg-gray-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
