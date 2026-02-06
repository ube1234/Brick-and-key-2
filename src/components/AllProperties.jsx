import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Demo data for properties (can be replaced with API data)
const properties = Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    title: `Premium Apartment ${i + 1}`,
    location: ['Porur', 'Adyar', 'Anna Nagar', 'Velachery', 'T Nagar', 'Guindy', 'Kodambakkam', 'Madipakkam', 'Alwarpet', 'Ramapuram'][i % 10],
    price: 80 + i * 5,
    sqft: 400 + (i * 200),
    beds: ['1', '2', '3', '4'][i % 4],
    img: '/apartment.png',
    status: ['Ongoing', 'Ready', 'Upcoming'][i % 3],
}));

function PropertyCard({ property }) {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative">
                <img
                    src={typeof property.img === 'string' ? property.img : (property.img?.default || property.img)}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                    onError={e => { e.target.onerror = null; e.target.src = '/apartment.png'; }}
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
                        <span className="font-semibold">Serving Location:</span> {property.serving || property.location}
                    </div>
                    <div className="flex flex-wrap gap-2 text-gray-700 text-xs mb-2">
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> {property.area || 'N/A'}</span>
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> {property.units || 'N/A'}</span>
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg> {property.beds} BHK</span>
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /><path d="M12 2v2m0 16v2m10-10h-2M4 12H2" /></svg> ₹ {property.price}L</span>
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg> {property.sqft} Sqft</span>
                        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> {property.propertyType ? property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1) : 'Apartment'}</span>
                    </div>
                </div>
                <div className="flex gap-2 mt-2">
                    <button
                        className="bg-blue-600 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition text-xs"
                        onClick={() => navigate('/property-details', { state: { property } })}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

const AllProperties = () => {
    const location = useLocation();
    const [propertyType, setPropertyType] = useState('');
    useEffect(() => {
        if (location.state && location.state.propertyType) {
            setPropertyType(location.state.propertyType);
        }
    }, [location.state]);
    // Autocomplete for Chennai places
    const [searchInput, setSearchInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);
    const [locationOptions, setLocationOptions] = useState([]);
    const chennaiPlaces = [
        "Adyar", "Alwarpet", "Ambattur", "Anna Nagar", "Ashok Nagar", "Avadi", "Besant Nagar", "Chromepet", "Egmore", "Guindy", "Kodambakkam", "Kotturpuram", "Madipakkam", "Mylapore", "Nungambakkam", "Perambur", "Porur", "Purasawalkam", "Ramapuram", "Royapettah", "Saidapet", "Sholinganallur", "Tambaram", "Teynampet", "Thiruvanmiyur", "T Nagar", "Vadapalani", "Velachery", "Villivakkam", "Virugambakkam", "Washermanpet", "Vepery", "Pallavaram", "Pallikaranai", "Manapakkam", "Mogappair", "Thirumangalam", "Thirumullaivoyal", "Thiruvottiyur", "Triplicane", "Vyasarpadi", "Choolaimedu", "Chetpet", "Kilpauk", "Perungudi", "Koyambedu", "Aminjikarai", "Tondiarpet", "Kolathur", "Madhavaram", "Perungalathur", "Medavakkam", "Selaiyur", "Sembakkam", "Urapakkam", "Guduvanchery", "Vandalur", "Navalur", "Kelambakkam", "Thoraipakkam", "Karapakkam", "Neelankarai", "Injambakkam", "Palavakkam", "Kottivakkam", "Nanganallur", "Meenambakkam", "St Thomas Mount"
    ];
    return (
        <section className="min-h-screen bg-blue-50 py-12">
            <div className="container mx-auto px-4">

                {/* Property Grid */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-1/4 border-r border-gray-200 bg-white rounded-xl p-4 md:sticky md:top-24 h-fit hidden md:block">
                        <h3 className="text-lg font-bold mb-4 text-blue-900">Filters</h3>
                        {/* Location Multiselect */}

                        {/* Bedrooms Multiselect */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Bedrooms</label>
                            <div className="flex flex-col gap-1 pl-2">
                                {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map(bed => (
                                    <label key={bed} className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 text-sm">{bed}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* Budget Multiselect */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Budget</label>
                            <div className="flex flex-col gap-1 pl-2">
                                {['Below 50L', '50L - 1Cr', '1Cr - 2Cr', '2Cr+'].map(budget => (
                                    <label key={budget} className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 text-sm">{budget}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* Status Multiselect */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Status</label>
                            <div className="flex flex-col gap-1 pl-2">
                                {['Ongoing', 'Ready', 'Upcoming'].map(status => (
                                    <label key={status} className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 text-sm">{status}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>
                    {/* Property Grid */}

                    <div>
                        <div className="mb-10">
                            <div className="flex flex-start w-full mb-4">
                                <div className="relative w-3/5">
                                    <input
                                        className="py-2 m-2 px-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-80 w-full"
                                        placeholder="Search Properties..."
                                        type="text"
                                        value={searchInput}
                                        onChange={e => {
                                            const val = e.target.value;
                                            setSearchInput(val);
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
                                        onFocus={() => searchInput && setShowSuggestions(true)}
                                    />
                                    {showSuggestions && searchInput && (
                                        <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto text-left">
                                            {locationOptions.length === 0 ? (
                                                <li className="px-4 py-2 text-gray-500">No matches found</li>
                                            ) : (
                                                locationOptions.map(option => (
                                                    <li
                                                        key={option}
                                                        className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-left"
                                                        onMouseDown={() => {
                                                            setSearchInput(option);
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
                                <button className="px-10 bg-blue-600 m-2 text-white">Search</button>
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {properties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AllProperties;
