import React from 'react'
import { Link } from 'react-router-dom';

function Product({ thumbnail, title, price, category, rating, id }) {
  return (
    <Link to={"/productdetails/" + id}>
      <div className="group relative">
        <img
          alt={title}
          src={thumbnail}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <p className='text-gray-900'>{title}
              </p>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <div className='text-right text-sm'>
            <p className="font-medium text-gray-900">${price}</p>
            <p className="mt-1 text-gray-500">Ratings - {rating}/5</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product;
