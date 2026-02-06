
import React, { useState, useRef, useEffect } from 'react';

const MIN = 400;
const MAX = 4000;
const STEP = 10;

const SqFeetSlider = () => {
  const [minValue, setMinValue] = useState(MIN);
  const [maxValue, setMaxValue] = useState(MAX);
  const range = useRef(null);

  // Update the slider track background
  useEffect(() => {
    if (range.current) {
      const percent1 = ((minValue - MIN) / (MAX - MIN)) * 100;
      const percent2 = ((maxValue - MIN) / (MAX - MIN)) * 100;
      range.current.style.background = `linear-gradient(to right, #d1d5db ${percent1}%, #2563eb ${percent1}%, #2563eb ${percent2}%, #d1d5db ${percent2}%)`;
    }
  }, [minValue, maxValue]);

  // Ensure min is always less than max
  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), maxValue - STEP);
    setMinValue(val);
  };
  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), minValue + STEP);
    setMaxValue(val);
  };

  return (
    <div className="flex flex-col flex-1 min-w-[180px]">
      <label className="text-xs font-semibold text-gray-600 mb-1">Sq. Feet</label>
      <div className="relative w-full h-8 flex items-center">
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none h-2 bg-transparent z-10"
          style={{ WebkitAppearance: 'none' }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none h-2 bg-transparent z-10"
          style={{ WebkitAppearance: 'none' }}
        />
        <div ref={range} className="absolute w-full h-2 rounded bg-gray-300 z-0" />
        {/* Balls */}
        <div
          className="absolute z-20"
          style={{ left: `${((minValue - MIN) / (MAX - MIN)) * 100}%`, transform: 'translate(-50%, -30%)' }}
        >
          <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow cursor-pointer" />
        </div>
        <div
          className="absolute z-20"
          style={{ left: `${((maxValue - MIN) / (MAX - MIN)) * 100}%`, transform: 'translate(-50%, -30%)' }}
        >
          <div className="w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{minValue} Sqft</span>
        <span>{maxValue} Sqft</span>
      </div>
    </div>
  );
};

export default SqFeetSlider;
