import React, { useState } from "react";

export default function TrigonometricCalculator() {
  const [angle, setAngle] = useState(0);
  const [results, setResults] = useState({
    sin: 0,
    cos: 0,
    tan: 0,
    sec: 0,
    csc: 0,
    cot: 0,
  });

  const calculateTrigonometricFunctions = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      sin: Math.sin(radian).toFixed(4),
      cos: Math.cos(radian).toFixed(4),
      tan: Math.tan(radian).toFixed(4),
      sec: (1 / Math.cos(radian)).toFixed(4),
      csc: (1 / Math.sin(radian)).toFixed(4),
      cot: (1 / Math.tan(radian)).toFixed(4),
    };
  };

  const handleAngleChange = (e) => {
    const value = parseFloat(e.target.value);
    setAngle(value);
    setResults(calculateTrigonometricFunctions(value));
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg text-white">
      <div className="mb-4">
        <label htmlFor="angle-input" className="block text-lg font-medium mb-2">
          Enter Angle (degrees):
        </label>
        <input
          id="angle-input"
          type="number"
          value={angle}
          onChange={handleAngleChange}
          className="p-2 border border-gray-300 rounded w-full text-black bg-sky-100 font-semibold"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(results).map(([key, value]) => (
          <div
            key={key}
            className="bg-transparent border border-gray-600 shadow-md shadow-gray-400 p-4 rounded-lg"
          >
            <h3 className="text-xl font-medium">{key.toUpperCase()}</h3>
            <p className="text-lg">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
