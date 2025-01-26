import React, { useEffect, useState } from 'react';
import { getProductByCategory } from './api';


function ProductListScroll() {
    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        let productsPromise = getProductByCategory();

        productsPromise.then(function (resp) {
            setItemList(resp);
            setLoading(false);
        }).catch(function () {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='w-screen bg-gray-400 max-md:pt-16 pt-32 text-center'>
            <div className='mb-14'>
                <h1 className='max-md:text-2xl text-5xl text-white font-bold font-mono px-10'>Must Haves</h1>
                <h3 className='text-white text-lg my-2.5 max-md:text-md'>Some of our Favourite picks this week</h3>
            </div>

            <div className='flex overflow-x-scroll sans-serif max-md:pb-10 pb-20 gap-2'>
                {
                    itemList.map(function (item) {
                        return (
                            <div key={item.id} className=' text-white bg-gray-400'>
                                <div className='h-96 w-80'>
                                    <img className='w-full h-full object-cover' src={item.thumbnail} />
                                </div>
                                <div className='w-80 h-32 flex flex-col gap-1 px-2'>
                                    <h3 className='text-xl font-thin'>{item.title}</h3>
                                    <p className='text-sm font-thin'>{item.category}</p>
                                    <p className='font-thin'>${item.price}</p>
                                    <p className='text-sm'>ratings - {item.rating}/5</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-screen h-32 max-md:h-20 '></div>
        </div>

    );
}

export default ProductListScroll;