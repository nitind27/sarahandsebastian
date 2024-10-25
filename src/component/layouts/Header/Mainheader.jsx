import React, { useState } from "react";
import Slider from "react-slick";

const slides = [
  { id: "EXPLORE SARAH & SEBASTIAN ICONS" },
  { id: "ORDER YOUR BESPOKE ENGAGEMENT RING BY 6 NOV" },
  { id: "CLICK AND COLLECT NOW AVAILABLE" },
];

const Mainheader = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div
      className={`w-full overflow-hidden ${
        hoveredIndex
          ? isMouseDown
            ? "cursor-grabbing" // When mouse is down and hovering
            : "cursor-grab" // When hovering but not down
          : "cursor-grab" // Default state when not hovering
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex items-center justify-center text-center p-2 bg-black text-white text-[10px]`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
          >
            <p
              className={`inline-block ${
                hoveredIndex === index
                  ? isMouseDown
                    ? "cursor-pointer" // When mouse is down and hovering
                    : "cursor-pointer" // When hovering but not down
                  : "cursor-grab" // Default state when not hovering
              } hover:text-yellow-500 transition-colors duration-300 ease-in-out`}
            >
              <a
                href="#"
                className="block p-2 md:p-1 transform transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {slide.id}
              </a>
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Mainheader;
