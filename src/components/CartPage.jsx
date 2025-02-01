import React, { useEffect, useState } from 'react'
import { getProductDetails } from './api';
import Loading from './Loading';

function CartPage({ cart }) {
    const [cartList, setCartList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        const productIds = Object.keys(cart);

        let promises = productIds.map(function (id) {
          return  getProductDetails(id).then(resp => resp);
        })

        Promise.all(promises).then(function (resp) {
            setCartList(resp)
            setLoading(false);
        });

    }, [cart])


    if (loading) {
        return <Loading />
    }

    return (
        <div>
            {
                cartList.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartPage
