import React, { useEffect, useState } from 'react';
import { searchProduct } from './api';
import Product from './Product';
import Loading from './Loading';
import Input from './Input';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { withUser } from './withProvider';
import { range } from 'lodash';

function AllProducts({ user }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { q, sort, skip } = params;

  q = q || "";
  sort = sort || "default";
  skip = skip || 0;

  let pages = Math.ceil(skip / 30);


  useEffect(function () {
    let sortBy;
    let order;

    if (sort == "title") {
      sortBy = "title";
      order = "asc"
    } else if (sort == "lowToHigh") {
      sortBy = "price";
      order = "asc"
    } else if (sort == "highToLow") {
      sortBy = "price";
      order = "desc";
    } else if (sort == "default") {
      sortBy = "default";
      order = "";
    }

    let productList = searchProduct({ q, skip, sortBy, order });

    productList.then(function (resp) {
      setPage(Math.ceil(resp.total / 30));
      setProducts(resp.products);
      setLoading(false);
    }).catch(function () {
      setLoading(false)
    })
  }, [q, skip, sort, ])



  if (!user) {
    return <Navigate to="/login/" />
  }

  if (loading) {
    return <Loading />
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
              { ...params, q: e.target.value.toLowerCase(), skip: 0 }, { replace: false });
          }}
        />

        <select
          className="border border-gray-300 bg-gray-200 outline-none rounded-lg px-3 py-1.5"
          value={sort}
          onChange={(e) => {
            setSearchParams({ ...params, sort: e.target.value }, { replace: false });
          }}
        >
          <option value="default">Default sort</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="title">Sort by Name</option>
        </select>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className='flex justify-center pt-8'>
        {range(0, page).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, skip: pageNo * 30 })}
            className={
              "px-2 border border-black mx-2 " +
              (pageNo == pages ? "bg-gray-400" : "bg-gray-300")
            }
            onClick={() => {
              setSkip(pageNo * 30);
            }}
          >
            {pageNo + 1}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default withUser(AllProducts);

