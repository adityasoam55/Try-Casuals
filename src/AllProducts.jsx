import React, { useEffect, useState } from 'react';
import { getAllProducts } from './api';
import Product from './Product';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(function(){
    let allProducts = getAllProducts();

    allProducts.then(resp => setProducts(resp))
    console.log(products);
  },
  [])

  return (
    <div className='flex flex-wrap justify-center gap-1 my-2'>
      {/* <h3 className='text-black'>Showing All Products</h3> */}
      {
        products.map(function(product){
          return <Product key={product.id} {...product}/>
        })
      }
    </div>
  )
}

export default AllProducts;
