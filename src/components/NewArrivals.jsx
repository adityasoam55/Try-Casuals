import React, { useEffect, useState } from 'react';
import Product from './Product';
import { getProductByCategory } from './api';
import Loading from './Loading';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function BodyCare() {
    const [jewellery, setJewellery] = useState([]);
    const [watches, setWatches] = useState([]);
    const [sunglasses, setSunglasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promise = getProductByCategory("womens jewellery");

        promise.then((response) => {
            setJewellery(response);
            setLoading(false);
        });
    }, [])

    useEffect(() => {
        const promise = getProductByCategory("womens watches");

        promise.then((response) => {
            setWatches(response);
            setLoading(false);
        });
    }, [])

    useEffect(() => {
        const promise = getProductByCategory("sunglasses");

        promise.then((response) => {
            setSunglasses(response);
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h3 className='font-medium'>New Arrivals</h3>
                <Link to="/" ><AiOutlineArrowLeft className='text-2xl mb-3 bg-gray-200 px-1 rounded-sm' /></Link>
            </div>
            <div className="py-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {jewellery.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
                {watches.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
                {sunglasses.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default BodyCare;
