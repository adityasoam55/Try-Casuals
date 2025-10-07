import React, { useEffect, useState } from "react";
import { searchProduct } from "./api";
import Product from "./Product";
import Loading from "./Loading";
import Input from "./Input";
import { Link, useSearchParams } from "react-router-dom";
import { range } from "lodash";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { q, sort, skip } = params;

  q = q || "";
  sort = sort || "default";
  skip = skip || 0;

  useEffect(() => {
    // 🆕 Scroll to top whenever skip, q, or sort changes
    window.scrollTo({ top: 0, behavior: "smooth" });

    let sortBy;
    let order;

    if (sort === "title") {
      sortBy = "title";
      order = "asc";
    } else if (sort === "lowToHigh") {
      sortBy = "price";
      order = "asc";
    } else if (sort === "highToLow") {
      sortBy = "price";
      order = "desc";
    } else {
      sortBy = "default";
      order = "";
    }

    let productList = searchProduct({ q, skip, sortBy, order });

    productList
      .then(function (resp) {
        setPageCount(Math.ceil(resp.total / 30));
        setProducts(resp.products);
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }, [q, skip, sort]); // dependencies remain same

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex gap-2 justify-between items-center md:justify-end md:gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          value={q}
          onChange={(e) => {
            setSearchParams(
              { ...params, q: e.target.value.toLowerCase(), skip: 0 },
              { replace: false }
            );
          }}
        />

        <select
          value={sort}
          onChange={(e) => {
            setSearchParams(
              { ...params, sort: e.target.value },
              { replace: false }
            );
          }}
          className="block border border-gray-300 bg-white text-gray-900 rounded-md px-3 py-2 
             text-base sm:text-sm shadow-sm outline-none focus:ring-2 focus:ring-gray-600 
             focus:border-transparent cursor-pointer"
        >
          <option value="default" className="py-2">
            Default sort
          </option>
          <option value="highToLow" className="py-2">
            Price: High to Low
          </option>
          <option value="lowToHigh" className="py-2">
            Price: Low to High
          </option>
          <option value="title" className="py-2">
            Sort by Name
          </option>
        </select>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found for “{q}”
        </p>
      )}

      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          {range(0, pageCount).map((pageNo) => (
            <Link
              key={pageNo}
              to={"?" + new URLSearchParams({ ...params, skip: pageNo * 30 })}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 ${
                pageNo === skip / 30
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {pageNo + 1}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
