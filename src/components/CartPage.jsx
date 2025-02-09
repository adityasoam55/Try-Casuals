import React from 'react'
import CartList from './CartList';

function CartPage({ cart, updateCart }) {


    return (
        <div className='max-w-6xl mx-auto p-6'>
            <p className='text-center mb-4 text-2xl font-medium'>My Cart</p>
            <CartList cart={cart} updateCart={updateCart} />
        </div>
    )
}

export default CartPage
