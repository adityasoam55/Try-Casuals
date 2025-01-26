import React from 'react';

function NoticePage() {
    return (
        // <div className='md:pb-16 lg:pb-28'>
            <div className='w-screen  grid  md:grid-cols-1 lg:grid-cols-3 max-md:gap-6 gap-9 max-md:px-5 px-10  max-md:pb-16 pb-28'>
                <div className='md:h-5/6 lg:h-96 relative'>
                    <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1516404813354-243addcc4762?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxsYWR5JTIwZGFuY2luZyUyMG9uJTIwYmVkfGVufDB8fDB8fHww" />
                    <div className='flex justify-center items-center w-full h-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8  hover:cursor-pointer'>
                        <a className='opacity-100 relative' href="">New Arrivals</a>
                    </div>
                </div>

                <div className='md:h-5/6 lg:h-96 relative'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhhbmRiYWclMjBhbmQlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D" />
                    <div className='flex justify-center items-center h-full w-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8 hover:cursor-pointer'>
                        <a className='' href="">Coming Soon</a>
                    </div>
                </div>

                <div className='md:h-5/6 lg:h-96 relative'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHlvdW5nJTIwYmxvbmRlJTIwbW9kZWwlMjBzaWRlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                    <div className='flex justify-center items-center h-full w-full absolute top-0 z-10 text-white font-black text-3xl font-mono hover:underline underline-offset-8 hover:cursor-pointer'>
                        <a className='' href="">Sale</a>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default NoticePage;