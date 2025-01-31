import React from 'react'
import assets from '../data'


const Milestones = () => {
  return (
    <section className="w-full mx-auto py-12 px-4 md:px-8 lg:px-16">
      {/* Heading with Orange Line */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 text-left">
          Winning hearts with <span className="text-gray-800">2X toppings!</span>
        </h1>
        <div className="w-full h-[1px] bg-orange-500 mt-4"></div>
      </div>

      {/* Milestones Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {assets.milestones.map((milestone, index) => (
          <div key={index} className="flex flex-col items-center text-center border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
            <img className="w-14 h-14 mb-3" src={milestone.icon} alt="milestone" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">{milestone.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{milestone.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Milestones
