import React, { useEffect, useState } from 'react';
import Product from './Product';
import { getProductByCategory } from './api';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Loading from './Loading';

function ComingSoon() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductByCategory("womens bags")
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-white mx-auto max-w-2xl px-4 py-6 lg:max-w-7xl lg:px-8">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-medium mb-6 capitalize">Hand Bags</h1>
                <Link to="/" ><AiOutlineArrowLeft className='text-2xl mb-3 bg-gray-200 px-1 rounded-sm' /></Link>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default ComingSoon;
