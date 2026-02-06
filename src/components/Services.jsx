
import React from 'react';

const services = [
  {
    title: 'Home Loan',
    img: 'https://www.livehomes.in/public/img/mortgage.png',
  },
  {
    title: 'Home Interior',
    img: 'https://www.livehomes.in/public/img/house-design.png',
  },
  {
    title: 'Home Construction',
    img: 'https://www.livehomes.in/public/img/hook.png',
  },
  {
    title: 'Join Venture',
    img: 'https://www.livehomes.in/public/img/venture.png',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Live Services</h2>
        <div className="relative">
          {/* Animated background shape */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={service.img} alt={service.title} className="h-16 mb-4 object-contain transition-transform duration-500 hover:scale-110" />
                <h3 className="text-lg font-bold text-blue-700 transition-colors duration-300 hover:text-blue-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
