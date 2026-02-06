import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SqFeetSlider from './SqFeetSlider';

const Header = ({ setFilters }) => {
  const image = '../assets/brickandkeylogo.png';
  const [showSearch, setShowSearch] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(200);
  const [pendingFilters, setPendingFilters] = useState({ sortBy: 'default', bedrooms: 'any', area: 'any', priceMin: 0, priceMax: 200, location: '', propertyType: [] });
  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const logo = require('../public/logo.png');

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
    // Only add click outside handler if search is in overlay, not in menu
    // (No handler needed when search is inside menu)
  }, [showSearch]);



  // Ensure menu closes on navigation (optional, for better UX)
  const handleMenuNav = (href) => {
    setShowMenu(false);
    window.location.hash = href;
  };

  const navigate = useNavigate();
  // Responsive navbars: mobile and desktop
  const handleApartmentsClick = (e) => {
    e.preventDefault();
    navigate('/all-properties', { state: { propertyType: 'Apartment' } });
  };
  const handlePlotsClick = (e) => {
    e.preventDefault();
    navigate('/all-properties', { state: { propertyType: 'Plot' } });
  };
  const handleVizhaClick = (e) => {
    e.preventDefault();
    navigate('/all-properties', { state: { propertyType: 'Vizha' } });
  };
  
  return (
    <header
      className={`backdrop-blur-sm shadow-sm sticky top-0 z-[100] w-full bg-yellow-400 transition-transform duration-500 ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      <div className="container mx-auto px-2 md:px-4">
        {/* Mobile Navbar */}
        <div className="flex items-center w-full justify-between md:hidden p-2">
        <div className="flex items-center">
            <img
              src={logo}
              alt="Brick & Key"
              className="h-8 cursor-pointer"
              onClick={() => window.location.hash = '/'}
            />
          </div>
          <button className="ml-2" onClick={() => setShowMenu(s => !s)}>
            <div>
              <img src="" alt="" />
            </div>
          </button>
          
          <div className="flex items-center space-x-2 mr-2">
            {/* Social icons for mobile navbar */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
            </a>
            <a href="https://wa.me/9087123457" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.3.16 12 .16c3.17 0 6.167 1.233 8.413 3.477A11.822 11.822 0 0 1 23.84 12c0 6.627-5.373 12-12 12a11.87 11.87 0 0 1-5.945-1.587L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.448 0 9.877-4.429 9.877-9.877 0-2.64-1.03-5.122-2.899-6.989A9.825 9.825 0 0 0 12 2.16c-5.448 0-9.877 4.429-9.877 9.877 0 2.07.596 3.67 1.591 5.346l-.998 3.648 3.648-.998zm11.387-5.464c-.198-.099-1.174-.579-1.356-.646-.182-.066-.315-.099-.448.099-.132.198-.515.646-.631.779-.116.132-.232.149-.43.05-.198-.099-.837-.308-1.594-.983-.59-.526-.99-1.175-1.107-1.373-.116-.198-.012-.305.087-.403.089-.088.198-.232.297-.348.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.448-1.077-.614-1.477-.162-.39-.326-.337-.448-.343-.116-.006-.248-.007-.38-.007s-.347.05-.53.248c-.182.198-.695.682-.695 1.66 0 .978.712 1.924.811 2.057.099.132 1.4 2.137 3.393 2.917.475.164.844.262 1.133.336.476.121.91.104 1.253.063.382-.045 1.174-.48 1.34-.943.166-.462.166-.858.116-.943-.05-.084-.182-.132-.38-.231z" /></svg>
            </a>
            <a href="mailto:info@brickandkey.com" className="text-red-400 hover:text-red-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-5.065V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8l-8 5.065zm8-9.065H4a1 1 0 0 0-1 1v.217l9 5.7 9-5.7V5a1 1 0 0 0-1-1z" /></svg>
            </a>
            {/* Search button */}
            <button
              className="text-white hover:text-blue-600 focus:outline-none"
              aria-label="Search"
              onClick={() => setShowSearch(s => !s)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav dropdown */}
        {showMenu && (
          <div className="fixed top-16 left-0 w-full bg-white shadow-lg rounded-b-xl z-[9999] flex flex-col items-center py-4 space-y-2 pointer-events-auto md:hidden" style={{ position: 'fixed' }}>
            <a href="#home" onClick={() => handleMenuNav('#home')} className="block w-full text-center py-2 text-blue-600 hover:text-blue-800 border-b">Home</a>
            <a href="#about" onClick={() => handleMenuNav('#about')} className="block w-full text-center py-2 text-blue-600 hover:text-blue-800 border-b">About</a>
            <a href="#contact" onClick={() => handleMenuNav('#contact')} className="block w-full text-center py-2 text-blue-600 hover:text-blue-800 border-b">Blogs</a>
            <a href="#contact" onClick={() => handleMenuNav('#contact')} className="block w-full text-center py-2 text-blue-600 hover:text-blue-800">Contact</a>
            {/* Social icons row for mobile menu */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
              </a>
              <a href="https://wa.me/9087123457" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.3.16 12 .16c3.17 0 6.167 1.233 8.413 3.477A11.822 11.822 0 0 1 23.84 12c0 6.627-5.373 12-12 12a11.87 11.87 0 0 1-5.945-1.587L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.448 0 9.877-4.429 9.877-9.877 0-2.64-1.03-5.122-2.899-6.989A9.825 9.825 0 0 0 12 2.16c-5.448 0-9.877 4.429-9.877 9.877 0 2.07.596 3.67 1.591 5.346l-.998 3.648 3.648-.998zm11.387-5.464c-.198-.099-1.174-.579-1.356-.646-.182-.066-.315-.099-.448.099-.132.198-.515.646-.631.779-.116.132-.232.149-.43.05-.198-.099-.837-.308-1.594-.983-.59-.526-.99-1.175-1.107-1.373-.116-.198-.012-.305.087-.403.089-.088.198-.232.297-.348.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.448-1.077-.614-1.477-.162-.39-.326-.337-.448-.343-.116-.006-.248-.007-.38-.007s-.347.05-.53.248c-.182-.198-.695-.682-.695 1.66 0 .978.712 1.924.811 2.057.099.132 1.4 2.137 3.393 2.917.475.164.844.262 1.133.336.476.121.91.104 1.253.063.382-.045 1.174-.48 1.34-.943.166-.462.166-.858.116-.943-.05-.084-.182-.132-.38-.231z" /></svg>
              </a>
              <a href="mailto:info@brickandkey.com" className="text-red-500 hover:text-red-700">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-5.065V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8l-8 5.065zm8-9.065H4a1 1 0 0 0-1 1v.217l9 5.7 9-5.7V5a1 1 0 0 0-1-1z" /></svg>
              </a>
            </div>
          </div>
        )}
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between w-full md:relative z-50  rounded-b-xl md:rounded-none">
          <nav className="flex-1 flex justify-between">
            <div className="flex items-center space-x-12">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Brick and Key"
                  className="h-12 w-25 cursor-pointer"
                  onClick={() => window.location.hash = '/'}
                />
              </div>
              <a href="#home" className="text-black  hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">Home</a>
              <a href="/all-properties" className="text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition" onClick={handleApartmentsClick}>Apartments</a>
              <a href="/all-properties" className="text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition" onClick={handlePlotsClick}>Plots</a>
              <a href="/all-properties" className="text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition" onClick={handleVizhaClick}>Vizha</a>
              <a href="#contact" className="text-black hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition" onClick={e => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>Contact</a>
            </div>

            <div className="flex items-center space-x-8">
              {/* Social icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-200 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
              </a>
              <a href="https://wa.me/9087123457" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.281 5.3.16 12 .16c3.17 0 6.167 1.233 8.413 3.477A11.822 11.822 0 0 1 23.84 12c0 6.627-5.373 12-12 12a11.87 11.87 0 0 1-5.945-1.587L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.346 1.591 5.448 0 9.877-4.429 9.877-9.877 0-2.64-1.03-5.122-2.899-6.989A9.825 9.825 0 0 0 12 2.16c-5.448 0-9.877 4.429-9.877 9.877 0 2.07.596 3.67 1.591 5.346l-.998 3.648 3.648-.998zm11.387-5.464c-.198-.099-1.174-.579-1.356-.646-.182-.066-.315-.099-.448.099-.132.198-.515.646-.631.779-.116.132-.232.149-.43.05-.198-.099-.837-.308-1.594-.983-.59-.526-.99-1.175-1.107-1.373-.116-.198-.012-.305.087-.403.089-.088.198-.232.297-.348.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.448-1.077-.614-1.477-.162-.39-.326-.337-.448-.343-.116-.006-.248-.007-.38-.007s-.347.05-.53.248c-.182.198-.695.682-.695 1.66 0 .978.712 1.924.811 2.057.099.132 1.4 2.137 3.393 2.917.475.164.844.262 1.133.336.476.121.91.104 1.253.063.382-.045 1.174-.48 1.34-.943.166-.462.166-.858.116-.943-.05-.084-.182-.132-.38-.231z" /></svg>
              </a>
              <a href="mailto:info@brickandkey.com" className="text-red-500 hover:text-red-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-5.065V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8l-8 5.065zm8-9.065H4a1 1 0 0 0-1 1v.217l9 5.7 9-5.7V5a1 1 0 0 0-1-1z" /></svg>
              </a>
              {/* Phone numbers */}

              <a href="#contact" className="text-black font-semibold hover:text bold hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">9087123457 / 5845324582 </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Search and filters (remains the same) */}
      {showSearch && (
        <div className="fixed top-20 left-0 w-full z-50 flex flex-col items-center pointer-events-none px-2">
          <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl bg-white rounded-xl shadow p-4 flex flex-col gap-4 border border-blue-100 animate-fade-in pointer-events-auto overflow-x-hidden">
            {/* First row: Sort By and Bedrooms (2 columns) */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Sort By Dropdown */}
              <div className="flex flex-col flex-1 min-w-[180px]">
                <label className="text-xs font-semibold text-white mb-1">Sort By</label>
                <select className="border rounded px-2 py-1 text-sm" value={pendingFilters.sortBy} onChange={e => setPendingFilters(f => ({ ...f, sortBy: e.target.value }))}>
                  <option value="default">Default</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="area">Area</option>
                  <option value="bedrooms">Bedrooms</option>
                </select>
              </div>
              {/* Bedrooms Dropdown */}
              <div className="flex flex-col flex-1 min-w-[180px]">
                <label className="text-xs font-semibold text-white mb-1">No. of Bedrooms</label>
                <select className="border rounded px-2 py-1 text-sm" value={pendingFilters.bedrooms} onChange={e => setPendingFilters(f => ({ ...f, bedrooms: e.target.value }))}>
                  <option value="any">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </div>
            {/* Second row: Property Area and Price Range (2 columns) */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Property Area Dropdown */}
              <div className="flex flex-col flex-1 min-w-[180px]">
                <label className="text-xs font-semibold text-white mb-1">Property Area (Chennai)</label>
                <select className="border rounded px-2 py-1 text-sm" value={pendingFilters.area} onChange={e => setPendingFilters(f => ({ ...f, area: e.target.value }))}>
                  <option value="any">Any</option>
                  <option value="Adyar">Adyar</option>
                  <option value="Anna Nagar">Anna Nagar</option>
                  <option value="Porur">Porur</option>
                  <option value="Velachery">Velachery</option>
                  <option value="T Nagar">T Nagar</option>
                  <option value="Kodambakkam">Kodambakkam</option>
                  <option value="Madipakkam">Madipakkam</option>
                  <option value="Alwarpet">Alwarpet</option>
                  <option value="Ramapuram">Ramapuram</option>
                  <option value="Iyyapanthangal">Iyyapanthangal</option>
                  <option value="Manapakkam">Manapakkam</option>
                  <option value="Vadapalani">Vadapalani</option>
                  <option value="Valsaravakkam">Valsaravakkam</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              {/* Price Range Slider */}
              <div className="flex flex-col flex-1 min-w-[180px]">
                <div className="flex flex-col gap-1 w-full">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="1"
                    className="w-full accent-blue-600"
                    value={pendingFilters.priceMin}
                    onChange={e => setPendingFilters(f => ({ ...f, priceMin: Number(e.target.value) }))}
                  />
                  <input
                    type="range"
                    min={pendingFilters.priceMin}
                    max="200"
                    step="1"
                    className="w-full accent-blue-600"
                    value={pendingFilters.priceMax}
                    onChange={e => setPendingFilters(f => ({ ...f, priceMax: Number(e.target.value) }))}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹ {pendingFilters.priceMin}L</span>
                    <span>₹ {pendingFilters.priceMax}L</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">

              <div className="flex flex-col flex-1 min-w-[180px]">
                <label className="text-xs font-semibold text-white mb-1">Property Area (Chennai)</label>
                <select className="border rounded px-2 py-1 text-sm" value={pendingFilters.area} onChange={e => setPendingFilters(f => ({ ...f, area: e.target.value }))}>
                  <option value="any">Any</option>
                  <option value="Adyar">Adyar</option>
                  <option value="Anna Nagar">Anna Nagar</option>
                  <option value="Porur">Porur</option>
                  <option value="Velachery">Velachery</option>
                  <option value="T Nagar">T Nagar</option>
                  <option value="Kodambakkam">Kodambakkam</option>
                  <option value="Madipakkam">Madipakkam</option>
                  <option value="Alwarpet">Alwarpet</option>
                  <option value="Ramapuram">Ramapuram</option>
                  <option value="Iyyapanthangal">Iyyapanthangal</option>
                  <option value="Manapakkam">Manapakkam</option>
                  <option value="Vadapalani">Vadapalani</option>
                  <option value="Valsaravakkam">Valsaravakkam</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition" onClick={() => { setFilters(pendingFilters); setShowSearch(false); }}>Apply Filters</button>

              {/* Search input remains in header */}
            </div>

          </div>

        </div>
      )}

    </header>
  )
}

export default Header;