import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../data";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

const images = [
  assets.heroes[0],
  assets.heroes[1],
  assets.heroes[2],
  assets.heroes[3],
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mx-auto py-6 md:py-12 px-4 md:px-8 lg:px-16 ">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
        {/* Image Slider */}
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
        >
          <IoChevronBack />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
          onClick={() => setIndex((index + 1) % images.length)}
        >
          <IoChevronForwardSharp />
        </button>
      </div>
    </section>
  );
};

export default Hero;
