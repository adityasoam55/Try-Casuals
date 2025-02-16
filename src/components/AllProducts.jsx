import React, { useEffect, useState } from 'react';
import { searchProduct, sortProduct } from './api';
import Product from './Product';
import Loading from './Loading';
import Input from './Input';
import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';

function AllProducts({ user }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("default");


  useEffect(function () {
    let filterProducts = searchProduct({ query });

    filterProducts.then(function (resp) {
      setProducts(resp);
      setLoading(false);
    }).catch(function () {
      setLoading(false)
    })
  }, [query])

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
      order="";
    }

    let sortedProducts = sortProduct({ sortBy, order });

    sortedProducts.then(function (resp) {
      setProducts(resp);
      setLoading(false);
    }).catch(function () {
      setLoading(false)
    })
  }, [sort])



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
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <select
          className="border border-gray-300 bg-gray-200 outline-none rounded-lg px-3 py-1.5"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
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

    </div>
  )
}

export default withUser(AllProducts);

