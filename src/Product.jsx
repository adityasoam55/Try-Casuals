import React from 'react'

function Product({thumbnail, title, price, category, rating}) {
    return (
        <div className='pl-10'>
            <div className='h-96 w-80'>
                <img className='w-full h-full' src={thumbnail} />
            </div>
            <div className='w-80 h-40 text-white flex flex-col gap-1'>
                <h3 className='text-xl font-thin'>{title}</h3>
                <p className='text-sm font-thin'>{category}</p>
                <p className='font-thin'>${price}</p>
                <p className='text-sm'>ratings - {rating}/5</p>
            </div>
        </div>
    )
}

export default Product;
