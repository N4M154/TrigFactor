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

const generateData = (label, color, fn) => {
  const labels = Array.from({ length: 361 }, (_, i) => i);
  const data = labels.map((x) => fn((x * Math.PI) / 180)); // Convert degrees to radians

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

  const functions = {
    sine: generateData("Sine (sin)", "rgba(255, 99, 132, 1)", Math.sin),
    cosine: generateData("Cosine (cos)", "rgba(54, 162, 235, 1)", Math.cos),
    tangent: generateData("Tangent (tan)", "rgba(255, 206, 86, 1)", Math.tan),
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
          </select>
        </div>
        <Line data={functions[selectedFunction]} />
      </div>
    </div>
  );
};

export default Graph;
