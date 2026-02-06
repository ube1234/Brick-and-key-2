import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${offset * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 flex items-center justify-center">
      {/* Parallax background shapes */}
      <div ref={parallaxRef} className="absolute inset-0 -z-10 transition-transform duration-300 will-change-transform">
        <div className="absolute top-0 left-0 w-1/2 h-64 bg-gradient-to-br from-blue-200 via-blue-100 to-white rounded-br-full blur-2xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-gradient-to-tr from-blue-400 via-blue-200 to-white rounded-tl-full blur-2xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-300 rounded-full blur-xl opacity-20 animate-bounce" style={{transform: 'translate(-50%, -50%)'}} />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900 transition-all duration-700 hover:scale-105">Chennai's No.1 Trusted Builder Property Site</h1>
        <p className="text-lg mb-8 text-gray-700 transition-opacity duration-700 hover:opacity-80">Brick and Key Makes Happy Life</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <input type="text" placeholder="Search properties, locations..." className="w-full md:w-96 px-4 py-2 border rounded-lg shadow focus:outline-none transition-shadow duration-300 focus:shadow-lg" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Search</button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-50 transition-all duration-300 hover:scale-105">Apartments</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-50 transition-all duration-300 hover:scale-105">Villas</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold shadow hover:bg-blue-50 transition-all duration-300 hover:scale-105">Plots</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
