import React from "react";

const BottomMenu = () => {
  return (
    <div className="flex justify-between p-4 text-white">
      <div className="flex space-x-4">
        <div className="menu-item uppercase">Shop</div>
        <div className="menu-item uppercase">Book Experience</div>
        <div className="menu-item uppercase">Engagement</div>
        <div className="menu-item uppercase">Our World</div>
      </div>
      <div className="flex space-x-4">
        <div className="menu-item uppercase">Search</div>
        <div className="menu-item uppercase">Wishlist</div>
        <div className="menu-item uppercase">Account</div>
        <div className="menu-item uppercase">Bag</div>
      </div>
    </div>
  );
};

export default BottomMenu;
