import React from "react";

const Blogpost = () => {
  return (
    <div className="flex space-x-4 p-6">
      <div className="relative">
        <img
          src="/Blogpost/sarah-sebastian-artist-project-2.webp"
          alt="Sarah Sebastian Artist Project 2"
          className="w-full h-auto shadow-md"
          style={{ height: "600px", width: "500px" }}
        />
        <div className="absolute inset-0 flex justify-center mt-8">
          <div className="text-center text-[36px] text-white">
            Jess Ruby James
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-end bottom-8">
          <button className="bg-gray-700 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 hover:bg-opacity-75 transition duration-300 hover:bg-black">
            READ INTERVIEW
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="/Blogpost/sarah-sebastian-artist-project2.webp"
          alt="Sarah Sebastian Artist Project 2"
          className="w-full h-auto shadow-md"
          style={{ height: "600px", width: "500px" }}
        />
        <div className="absolute inset-0 flex justify-center mt-8">
          <div className="text-center text-[36px] text-white">
            Prue & Honey
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-end bottom-8">
          <button className="bg-gray-700 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 hover:bg-opacity-75 transition duration-300 hover:bg-black">
            READ INTERVIEW
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="/Blogpost/sarah-sebastian-artist-project4.webp"
          alt="Sarah Sebastian Artist Project 4"
          className="w-full h-auto shadow-md"
          style={{ height: "600px", width: "500px" }}
        />
        <div className="absolute inset-0 flex justify-center mt-8">
          <div className="text-center text-[36px] text-white">
            Morgan Shimeld
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-end bottom-8">
          <button className="bg-gray-800 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 hover:bg-opacity-75 transition duration-300 hover:bg-black">
            READ INTERVIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;