import React from 'react';

function AsideFirst() {
    return (
        <div className='w-screen bg-gray-400 flex max-md:flex-wrap lg:flex-nowrap gap-5 px-10 py-28 max-md:py-16'>
            <div className='w-1/2 max-md:w-full flex justify-center gap-4'>
                <div className='w-20'>
                    <div className='w-full h-32 flex flex-col gap-5'>
                        <img src="/images/perfume-1.webp" />

                        <img src="/images/perfume-2.webp" />
                    </div>
                </div>
                <div>
                    <img src="/images/perfume-1.webp" />
                    <img src="/images/perfume-2.webp" />
                </div>
            </div>

            <div className='text-white w-1/2 max-md:w-full'>
                <div className='flex flex-col items-center'>
                    <div className='self-start mt-14 mb-5'>
                        <h5 className='font-thin text-sm mb-1.5'>KAREN WALKER FRAGRANCES</h5>
                        <h1 className='text-5xl max-md:text-3xl font-bold font-mono mb-4'>Hi There - 100ml</h1>
                        <span className='pr-4 text-lg font-light'>Rs. 11,000.00</span>
                        <span className='text-md font-thin'> New Arrival</span>
                    </div>

                    <div className='self-start mb-7'>
                        <div>
                            <h3 className='mb-5'>Size</h3>
                            <div className='pt-2 mb-7'>
                                <span className='border-2 border-white rounded py-3 px-5 mb-3 rounded-s-full rounded-e-full'>100ml</span>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='pb-4'>Color - Hi There</h3>
                            <div className='mb-5 p-1 w-7 h-7 border border-black rounded-full flex justify-center items-center'>
                                <div className='w-5 h-5 rounded-full bg-stone-100'></div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full bg-stone-300 rounded-md mb-3'>
                        <button className='w-full py-1 font-semibold text-black bg-stone-300 hover:bg-stone-200 rounded-md'>Add to Cart</button>
                    </div>

                    <div className='font-thin'>
                        <h3 className='text-lg font-medium'>INFO :-</h3>
                        <p>Hi There EDP 100ml</p>
                        <p className='py-4'>Hi There is classic Karen Walker: a scent that captures the designer’s love of contradiction and contrast — the dichotomy of the masculine and the feminine.</p>

                        <p>Clean, bright and dynamic, Hi There leads with top notes of Italian lemon, green apple, green melon and pink peppercorn evolving through delicate heart notes of white rose, peach and lily of the valley to the deep forest undertones of cedarwood and amber. Made in Grasse, France. Cruelty-free & vegan.</p>

                        <p className='pt-4'>International shipping:</p>
                        <p>Due to the pressurised and flammable nature of fragrance, we can only ship to Australia, Japan and the United States at this time. Please note, your parcel may also take a few days longer than expected to arrive.  To order this fragrance within the United Kingdom, visit Harvey Nichols</p>

                        <p className='pt-4'>Style code: 527018</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default AsideFirst;