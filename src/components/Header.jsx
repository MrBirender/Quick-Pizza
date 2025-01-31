import React from "react";
import Logo from "../assets/logo.png";
import assets from "../data";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      <div className="container flex items-center justify-between py-4 px-2 md:px-8 lg:px-8">
        {/* Logo & Search Bar */}
        <div className="flex items-center  ">
          {/* Logo */}
          <img
            src={Logo}
            alt="logo"
            className="hover:scale-105 w-20 md:w-24 lg:w-40 h-auto"
          />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="border-2 border-[#f7ce04] placeholder:text-neutral-700 px-4 py-2 w-full md:w-80 lg:w-96 rounded-xl outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex items-center gap-4">
            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img
                src={assets.icons.instagram}
                alt="deal"
                className="w-6 h-6"
              />
              <p className="text-lg font-medium animate-[blink_1.5s_infinite]">
                participate in contents and challenges and earn rewards
              </p>{" "}
              |
            </li>

            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img src={assets.icons.hotDeal} alt="deal" className="w-6 h-6" />
              <p className="text-lg font-medium">Deals</p> |
            </li>
            <li className="flex justify-center gap-1 items-center cursor-pointer hover:text-gray-700">
              <img
                src={assets.icons.shoppingCart}
                alt="cart"
                className="w-6 h-6"
              />
              <p className="text-lg font-medium">Cart</p> |
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
