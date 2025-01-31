import React from "react";
import assets from "../data";

const orders = assets.orders;

const Order = () => {
  return (
    <section className="w-full mx-auto py-6 md:py-12 px-4 md:px-8 lg:px-16">
      {/* Hero Order Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          🍕 Craft Your Perfect Pizza!
        </h2>
        <p className="mt-2 md:text-lg text-gray-700 font-medium tracking-wide leading-relaxed md:leading-loose">
          Pick your{" "}
          <span className="text-orange-500 font-semibold">ingredients</span>,
          choose your{" "}
          <span className="text-red-500 font-semibold">flavors</span>, and
          create a pizza that’s truly
          <span className="text-green-600 font-bold italic ml-1">yours</span>.
        </p>

        {/* Main Call-to-Action */}
        <button className="mt-6 px-6 py-3 text-lg md:text-xl font-semibold text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
          Customize Your Pizza 🍽️
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="relative hover:scale-105 transition-all duration-300 bg-gray-100 rounded-lg shadow-md overflow-hidden p-4 flex flex-col justify-between"
          >
            {/* Background Image */}
            <div
              className="bg-cover bg-center h-48 rounded-lg relative"
              style={{ backgroundImage: `url(${order})` }}
            >
              {/* Customize Tag */}
              <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-sm shadow-md hover:bg-orange-600 transition">
                Customize
              </button>
            </div>

            {/* Pizza Details */}
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-800">Pizza Name</p>
              <p className="text-sm text-gray-600">
                Delicious pizza description
              </p>
            </div>

            {/* Separation Line */}
            <hr className="my-3 border-t border-gray-300" />

            {/* Price & Add Button */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">€299</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Order;
