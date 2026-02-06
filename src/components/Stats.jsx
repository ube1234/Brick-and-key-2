import React from 'react';

const stats = [
  { label: 'Property Locations', value: 100 },
  { label: 'Property Sold', value: 305 },
  { label: 'Interior Design', value: 305 },
  { label: 'Happy Customers', value: 305 },
];

const Stats = () => (
  <section className="py-16 bg-blue-50">
    <div className="container mx-auto px-4">
      <div className="relative">
        {/* Animated background shape */}
        <div className="absolute -top-16 right-1/2 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" style={{transform: 'translateX(50%)'}} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl font-extrabold text-blue-700 mb-2 transition-colors duration-300 hover:text-blue-900">{stat.value}</div>
              <div className="text-lg font-bold text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;