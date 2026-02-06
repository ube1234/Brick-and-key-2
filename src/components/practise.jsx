import React, { useState, useEffect, useRef } from 'react';

const home1 = '/plots1.jpg';
const plots = '/plotarea.jpg';
const interior = '/interiors1.jpg';
const apartment = '/apartment.png';
const loan = '/loan.jpg';







const Practise = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  const [value, setValue] = useState("");
  const placeholders = [
    "Search properties...",
    "Search by location...",
    "Search by budget...",
    "Search by builder..."
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [placeholders.length]);


  return (
    <section>
  <div className="bg-blue-500 w-full h32 flex justify-center items-center opacity-90 relative  m-4 rounded-2xl shadow-lg">
    {/* Text stays visible */}
    <h1 className="text-white text-3xl font-bold z-10">Practise Component</h1>

    {/* Background image behind text */}
    <div className="h32 absolute inset-0 -z-10">
      <img 
        src={home1} 
        alt="Demo" 
        className="w-full h-full object-cover" 
      />
    </div>
  </div>
</section>

  

  );
};

export default Practise;
