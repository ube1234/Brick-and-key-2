import React, { useState, useEffect, useRef } from 'react';

const home = '/plots1.jpg';
const plots = '/plotarea.jpg';
const interior = '/interiors1.jpg';
const apartment = '/apartment.png';
const loan = '/loan.jpg';







const MainSlides = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();
  const [value, setValue] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);
  const [loadingLocations] = useState(false); // No loading needed for static list
  // Static list of major places in Chennai
  const chennaiPlaces = [
    "Adyar", "Alwarpet", "Ambattur", "Anna Nagar", "Ashok Nagar", "Avadi", "Besant Nagar", "Chromepet", "Egmore", "Guindy", "Kodambakkam", "Kotturpuram", "Madipakkam", "Mylapore", "Nungambakkam", "Perambur", "Porur", "Purasawalkam", "Ramapuram", "Royapettah", "Saidapet", "Sholinganallur", "Tambaram", "Teynampet", "Thiruvanmiyur", "T Nagar", "Vadapalani", "Velachery", "Villivakkam", "Virugambakkam", "Washermanpet", "Vepery", "Pallavaram", "Pallikaranai", "Manapakkam", "Mogappair", "Thirumangalam", "Thirumullaivoyal", "Thiruvottiyur", "Triplicane", "Vyasarpadi", "Choolaimedu", "Chetpet", "Kilpauk", "Perungudi", "Koyambedu", "Aminjikarai", "Tondiarpet", "Kolathur", "Madhavaram", "Perungalathur", "Medavakkam", "Selaiyur", "Sembakkam", "Urapakkam", "Guduvanchery", "Vandalur", "Navalur", "Kelambakkam", "Thoraipakkam", "Karapakkam", "Neelankarai", "Injambakkam", "Palavakkam", "Kottivakkam", "Nanganallur", "Meenambakkam", "St Thomas Mount"
  ];
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
  }, []);


  return (
    <section
      className="relative w-screen left-1/2 right-1/2 bg-gradient-to-br from-purple-500 via-blue-400 to-white border-4 border-purple-600 shadow-2xl rounded-b-3xl"
      style={{ left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
    >
      <div className="flex items-center justify-center">
        <div className="relative w-full h-80  md:h-96 rounded-2xl shadow-xl bg-purple-500 bg-opacity-90"> 
          {/* SVG Real Estate Design */}
          <svg className="absolute left-0 top-0 w-32 h-32 md:w-48 md:h-48 opacity-30" viewBox="0 0 64 64" fill="none">
            <rect x="8" y="32" width="48" height="20" rx="4" fill="#fff" />
            <rect x="20" y="20" width="24" height="16" rx="2" fill="#e0e7ff" />
            <polygon points="32,8 16,20 48,20" fill="#6366f1" />
            <rect x="28" y="36" width="8" height="16" rx="1" fill="#6366f1" />
          </svg>
          <svg className="absolute right-0 bottom-0 w-24 h-24 md:w-40 md:h-40 opacity-20" viewBox="0 0 64 64" fill="none">
            <rect x="12" y="40" width="40" height="16" rx="4" fill="#fff" />
            <rect x="24" y="28" width="16" height="12" rx="2" fill="#e0e7ff" />
            <polygon points="32,16 20,28 44,28" fill="#6366f1" />
            <rect x="30" y="44" width="4" height="12" rx="1" fill="#6366f1" />
          </svg>
          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3 xl md:text-5xl font-extrabold text-white mb-4 mt-12 md:mt-32"> 
              Brick & Key - Your Trusted Property Partner
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Welcome to Brick & Key, your trusted partner for premium properties in Chennai.
            </p>
            <div className="mt-4 flex w-full items-center justify-center md:hidden">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="mt-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-80 w-full"
                    placeholder={placeholders[index]}
                    id="Locationid"
                    value={locationInput}
                    onChange={e => {
                      const val = e.target.value;
                      setLocationInput(val);
                      setShowSuggestions(true);
                      setSelectedSuggestion(null);
                      if (val.length > 0) {
                        const filtered = chennaiPlaces.filter(place =>
                          place.toLowerCase().includes(val.toLowerCase())
                        );
                        setLocationOptions(filtered);
                      } else {
                        setLocationOptions([]);
                      }
                    }}
                    autoComplete="off"
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    onFocus={() => locationInput && setShowSuggestions(true)}
                  />
                  {showSuggestions && locationInput && (
                    <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto text-left">
                      {loadingLocations ? (
                        <li className="px-4 py-2 text-gray-500">Loading...</li>
                      ) : locationOptions.length === 0 ? (
                        <li className="px-4 py-2 text-gray-500">No matches found</li>
                      ) : (
                        locationOptions.map(option => (
                          <li
                            key={option}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-left"
                            onMouseDown={() => {
                              setLocationInput(option);
                              setSelectedSuggestion(option);
                              setShowSuggestions(false);
                            }}
                          >
                            {option}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            <div id="search-container" className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center bg-white bg-blue-50 rounded-lg mt-6 px-4 py-6 md:px-12 md:py-7 shadow-lg mb-8 hidden md:flex">
              <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                {/* Custom dropdowns: borderless, text + down arrow */}
                {/* Residential Dropdown */}
                <div className="relative w-full">
                  <select
                    className="appearance-none w-full bg-transparent px-4 py-2 text-gray-700 font-semibold rounded-md focus:outline-none focus:ring-0 border-none shadow-none text-ellipsis"
                    style={{ boxShadow: 'none', border: 'none', minWidth: 0 }}
                  >
                    <option value="">Residential</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Plot">Plot</option>
                    <option value="Villa">Villa</option>
                    <option value="Independent House">Independent House</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Location Dropdown */}
                <div className="relative w-full">
                  <select
                    className="appearance-none w-full bg-transparent px-4 py-2 text-gray-700 font-semibold rounded-md focus:outline-none focus:ring-0 border-none shadow-none text-ellipsis"
                    style={{ boxShadow: 'none', border: 'none', minWidth: 0 }}
                  >
                    <option value="">Location</option>
                    <option value="Porur">Porur</option>
                    <option value="Adyar">Adyar</option>
                    <option value="Anna Nagar">Anna Nagar</option>
                    <option value="Velachery">Velachery</option>
                    <option value="T Nagar">T Nagar</option>
                    <option value="Guindy">Guindy</option>
                    <option value="Kodambakkam">Kodambakkam</option>
                    <option value="Madipakkam">Madipakkam</option>
                    <option value="Alwarpet">Alwarpet</option>
                    <option value="Ramapuram">Ramapuram</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Budget Dropdown */}
                <div className="relative w-full">
                  <select
                    className="appearance-none w-full bg-transparent px-4 py-2 text-gray-700 font-semibold rounded-md focus:outline-none focus:ring-0 border-none shadow-none text-ellipsis"
                    style={{ boxShadow: 'none', border: 'none', minWidth: 0 }}
                  >
                    <option value="">Budget</option>
                    <option value="Below 50L">Below 50L</option>
                    <option value="50L - 1Cr">50L - 1Cr</option>
                    <option value="1Cr - 2Cr">1Cr - 2Cr</option>
                    <option value="2Cr+">2Cr+</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Builder Dropdown */}
                <div className="relative w-full">
                  <select
                    className="appearance-none w-full bg-transparent px-4 py-2 text-gray-700 font-semibold rounded-md focus:outline-none focus:ring-0 border-none shadow-none text-ellipsis"
                    style={{ boxShadow: 'none', border: 'none', minWidth: 0 }}
                  >
                    <option value="">Builder</option>
                    <option value="Prestige">Prestige</option>
                    <option value="Casagrand">Casagrand</option>
                    <option value="Radiance">Radiance</option>
                    <option value="Puravankara">Puravankara</option>
                    <option value="Brigade">Brigade</option>
                    <option value="Urbanrise">Urbanrise</option>
                    <option value="Shriram">Shriram</option>
                    <option value="DLF">DLF</option>
                    <option value="Mahindra">Mahindra</option>
                  </select>
                  <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>


              <div className="mt-4 flex w-full items-center justify-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="mt-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-80 w-full"
                    placeholder={placeholders[index]}
                    id="Locationid"
                    value={locationInput}
                    onChange={e => {
                      const val = e.target.value;
                      setLocationInput(val);
                      setShowSuggestions(true);
                      setSelectedSuggestion(null);
                      if (val.length > 0) {
                        const filtered = chennaiPlaces.filter(place =>
                          place.toLowerCase().includes(val.toLowerCase())
                        );
                        setLocationOptions(filtered);
                      } else {
                        setLocationOptions([]);
                      }
                    }}
                    autoComplete="off"
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    onFocus={() => locationInput && setShowSuggestions(true)}
                  />
                  {showSuggestions && locationInput && (
                    <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto text-left">
                      {loadingLocations ? (
                        <li className="px-4 py-2 text-gray-500">Loading...</li>
                      ) : locationOptions.length === 0 ? (
                        <li className="px-4 py-2 text-gray-500">No matches found</li>
                      ) : (
                        locationOptions.map(option => (
                          <li
                            key={option}
                            className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-left"
                            onMouseDown={() => {
                              setLocationInput(option);
                              setSelectedSuggestion(option);
                              setShowSuggestions(false);
                            }}
                          >
                            {option}
                          </li>
                        ))
                      )}
                    </ul>
                  )}
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Search
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default MainSlides;
