import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MainSlides from './components/MainSlides';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PropertyDetails from './components/PropertyDetails';
import Practise from './components/practise';
import AllProperties from './components/AllProperties';

function App() {
  // Filter state
  const [filters, setFilters] = useState({
    sortBy: 'default',
    bedrooms: 'any',
    area: 'any',
    priceMin: 0,
    priceMax: 200,
    sqftMin: 400,
    sqftMax: 4000,
    propertyType: 'any',
    location: '',
    search: '',
  });

  return (
    <Router>
      <div className="bg-gradient-to-tr from-gray-50 via-blue-100 to-white min-h-screen scroll-smooth overflow-x-hidden">
        <Header filters={filters} setFilters={setFilters} />
        <Routes>
          <Route
            path="/property-details"
            element={
              <>
                <PropertyDetails />
                <Footer />
                <WhatsAppButton />
              </>
            }
          />
          <Route
            path="/all-properties"
            element={
              <>
                <AllProperties />
                <Footer />
                <WhatsAppButton />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <main className="space-y-16">
                  <div className="mb-16"><MainSlides /></div>
                  {/* <Practise /> */}
                  <Portfolio filters={filters} />
                  <Portfolio filters={filters} />
                  <Portfolio filters={filters} />
                  {/* <Services /> */}
                  <FAQ />
                  <Contact />
                </main>
                <Footer />
                <WhatsAppButton />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
