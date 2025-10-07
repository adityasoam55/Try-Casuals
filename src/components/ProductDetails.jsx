import React, { useEffect, useState } from "react";
import { getProductDetails } from "./api";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import Loading from "./Loading";

function ProductDetails({ handleAddCart }) {
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const resp = await getProductDetails(+id);
        setProduct(resp);
        setMainImage(resp.thumbnail);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  function handleAddToCart() {
    handleAddCart(value, +id);
  }

  function handlePlus() {
    setValue((prev) => prev + 1);
  }

  function handleMinus() {
    setValue((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleInputChange(e) {
    const newVal = +e.target.value;
    setValue(newVal > 0 ? newVal : 1);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/allproducts">
          <p className="text-sm text-gray-600 hover:text-black underline underline-offset-4">
            ← Back to Products
          </p>
        </Link>
      </div>

      {/* Product Layout */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl">
        {/* Left Section - Image Gallery */}
        <div>
          <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {product.images && (
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 border-2 rounded-md cursor-pointer overflow-hidden transition-all duration-300 
                    ${
                      mainImage === img
                        ? "border-black"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                >
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          <p className="text-gray-500 text-sm capitalize">
            Category: {product.category}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-2xl text-red-500 font-semibold">
              ${product.price}
            </p>
            <p className="text-sm text-gray-600">
              ⭐ {product.rating}/5 Ratings
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={handleMinus}
              className="text-2xl text-gray-600 hover:text-black"
            >
              <AiOutlineMinusCircle />
            </button>

            <input
              type="number"
              min="1"
              value={value}
              onChange={handleInputChange}
              className="border border-gray-300 w-14 text-center rounded-md text-gray-800 font-medium py-1 outline-none focus:ring-2 focus:ring-gray-600"
            />

            <button
              onClick={handlePlus}
              className="text-2xl text-gray-600 hover:text-black"
            >
              <AiOutlinePlusCircle />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-gray-800 text-white py-2.5 rounded-md font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
