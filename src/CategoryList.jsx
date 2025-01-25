import React, { useEffect, useState } from 'react';
import { getProductCategoryList } from './api';

function CategoryList() {
    const [categorylist, setCategorylist] = useState([]);

    useEffect(function () {
        let list = getProductCategoryList();

        list.then(function (resp) {
            setCategorylist(resp);
        })

    }, [])

    return (
        <div className='w-full text-black py-10 px-4 text-center'>
            <p className='pb-2 font-medium text-xl'>ALL PRODUCTS CATEGORIES</p>
            <div className="bg-gray-200 mt-4 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8 p-2">
                {
                    categorylist.map(function (item) {
                        return (
                            <div className='flex justify-center hover:underline underline-offset-8 cursor-pointer'>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList;
