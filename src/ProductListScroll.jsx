import React, { useEffect, useState } from 'react';
import { getProductByCategory } from './api';
import Product from './Product';

function ProductListScroll() {
    const [itemList, setItemList] = useState([])
    const [loading, setLoading] = useState(true);

   useEffect(function(){
    let productsPromise = getProductByCategory();

    productsPromise.then(function (resp) {
        setItemList(resp);
        setLoading(false);
    }).catch(function(){
        setLoading(false)
    })
   },[])

   if(loading){
    return <div>Loading...</div>
   }

    return (
        <div className='w-screen bg-gray-400 max-md:pt-16 pt-32 text-center'>
            <div className='mb-14'>
                <h1 className='max-md:text-2xl text-5xl text-white font-bold font-mono px-10'>Must Haves</h1>
                <h3 className='text-white text-lg my-2.5 max-md:text-md'>Some of our Favourite picks this week</h3>
            </div>

            <div className='flex overflow-x-scroll sans-serif max-md:pb-10 pb-20'>
                {
                    itemList.map(function(item){
                        return <Product key={item.id} {...item}/>
                    })
                }
            </div>

            <div className='w-screen h-32 max-md:h-20 '></div>
        </div>

    );
}

export default ProductListScroll;