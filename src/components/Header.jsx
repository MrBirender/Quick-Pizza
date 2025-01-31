import React from "react";
import Logo from "../assets/logo.png";
import assets from "../data";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-2 md:px-8 lg:px-16">
        
        {/* Logo & Search Bar */}
        <div className="flex items-center md:gap-6 ">
          {/* Logo */}
          <img src={Logo} alt="logo" className="hover:scale- w-20 md:w-24 lg:w-32 h-auto" />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="border-2 border-[#f7ce04] placeholder:text-neutral-700 px-4 py-2 w-full md:w-80 lg:w-96 rounded-xl outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Navigation Menu */}
        <nav >
          <ul className="hidden md:flex items-center gap-4">
            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img src={assets.icons.hotDeal} alt="deal" className="w-6 h-6" />
              <p className="text-lg font-medium">Deals</p> |
            </li>
            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img src={assets.icons.shoppingCart} alt="cart" className="w-6 h-6" />
              <p className="text-lg font-medium">Cart</p>  |
            </li>
            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img src={assets.icons.user} alt="user" className="w-6 h-6" />
              <p className="text-lg font-medium">Sign in</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
