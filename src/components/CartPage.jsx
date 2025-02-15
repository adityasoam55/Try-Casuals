import React, { useContext } from 'react'
import CartList from './CartList';
import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';

function CartPage({ cart, updateCart, user }) {

    if (!user) {
        return <Navigate to="/login/" />
    }

    return (
        <div className='max-w-6xl mx-auto p-6'>
            <p className='text-center mb-4 text-2xl font-medium'>My Cart</p>
            <CartList cart={cart} updateCart={updateCart} />
        </div>
    )
}

export default withUser(CartPage);
