import React from 'react';
import assets from '../data';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className='max-w-sm'>
          <h2 className="text-xl font-bold text-white">Quick Pizza</h2>
          <p className="mt-2 text-sm">
            Freshly baked pizzas with the finest ingredients. Order now and enjoy
            a slice of heaven!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li><a href="/menu" className="hover:text-red-400">Menu</a></li>
            <li><a href="/about" className="hover:text-red-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
            <li><a href="/order" className="hover:text-red-400">Order Now</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold text-white">Join Our Club</h2>
          <p className="mt-2 text-sm ">Subscribe for exclusive deals and updates!</p>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 rounded-l-lg bg-gray-800 text-white border-none"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-lg text-white font-bold hover:bg-red-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Quick Pizza. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={assets.facebook} className="hover:text-red-400 text-xl"><FaFacebookF /></a>
          <a href={assets.instagram} className="hover:text-red-400 text-xl"><FaInstagram /></a>
          <a href={assets.twitter} className="hover:text-red-400 text-xl"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
