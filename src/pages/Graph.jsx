import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Function to generate data for the graph based on user inputs
const generateData = (label, color, fn, angle) => {
  const labels = Array.from({ length: 361 }, (_, i) => i);
  const radianAngle = (angle * Math.PI) / 180; // Convert angle from degrees to radians
  const data = labels.map((x) => {
    const radian = (x * Math.PI) / 180; // Convert degrees to radians
    const value = fn(radian - radianAngle);
    // Handle division by zero for sec, cosec, and cot
    return Math.abs(value) > 10 ? null : value;
  });

  return {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };
};

const Graph = () => {
  const [selectedFunction, setSelectedFunction] = useState("sine");
  const [angle, setAngle] = useState(90);

  const functions = {
    sine: generateData("Sine (sin)", "rgba(255, 99, 132, 1)", Math.sin, angle),
    cosine: generateData(
      "Cosine (cos)",
      "rgba(54, 162, 235, 1)",
      Math.cos,
      angle
    ),
    tangent: generateData(
      "Tangent (tan)",
      "rgba(255, 206, 86, 1)",
      Math.tan,
      angle
    ),
    secant: generateData(
      "Secant (sec)",
      "rgba(153, 102, 255, 1)",
      (x) => 1 / Math.cos(x),
      angle
    ),
    cosecant: generateData(
      "Cosecant (cosec)",
      "rgba(255, 159, 64, 1)",
      (x) => 1 / Math.sin(x),
      angle
    ),
    cotangent: generateData(
      "Cotangent (cot)",
      "rgba(75, 192, 192, 1)",
      (x) => 1 / Math.tan(x),
      angle
    ),
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Trigonometric Functions
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="function-select"
            className="block text-lg font-semibold mb-2"
          >
            Select Function
          </label>
          <select
            id="function-select"
            className="p-2 border border-gray-300 rounded"
            value={selectedFunction}
            onChange={(e) => setSelectedFunction(e.target.value)}
          >
            <option value="sine">Sine (sin)</option>
            <option value="cosine">Cosine (cos)</option>
            <option value="tangent">Tangent (tan)</option>
            <option value="secant">Secant (sec)</option>
            <option value="cosecant">Cosecant (cosec)</option>
            <option value="cotangent">Cotangent (cot)</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="angle-input"
            className="block text-lg font-semibold mb-2"
          >
            Angle (in degrees)
          </label>
          <input
            id="angle-input"
            type="number"
            step="1"
            min="-360"
            max="360"
            value={angle}
            onChange={(e) => setAngle(parseFloat(e.target.value))}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <Line data={functions[selectedFunction]} />
      </div>
    </div>
  );
};

export default Graph;
