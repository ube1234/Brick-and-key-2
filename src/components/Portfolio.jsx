import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules"; // ✅ import autoplay module
import "swiper/css/autoplay";
const buildingImage = require('../public/apartment.png');
const apartment = require('../public/apartment.png');


// Use require to load local images for Swiper compatibility


// Demo property listings (15 for 5 rows x 3 columns)
const demoProperties = Array.from({ length: 15 }).map((_, i) => ({
  status: 'Ongoing',
  title: `Casagrand Osaka ${i + 1}`,
  location: ['Porur', 'Adyar', 'Anna Nagar', 'Velachery', 'T Nagar', 'Guindy', 'Kodambakkam', 'Madipakkam', 'Alwarpet', 'Ramapuram', 'Iyyapanthangal', 'Manapakkam', 'Vadapalani', 'Valsaravakkam'][i % 14],
  serving: 'Ramapuram, Valsaravakam, Vadapalani, Guindy, Iyyapanthangal, Manapakam',
  area: '6.8 Acres',
  units: '401 Units',
  beds: ['1', '2', '3', '4'][i % 4],
  price: 80 + i * 5, // in Lakh
  sqft: 400 + (i * 200),
  propertyType: ['villa', 'flat', 'apartment'][i % 3],
  img: apartment,
  brochure: '#',
  details: '#',
}));


// Parallax background component
function ParallaxBg() {
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = window.scrollY;
        ref.current.style.transform = `translateY(${offset * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={ref} className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse transition-transform duration-300 will-change-transform" />
  );
}

// Animated counter for the +Simple card
function AnimatedCounter({ min = 500, max = 1000, duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = Math.floor(Math.random() * (max - min + 1)) + min;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [min, max, duration]);
  return <span className="text-3xl font-bold mb-1">{count}+</span>;
}

const Portfolio = ({ filters }) => {
  const navigate = useNavigate();
  // Filtering logic
  let filtered = demoProperties.filter((p) => {
    // Bedrooms
    if (filters && filters.bedrooms !== 'any' && p.beds !== filters.bedrooms && !(filters.bedrooms === '4+' && Number(p.beds) >= 4)) return false;
    // Area
    if (filters && filters.area !== 'any' && p.location !== filters.area) return false;
    // Price
    if (filters && (p.price < filters.priceMin || p.price > filters.priceMax)) return false;
    // Sqft
    if (filters && (p.sqft < filters.sqftMin || p.sqft > filters.sqftMax)) return false;
    // Property Type
    if (filters && filters.propertyType !== 'any' && p.propertyType !== filters.propertyType) return false;
    // Location (search)
    if (filters && filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    // Search (title)
    if (filters && filters.search && !p.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
  // Sorting
  if (filters && filters.sortBy === 'priceLow') filtered = filtered.sort((a, b) => a.price - b.price);
  if (filters && filters.sortBy === 'priceHigh') filtered = filtered.sort((a, b) => b.price - a.price);
  if (filters && filters.sortBy === 'area') filtered = filtered.sort((a, b) => a.sqft - b.sqft);
  if (filters && filters.sortBy === 'bedrooms') filtered = filtered.sort((a, b) => Number(b.beds) - Number(a.beds));

  const handleViewDetails = (property) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate('/property-details', { state: { property } });
  };

  return (
    <section>
      {/* Main section demo image */}
      {/* <div className="w-full max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
        <img src={buildingImage} alt="Demo Main" className="w-full h-64 object-cover" />
      </div> */}
      {/* Status summary cards */}
      {/* <div className="w-full max-w-6xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Completed', min: 100, max: 2052, color: 'bg-green-100 text-green-800', icon: '✅' },
          { label: 'Current', min: 500, max: 1541, color: 'bg-blue-100 text-blue-800', icon: '🏗️' },
          { label: 'Updated', min: 200, max: 1000, color: 'bg-yellow-100 text-yellow-800', icon: '🔄' },
          { label: 'Coming', min: 100, max: 500, color: 'bg-gray-100 text-gray-800', icon: '⏳' },
        ].map((card, idx) => (
          <div
            key={card.label}
            className={`rounded-2xl shadow-lg flex flex-col items-center justify-center py-8 ${card.color} animate-pulse animate-duration-1000 animate-delay-${idx * 200}`}
            style={{ animation: `pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) ${idx * 0.3}s 2 alternate` }}
          >
            <div className="text-4xl mb-2">{card.icon}</div>
            <AnimatedCounter min={card.min} max={card.max} duration={2000} />
            <div className="text-lg font-semibold">{card.label}</div>
          </div>
        ))}

      </div> */}
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold text-center md:mb-12 mb-4 text-blue-900 ">Chennai's Luxurious Builder Floor Apartments and villas for sale in Chennai  </h2>
        <div className="relative">
          {/* Parallax background shape */}
          {/* Swiper must not be a child of grid, and each SwiperSlide must have a single direct child */}
          {filtered.length === 0 ? (
            <div className="col-span-1 md:col-span-3 text-center text-gray-500 py-12 text-lg">No properties found matching your filters.</div>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="!pb-8"
              breakpoints={{ 768: {  slidesPerView: 3, }, }}
            >
              {filtered.map((property, idx) => (
                <SwiperSlide key={idx}>
                  {/* Only one direct child allowed in SwiperSlide */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-100 hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={typeof property.img === 'string' ? property.img : (property.img?.default || property.img)}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                        onError={e => { e.target.onerror = null; e.target.src = buildingImage; }}
                      />
                      <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded shadow">{property.status}</span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-1">{property.title}</h3>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{property.location}</span>
                        </div>
                        <div className="text-gray-600 text-xs mb-1">
                          <span className="font-semibold">Serving Location:</span> {property.serving}
                        </div>
                        <div className="flex flex-wrap gap-2 text-gray-700 text-xs mb-2">
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> {property.area}</span>
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> {property.units}</span>
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg> {property.beds} BHK</span>
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /><path d="M12 2v2m0 16v2m10-10h-2M4 12H2" /></svg> ₹ {property.price}L</span>
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg> {property.sqft} Sqft</span>
                          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <a href={property.brochure} className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold hover:bg-blue-200 transition text-xs">Brochure</a>
                        <a
                          href="#"
                          className="bg-blue-600 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition text-xs"
                          onClick={e => {
                            e.preventDefault();
                            handleViewDetails(property);
                          }}
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
          )}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'auto' });
              navigate('/all-properties');
            }}
            className="mt-8 mx-auto block bg-blue-600 text-white px-8 py-2  rounded-lg font-bold shadow hover:bg-blue-700 transition-colors duration-300"
          >
           See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
