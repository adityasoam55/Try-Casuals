import React from 'react';

function AsideSecond() {
    return (
        <div className='box-border max-md:py-16 py-28 w-screen flex max-md:flex-wrap-reverse lg:flex-nowrap max-md:px-8 px-14'>
            <div className='max-md:w-full w-2/4 flex flex-col justify-center items-center pl-5 pr-10'>
                <span className='max-md:text-2xl text-5xl font-extrabold max-md:pt-7 mb-5'>Homegrown</span>

                <span className='text-center'>We love all of our beautiful brands here at Hebe but there is a special place in our heart for the New Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special.
                </span>

                <button className='bg-stone-700 text-white font-light px-6 py-2.5 mt-5 border-2 border-stone-700'>Find out more</button>
            </div>

            <div className='max-md:w-full w-2/4'>
            <img className='w-full h-full' src="https://hebeboutique.com/cdn/shop/files/LENNY_JACKET_BW_4_1080x.jpg?v=1630056720" />
            </div>
        </div>
    );
}

export default AsideSecond;