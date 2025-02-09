import React from 'react';
import { Link } from 'react-router-dom';

function NoticePage() {
    return (
        // <div className='md:pb-16 lg:pb-28'>
        <div className='w-screen  grid  md:grid-cols-1 lg:grid-cols-3 max-md:gap-6 gap-9 max-md:px-5 px-10  max-md:pb-16 pb-28'>
            <Link to="/newarrivals/" >
                <div className='h-96 relative'>
                    <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1516404813354-243addcc4762?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxsYWR5JTIwZGFuY2luZyUyMG9uJTIwYmVkfGVufDB8fDB8fHww" />
                    <div className='flex justify-center items-center w-full h-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8  hover:cursor-pointer'>
                        <a className='opacity-100 relative' href="">New Arrivals</a>
                    </div>
                </div>
            </Link>

            <Link to="/comingsoon/" >
                <div className='h-96 relative'>
                    <img className='h-full w-full object-cover' src="/images/handbag.avif" />
                    <div className='flex justify-center items-center h-full w-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8 hover:cursor-pointer'>
                        <a className='' href="">Hand Bags</a>
                    </div>
                </div>
            </Link>

            <Link to="/bodycare/">
                <div className='h-96 relative'>
                    <img className='h-full w-full object-cover' src="/images/sale.avif" />
                    <div className='flex justify-center items-center h-full w-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8 hover:cursor-pointer'>
                        <a className='' href="">Body Care</a>
                    </div>
                </div>
            </Link>
        </div>
        // </div>
    );
}

export default NoticePage;