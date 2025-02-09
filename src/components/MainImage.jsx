import React from 'react';

function MainImage() {
  return (
    <div className="w-full h-screen bg-white box-border">
      <div className="relative w-full h-full">
        <img className='w-full h-full object-cover'
          src="/images/mainimage.avif"
          alt="Background"
        />

        <div className="absolute bottom-32 left-7">
          <div className="text-6xl text-white font-mono font-bold">
            New Camilla + Marc
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainImage;