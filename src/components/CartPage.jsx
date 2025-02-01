import React, { useEffect, useState } from 'react'
import { getProductDetails } from './api';
import Loading from './Loading';
import Input from './Input';

function CartPage({ cart, updateCart }) {
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        const productIds = Object.keys(cart);

        let promises = productIds.map(function (id) {
            return getProductDetails(id).then(resp => resp);
        })

        Promise.all(promises).then(function (resp) {
            setCartList(resp)
            setLoading(false);
        });

    }, [cart])

    function handleDelete(e) {
        let product = e.target.getAttribute('productid')
        let newCart = { ...cart };

        delete newCart[product];
        updateCart(newCart);
    }


    if (loading) {
        return <Loading />
    }

    return (
        <div className='max-w-6xl mx-auto p-6'>
            <p className='text-center mb-4 text-2xl font-medium'>My Cart</p>
            { cartList.length === 0 && <h1 className=' flex items-center justify-center text-3xl h-96'>Cart is Empty</h1>}
            {
                cartList.map((item) => {
                    return (
                        <div key={item.id} className='flex justify-between gap-8 items-center bg-gray-200 px-4 max-w-2xl mx-auto text-center'>
                            <div className='w-24 h-24'>
                                <img src={item.thumbnail} alt={item.title} className='w-full h-full object-cover' />
                            </div>
                            <h3>{item.title}</h3>
                            <div className='flex justify-between gap-8 items-center'>
                                <Input value={cart[item.id]} classname="w-14 text-center" />
                                <button
                                    productid={item.id}
                                    onClick={handleDelete}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartPage
