import React, { useEffect, useState } from 'react';
import { getProductCategoryList } from './api';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function CategoryList() {
    const [categorylist, setCategorylist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        let list = getProductCategoryList();

        list.then(function (resp) {
            setCategorylist(resp);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='w-full text-black py-10 px-4 text-center'>
            <p className='pb-2 font-medium text-xl'>ALL PRODUCTS CATEGORIES</p>
            <div className="bg-gray-200 mt-4 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8 p-2">
                {
                    categorylist.map(function (item) {
                        return (
                            <Link to={"/category/" + item.name} >
                                <div key={item.name} className='flex justify-center hover:underline underline-offset-8 cursor-pointer'>
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryList;
