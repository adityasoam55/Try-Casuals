import React, { useEffect, useState } from 'react'
import { getProductDetails } from './api';
import Loading from './Loading';
import Input from './Input';
import { Link } from 'react-router-dom';

function CartPage({ cart, updateCart }) {
    const [cartList, setCartList] = useState([]);
    const [localCart, setLocalCart] = useState(cart);
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

    function handleChange(value, productId) {
        let newLocalCart = { ...localCart, [productId]: value };
        setLocalCart(newLocalCart);
    }

    function handleDelete(productId) {
        let newCart = { ...cart };

        delete newCart[productId];
        setLocalCart(newCart);
        updateCart(newCart);
    }


    if (loading) {
        return <Loading />
    }

    return (
        <div className='max-w-6xl mx-auto p-6'>
            <p className='text-center mb-4 text-2xl font-medium'>My Cart</p>
            {cartList.length === 0 && <h1 className=' flex items-center justify-center text-3xl h-96'>Cart is Empty</h1>}
            {
                cartList.map((item) => {
                    return (
                        <div key={item.id} className='flex justify-between gap-8 items-center bg-gray-200 px-4 max-w-2xl mx-auto text-center'>
                            <Link to={`/productdetails/${item.id}`} >
                                <div className='w-24 h-24'>
                                    <img src={item.thumbnail} alt={item.title} className='w-full h-full object-cover' />
                                </div>
                            </Link>
                            <h3>{item.title}</h3>
                            <div className='flex justify-between gap-8 items-center'>
                                <Input
                                    value={localCart[item.id]}
                                    classname="w-14 text-center"
                                    onChange={(e) => {
                                        handleChange(+e.target.value, item.id)
                                    }}
                                />
                                <button
                                    onClick={() => handleDelete(item.id)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <button
                onClick={() => updateCart(localCart)}
                className='border rounded-md bg-gray-400 hover:bg-gray-300 text-white mt-4 p-2'>Update Cart</button>
        </div>
    )
}

export default CartPage
