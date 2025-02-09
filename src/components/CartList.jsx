import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { getProductDetails } from './api';
import CartRow from './CartRow';

function CartList({ cart, updateCart }) {
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

    function handleRemove(productId) {
        let newCart = { ...cart };

        delete newCart[productId];
        setLocalCart(newCart);
        updateCart(newCart);
    }


    if (loading) {
        return <Loading />
    }


    return (
        <div className="bg-white max-w-3xl mx-auto ">
            <div className="flex space-x-4 px-4 py-2 max-sm:hidden">
                <span className="pl-24 grow text-center">Products</span>
                <span>Price</span>
                <span className="w-14">Quantity</span>
                <span className="w-14">SubTotal</span>
            </div>
            {cartList.map(function (p) {
                return <CartRow
                    key={p.id}
                    product={p}
                    localCart={localCart}
                    handleChange={handleChange}
                    handleRemove={handleRemove}
                />;
            })}
            <div className="px-4 py-2 flex justify-end">
                <button
                    className="bg-gray-400 hover:bg-gray-300 text-white px-2 py-1 font-medium rounded-md"
                   onClick={() => updateCart(localCart)}
                >
                    Update Cart
                </button>
            </div>
        </div>
    )
}


export default CartList;
