import React from 'react';

const insights = [
  { title: 'EMI Calculator', img: 'https://www.livehomes.in/public/img/tag2.png' },
  { title: 'Loan Calculator', img: 'https://www.livehomes.in/public/img/tag3.png' },
  { title: 'Interest Calculator', img: 'https://www.livehomes.in/public/img/tag4.png' },
  { title: 'Sqft Calculator', img: 'https://www.livehomes.in/public/img/final1.png' },
];

const Insights = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Live Homes Insights</h2>
      <div className="relative">
        {/* Animated background shape */}
        <div className="absolute -bottom-16 right-0 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {insights.map((insight, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img src={insight.img} alt={insight.title} className="h-16 mb-4 object-contain transition-transform duration-500 hover:scale-110" />
              <h3 className="text-lg font-bold text-blue-700 transition-colors duration-300 hover:text-blue-900">{insight.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Insights;