import React from "react";
import assets from "../data";

const Blog = () => {
  return (
    <section className="w-full mx-auto md:py-12 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl py-6 md:text-3xl font-bold text-gray-800 text-left">Our <span className="text-orange-500">Trending Stories</span></h1>
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        
        {/* Blog Image */}
        <img
          className="w-[85%] sm:w-[70%] md:w-[70%] h-auto rounded-3xl object-cover"
          src={assets.icons.blog}
          alt="blog"
        />

        {/* Text Box - Moves Below on Small Screens */}
        <div className="relative md:absolute bg-white border-2 shadow-lg rounded-3xl 
          p-4 sm:p-6 md:p-10 max-w-[90%] sm:max-w-[70%] md:max-w-[60%]
          mt-4 md:mt-0 md:bottom-10 md:-right-24">
          
          <p className="text-orange-500 font-semibold text-sm sm:text-lg md:text-xl">
            OUR STORY
          </p>
          <p className="text-gray-900 font-bold text-lg sm:text-2xl md:text-3xl mt-1">
            Pioneers of Pizzas with
          </p>
          <p className="text-orange-500 font-extrabold text-xl sm:text-3xl md:text-4xl">
            2X Toppings
          </p>

          <p className="text-gray-700 mt-3 text-xs sm:text-sm md:text-base leading-relaxed">
            Ever looked at pizza toppings and wondered, <span className="italic">"WHY SO LESS?"</span>  
            Well, we did. And we wanted more! So, we took it upon ourselves to fix it and made pizzas
            that we all deserve—PIZZAS LOADED WITH 2X TOPPINGS. That’s how <span className="font-semibold">MOJO Pizza</span> was born,  
            to make sure you <span className="text-orange-500 font-bold">Never Settle For Less.</span>
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Blog;
