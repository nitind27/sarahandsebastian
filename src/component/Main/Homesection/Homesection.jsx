import React from "react";
import homesectionvideo from "/Videos/a37c7810a4bf44048d985ebfd200a7fc.webm";
import "../../../assets/css/Homesection.css"; // Import a CSS file for additional styling
import Sarahandsebastian from "../../../assets/svg/sarahandsebastian";
import BottomMenu from "../BottomMenu/BottomMenu";

const Homesection = () => {
  return (
    <>
      <div className="relative w-full h-[700px] overflow-hidden">
        <video
          src={homesectionvideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Logo Section */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold">
          <Sarahandsebastian />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center mt-48 absolute inset-0">
          <div className="text-white text-lg md:text-[18px]">
            ARTIST COLLABORATION
          </div>
          <p className="text-white text-[72px] md:text-[72px] leading-tight text-center">
            THE MARK OF A
            <br />
            MILESTONE
          </p>
        </div>

        {/* Button Section */}
        <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2">
          <button className="bg-gray-700 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 hover:bg-opacity-75 transition duration-300 hover:bg-black">
            LEARN MORE
          </button>
        </div>

        {/* Bottom Menu Section with Overlay */}
        <div className="absolute bottom-9 left-0 right-0 ">
          <BottomMenu />
        </div>
      </div>
    </>
  );
};

export default Homesection;
