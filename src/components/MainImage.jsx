import React from 'react';

function MainImage() {
  return (
    <div className="w-full h-screen bg-white box-border">
      <div className="relative w-full h-full">
        <img className='w-full h-full object-cover'
          src="https://images.unsplash.com/photo-1675218739622-8930d60cf7fd?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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