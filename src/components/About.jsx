
import React from 'react';

const aboutFeatures = [
  {
    title: 'Client Gratifications',
    desc: 'We treat our clientele not as professionals, but as kins. We prioritize the customer needs more than closing deeds.',
    img: 'https://www.livehomes.in/public/img/Client%20Gratifications.webp',
  },
  {
    title: 'Long Service Bond',
    desc: 'We assure the bond with us is not a one day stand, we are here for the long haul.',
    img: 'https://www.livehomes.in/public/img/Long%20Service%20Bond.webp',
  },
  {
    title: "Constant Notoriety",
    desc: "We have executed various construction projects and consistently exceeded our clients' expectations.",
    img: 'https://www.livehomes.in/public/img/Constant_Notoriety-removebg-preview.png',
  },
  {
    title: "Builder’s Excellence",
    desc: "We bond only with the best of the best Builders who reeks of excellence & Superior quality.",
    img: 'https://www.livehomes.in/public/img/Builder%20Excellence.webp',
  },
];

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">Why Not Brick and Key?</h2>
        <div className="relative">
          {/* Animated background shape */}
          <div className="absolute -top-16 left-1/2 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" style={{transform: 'translateX(-50%)'}} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img src={feature.img} alt={feature.title} className="h-24 mb-4 object-contain transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-bold mb-2 text-blue-700 transition-colors duration-300 hover:text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-blue-700">More about us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
