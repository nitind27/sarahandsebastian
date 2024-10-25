import React, { useState } from "react";
import Lock from "../../assets/svg/Lock";

const Artists = () => {
  const [showData, setShowData] = useState(false);

  const handleShowButtonClick = () => {
    setShowData(true);
  };

  const handleCloseButtonClick = () => {
    setShowData(false);
  };

  const productNames = [
    "Verdigris Cluster Necklace",
    "Verdigris Cluster Ring",
    "Emerald Cluster Ring",
    "Verdigris Cluster Hoops",
  ];

  const productPrice = ["1,200 AUD", "1,500 AUD", "950 AUD", "2,700 AUD"];

  return (
    <div className="mb-96">
      <p className="uppercase underline text-center text-xl font-bold">
        View All Artists
      </p>
      <div className="mt-8 relative">
        <img
          src="/Artists/pillar-luxury-jewllery-shop-the-look_3000x.webp"
          alt="Artists Image"
          className="transition-opacity duration-500 w-full h-auto"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          {!showData ? (
            <button
              onClick={handleShowButtonClick}
              className="flex items-center bg-gray-700 bg-opacity-50 backdrop-blur-md text-white py-2 px-4 rounded-lg transition-opacity duration-500 hover:bg-opacity-75 hover:bg-black"
            >
              <Lock />
              SHOP THE LOOK (4 TIMES)
            </button>
          ) : (
            <div
              className={`absolute inset-x-0 bottom-12 p-4 transition-transform duration-500 transform ${
                showData ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <div className="flex justify-center items-center">
                <button
                  onClick={handleCloseButtonClick}
                  className="bg-red-700 bg-opacity-50 flex items-center backdrop-blur-md text-white py-2 px-4 transition-opacity duration-500 hover:bg-opacity-75 hover:bg-black"
                >
                  ×
                </button>
              </div>
              {/* Flex container for all product cards */}
              <div className="flex justify-around space-x-4 mt-5">
                {/* Each product card */}
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="flex bg-brown-600 p-4 w-[500px] shadow-lg backdrop-blur-md bg-black bg-opacity-30"
                  >
                    <img
                      src={`/Artists/fade${item}.webp`}
                      alt={`Cluster Item ${item}`}
                      className="w-[150px] h-[150px] object-contain"
                    />
                    <div className="text-white">
                      <h3 className="text-[14px] ">{productNames[index]}</h3>
                      <p>{productPrice[index]}</p>
                      <p className="mt-1 text-white bottom-20">2 Colors</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Artists;
