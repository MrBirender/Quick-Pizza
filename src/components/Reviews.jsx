import React, { useState, useEffect } from "react";
import { IoChevronForwardSharp, IoChevronBack } from "react-icons/io5";
import assets from "../data";

const users = assets.users;

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 3000); // Auto slide every 3s
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16">
      {/* Heading (Aligned Left) */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-left">
        Join our family of <span className="text-orange-500">15L+ happy customers</span>
      </h1>

      {/* Carousel Wrapper */}
      <div className="relative mt-8 overflow-hidden">
        {/* Carousel Inner */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (isMobile ? 100 : 33.33)}%)` }} // 1 image per slide on mobile, 3 on larger screens
        >
          {users.concat(users).map((user, i) => (
            <div key={i} className={`flex-shrink-0 px-2 ${isMobile ? 'w-full' : 'w-1/3'}`}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={user}
                  alt="customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
          onClick={prevSlide}
        >
          <IoChevronBack size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
          onClick={nextSlide}
        >
          <IoChevronForwardSharp size={24} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
