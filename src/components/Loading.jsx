import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-400 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
