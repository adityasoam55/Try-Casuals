import React from 'react';

function MainVideo() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-96 bottom-0 bg-black opacity-10'></div>
            <div className='w-screen h-96 mt-24'>
                <video autoPlay loop className='w-full h-96 object-cover' src="/video.mp4" />
            </div>
            <div className='text-6xl text-white text-extrabold font-medium w-full h-full flex justify-center items-center absolute top-0  font-mono'>
                M A R L E
            </div>
        </div>
    );
}

export default MainVideo;