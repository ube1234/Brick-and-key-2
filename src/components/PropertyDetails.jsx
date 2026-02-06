import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;
  const [openCalculator, setOpenCalculator] = useState(null); // 'emi', 'loan', 'interest', 'sqft', or null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Property details section (full page layout) */}
      {property ? (
        <div className="max-w-6xl mx-auto p-4 bg-white rounded-2xl shadow-lg mt-4 mb-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 w-full">
              <img
                src={typeof property.img === 'string' ? property.img : (property.img?.default || property.img)}
                alt={property.title}
                className="w-full h-80 md:h-[28rem] object-cover rounded-2xl border mb-4"
                onError={e => { e.target.onerror = null; e.target.src = '/apartment.png'; }}
              />
              {/* Apartment Images Gallery */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Replace with actual images if available */}
                <img src="/apartment.png" alt="Apartment 1" className="w-full h-32 object-cover rounded-lg border" />
                <img src="/interiors1.jpg" alt="Apartment 2" className="w-full h-32 object-cover rounded-lg border" />
                <img src="/plots1.jpg" alt="Apartment 3" className="w-full h-32 object-cover rounded-lg border" />
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-between">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">{property.title}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded">{property.location}</span>
                <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded shadow">{property.status}</span>
              </div>
              <div className="text-lg text-gray-700 mb-2"><span className="font-semibold">Serving Location:</span> {property.serving || property.location}</div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                  <span className="font-semibold">Area:</span> {property.area || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                  <span className="font-semibold">Units:</span> {property.units || 'N/A'}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
                  <span className="font-semibold">Bedrooms:</span> {property.beds} BHK
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /><path d="M12 2v2m0 16v2m10-10h-2M4 12H2" /></svg>
                  <span className="font-semibold">Price:</span> ₹ {property.price}L
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  <span className="font-semibold">Sqft:</span> {property.sqft}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                  <span className="font-semibold">Type:</span> {property.propertyType ? property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1) : 'Apartment'}
                </div>
              </div>
              {/* Facilities Section */}
              <div className="mt-6">
                <h2 className="text-xl font-bold text-blue-800 mb-2">Facilities</h2>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                  <li>Swimming Pool</li>
                  <li>Gymnasium</li>
                  <li>Children's Play Area</li>
                  <li>24x7 Security</li>
                  <li>Power Backup</li>
                  <li>Club House</li>
                  <li>Landscaped Gardens</li>
                  <li>Parking Facility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">No property data found.</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      )}
      {/* Calculators Section always visible */}
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-2xl shadow-lg mb-10 mt-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Live Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setOpenCalculator('emi')}>
            {/* SVG Design for Calculator */}
            <svg className="w-20 h-20 mb-2" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="8" fill="#e0e7ff" /><rect x="16" y="24" width="32" height="16" rx="4" fill="#6366f1" /><circle cx="32" cy="32" r="6" fill="#fff" /></svg>
            <div className="font-semibold">EMI Calculator</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setOpenCalculator('loan')}>
            <svg className="w-20 h-20 mb-2" viewBox="0 0 64 64" fill="none"><rect x="12" y="20" width="40" height="24" rx="8" fill="#e0e7ff" /><rect x="20" y="28" width="24" height="8" rx="4" fill="#6366f1" /><circle cx="32" cy="32" r="5" fill="#fff" /></svg>
            <div className="font-semibold">Loan Calculator</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setOpenCalculator('interest')}>
            <svg className="w-20 h-20 mb-2" viewBox="0 0 64 64" fill="none"><rect x="10" y="18" width="44" height="28" rx="8" fill="#e0e7ff" /><rect x="18" y="26" width="28" height="12" rx="4" fill="#6366f1" /><circle cx="32" cy="32" r="4" fill="#fff" /></svg>
            <div className="font-semibold">Interest Calculator</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setOpenCalculator('sqft')}>
            <svg className="w-20 h-20 mb-2" viewBox="0 0 64 64" fill="none"><rect x="14" y="22" width="36" height="20" rx="8" fill="#e0e7ff" /><rect x="24" y="30" width="16" height="4" rx="2" fill="#6366f1" /><circle cx="32" cy="32" r="3" fill="#fff" /></svg>
            <div className="font-semibold">Sqft Calculator</div>
          </div>
        </div>
        {/* Calculator Modals */}
        {openCalculator === 'emi' && (
          <CalculatorModal title="EMI Calculator" onClose={() => setOpenCalculator(null)}>
            <EMICalculator />
          </CalculatorModal>
        )}
        {openCalculator === 'loan' && (
          <CalculatorModal title="Loan Calculator" onClose={() => setOpenCalculator(null)}>
            <LoanCalculator />
          </CalculatorModal>
        )}
        {openCalculator === 'interest' && (
          <CalculatorModal title="Interest Calculator" onClose={() => setOpenCalculator(null)}>
            <InterestCalculator />
          </CalculatorModal>
        )}
        {openCalculator === 'sqft' && (
          <CalculatorModal title="Sqft Calculator" onClose={() => setOpenCalculator(null)}>
            <SqftCalculator />
          </CalculatorModal>
        )}
      </div>
    </>
  );
};

