import React, { useEffect, useState } from 'react';
import { getAllProducts } from './api';
import Product from './Product';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(function () {
    let allProductsPromise = getAllProducts();

    allProductsPromise.then(function (resp) {
      setProducts(resp);
      setLoading(false);
    }).catch(function () {
      setLoading(false)
    })
  },
    [])

  if (loading) {
    return <div className='text-black'>Loading...</div>
  }

  return (
    <div className="bg-white mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

    </div>
  )
}

export default AllProducts;

