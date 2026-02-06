import React from 'react';

const testimonials = [
  {
    name: 'Kavitha MBA',
    text: 'Great customer service. Even when there was a problem with paperwork the employees continued helping us and fixed the issue. Very patient workers and quick, easy and painless process.',
    img: 'https://www.livehomes.in/public/image/6596121.png',
  },
  {
    name: 'Swathi Krishnan',
    text: 'LiveHomes is a genuine real estate service with good prices fixed as per the market values. Fast response every time. Go for them and have a great future.',
    img: 'https://www.livehomes.in/public/image/6596121.png',
  },
  {
    name: 'Saikrishna Vvs',
    text: 'Great work to give a home at really ready to move with all interiors and quality accessories. Keep up the great work.',
    img: 'https://www.livehomes.in/public/image/6596121.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Testimonials</h2>
        <div className="relative">
          {/* Animated background shape */}
          <div className="absolute -top-16 right-0 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={t.img} alt={t.name} className="h-16 w-16 rounded-full mb-4 object-cover transition-transform duration-500 hover:scale-110" />
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <h4 className="font-bold text-blue-700 transition-colors duration-300 hover:text-blue-900">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;