function CalculatorModal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl" onClick={onClose}>&times;</button>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [emi, setEmi] = useState(null);
  useEffect(() => {
    if (principal && rate && years) {
      const r = rate / 1200;
      const n = years * 12;
      const emiVal = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiVal ? emiVal.toFixed(2) : null);
    }
  }, [principal, rate, years]);
  return (
    <div className="flex flex-col gap-3">
      <label>Principal Amount (₹)
        <input type="number" className="border rounded px-2 py-1 w-full" value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
      </label>
      <label>Interest Rate (% per annum)
        <input type="number" className="border rounded px-2 py-1 w-full" value={rate} onChange={e => setRate(Number(e.target.value))} />
      </label>
      <label>Loan Tenure (years)
        <input type="number" className="border rounded px-2 py-1 w-full" value={years} onChange={e => setYears(Number(e.target.value))} />
      </label>
      <div className="mt-2 font-semibold">EMI: {emi ? `₹ ${emi}` : '--'}</div>
    </div>
  );
}

function LoanCalculator() {
  const [emi, setEmi] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [principal, setPrincipal] = useState(null);
  useEffect(() => {
    if (emi && rate && years) {
      const r = rate / 1200;
      const n = years * 12;
      const principalVal = emi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
      setPrincipal(principalVal ? principalVal.toFixed(2) : null);
    }
  }, [emi, rate, years]);
  return (
    <div className="flex flex-col gap-3">
      <label>EMI (₹)
        <input type="number" className="border rounded px-2 py-1 w-full" value={emi} onChange={e => setEmi(Number(e.target.value))} />
      </label>
      <label>Interest Rate (% per annum)
        <input type="number" className="border rounded px-2 py-1 w-full" value={rate} onChange={e => setRate(Number(e.target.value))} />
      </label>
      <label>Loan Tenure (years)
        <input type="number" className="border rounded px-2 py-1 w-full" value={years} onChange={e => setYears(Number(e.target.value))} />
      </label>
      <div className="mt-2 font-semibold">Loan Amount: {principal ? `₹ ${principal}` : '--'}</div>
    </div>
  );
}

function InterestCalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [interest, setInterest] = useState(null);
  useEffect(() => {
    if (principal && rate && years) {
      const interestVal = (principal * rate * years) / 100;
      setInterest(interestVal ? interestVal.toFixed(2) : null);
    }
  }, [principal, rate, years]);
  return (
    <div className="flex flex-col gap-3">
      <label>Principal Amount (₹)
        <input type="number" className="border rounded px-2 py-1 w-full" value={principal} onChange={e => setPrincipal(Number(e.target.value))} />
      </label>
      <label>Interest Rate (% per annum)
        <input type="number" className="border rounded px-2 py-1 w-full" value={rate} onChange={e => setRate(Number(e.target.value))} />
      </label>
      <label>Loan Tenure (years)
        <input type="number" className="border rounded px-2 py-1 w-full" value={years} onChange={e => setYears(Number(e.target.value))} />
      </label>
      <div className="mt-2 font-semibold">Total Interest: {interest ? `₹ ${interest}` : '--'}</div>
    </div>
  );
}

function SqftCalculator() {
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [sqft, setSqft] = useState(null);
  useEffect(() => {
    if (length && width) {
      setSqft((length * width).toFixed(2));
    }
  }, [length, width]);
  return (
    <div className="flex flex-col gap-3">
      <label>Length (ft)
        <input type="number" className="border rounded px-2 py-1 w-full" value={length} onChange={e => setLength(Number(e.target.value))} />
      </label>
      <label>Width (ft)
        <input type="number" className="border rounded px-2 py-1 w-full" value={width} onChange={e => setWidth(Number(e.target.value))} />
      </label>
      <div className="mt-2 font-semibold">Sqft: {sqft ? sqft : '--'}</div>
    </div>
  );
}


export default PropertyDetails;
