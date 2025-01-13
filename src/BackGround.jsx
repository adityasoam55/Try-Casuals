import React from "react";

function BackGround() {
    return (
        <div className="box-border">
            <div className="w-screen h-screen relative">
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1675218739622-8930d60cf7fd?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className="absolute bottom-0 left-7">
                <div className="text-6xl text-white font-mono font-bold">
                    New Camilla + Marc
                </div>
                <button className="bg-white px-7 py-2.5 mt-3">Shop Now</button>
            </div>
        </div>
    );
}

export default BackGround;