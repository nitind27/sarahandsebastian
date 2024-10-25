import React from "react";
import Sarahandsebastian from "../../../assets/svg/sarahandsebastian";

const StickyHeader = () => {
  return (
    <div>
      <div className="flex justify-between p-4  bg-white border-b border-gray-100">
        <div className="flex space-x-4 text-gray-600">
          <div className="menu-item uppercase">Shop</div>
          <div className="menu-item uppercase">Book Experience</div>
          <div className="menu-item uppercase">Engagement</div>
          <div className="menu-item uppercase">Our World</div>
        </div>
        <div>
          <Sarahandsebastian />
        </div>
        <div className="flex space-x-4 text-gray-600">
          <div className="menu-item uppercase">Search</div>
          <div className="menu-item uppercase">Wishlist</div>
          <div className="menu-item uppercase">Account</div>
          <div className="menu-item uppercase">Bag</div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
