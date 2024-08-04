import React, { useState, useRef } from "react";
import { downloadPDF } from "../utils/pdf";
import { Link } from "react-router-dom";

const formulaeData = {
  Periodicity: [
    {
      name: "sin(π/2 – A)",
      formula: "sin(π/2 – A) = cos A",
    },
    {
      name: "cos(π/2 – A)",
      formula: "cos(π/2 – A) = sin A",
    },
    {
      name: "sin(π/2 + A)",
      formula: "sin(π/2 + A) = cos A",
    },
    {
      name: "cos(π/2 + A)",
      formula: "cos(π/2 + A) = - sin A",
    },
    {
      name: "sin(π - A)",
      formula: "sin(π - A) = sin A",
    },
    {
      name: "cos (π – A) ",
      formula: "cos (π – A)  = - cos A",
    },
    {
      name: "sin(π + A)",
      formula: "sin(π + A) = - sin A",
    },
    {
      name: "cos (π + A) ",
      formula: "cos (π + A)  = - cos A",
    },
  ],
  Cofunction: [
    {
      name: "sin(90°–x)",
      formula: "sin(90°–x) = cos x",
    },
    {
      name: "cos(90°–x)",
      formula: "cos(90°–x) = sin x",
    },
    {
      name: "tan(90°−x)",
      formula: "tan(90°−x) = cotx",
    },
    {
      name: "cot(90°−x)",
      formula: "cot(90°−x) = tanx",
    },
    {
      name: "sec(90°−x)",
      formula: "sec(90°−x) = cosecx",
    },
    {
      name: "cosec(90°−x)",
      formula: "cosec(90°−x) = secx",
    },
  ],
  "Sum & Difference": [
    {
      name: "sin(x+y)",
      formula: "sin(x+y) = sin(x)cos(y) + cos(x)sin(y)",
    },
    {
      name: "cos(x+y)",
      formula: "cos(x+y) = cos(x)cos(y) – sin(x)sin(y)",
    },
    {
      name: "tan(x+y)",
      formula: "tan(x+y) = (tanx + tany)/(1 – (tanx.tany))",
    },
    {
      name: "sin(x–y)",
      formula: "sin(x–y) = sin(x)cos(y) – cos(x)sin(y)",
    },
    {
      name: "cos(x–y)",
      formula: "cos(x–y) = cos(x)cos(y) + sin(x)sin(y)",
    },
    {
      name: "tan(x-y)",
      formula: "tan(x-y) = (tan(x) – tan(y))/(1 + (tan(x).tan(y)))",
    },
  ],
  "Double Angle": [
    {
      name: "sin(2x)",
      formula: "sin(2x) = 2sin(x)cos(x)",
    },
    {
      name: "cos(2x)",
      formula: "cos(2x) = 2cos²(x) – 1",
    },
    {
      name: "tan(2x)",
      formula: "tan(2x) = 2tan(x)/(1 - tan²(x))",
    },
    {
      name: "sec(2x)",
      formula: "sec(2x) = sec²(x)/(2 - sec²(x))",
    },
    {
      name: "cosec(2x)",
      formula: "cosec(2x) = (sec(x).cosec(x)) / 2",
    },
  ],
  "Triple Angle": [
    {
      name: "sin(3x)",
      formula: "sin(3x) = 3sin(x) – 4sin³(x)",
    },
    {
      name: "cos(3x)",
      formula: "cos(3x) = 4cos³(x) – 3cos(x)",
    },
    {
      name: "tan(3x)",
      formula: "tan(3x) = (3tan(x) - tan³(x))/(1 - 3tan²(x))",
    },
  ],
  "Half Angle": [
    {
      name: "sin(x/2)",
      formula: "sin(x/2) = ± √((1 – cos(x)) / 2)",
    },
    {
      name: "cos(x/2)",
      formula: "cos(x/2) = ± √((1 + cos(x)) / 2)",
    },
    {
      name: "tan(x/2)",
      formula: "tan(x/2) = ± √((1 - cos(x)) / (1 + cos(x)))",
    },
  ],
  "Product to Sum": [
    {
      name: "sin(x).cos(y)",
      formula: "sin(x).cos(y) = 1/2 [sin(x+y) + sin(x–y)]",
    },
    {
      name: "cos(x).cos(y)",
      formula: "cos(x).cos(y) = 1/2 [cos(x+y) + cos(x–y)]",
    },
    {
      name: "sin(x).sin(y)",
      formula: "sin(x).sin(y) = 1/2 [cos(x-y) - cos(x+y)]",
    },
  ],
  "Sum to Product": [
    {
      name: "sin(x) + sin(y)",
      formula: "sin(x) + sin(y) = 2sin((x+y)/2)cos((x–y)/2)",
    },
    {
      name: "sin(x) - sin(y)",
      formula: "sin(x) - sin(y) = 2cos((x+y)/2)sin((x–y)/2)",
    },
    {
      name: "cos(x) + cos(y)",
      formula: "cos(x) + cos(y) = 2cos((x+y)/2)cos((x–y)/2)",
    },
    {
      name: "cos(x) - cos(y)",
      formula: "cos(x) - cos(y) = -2sin((x+y)/2)sin((x–y)/2)",
    },
  ],
  "Inverse Trigonometry": [
    {
      name: "sin⁻¹(–x)",
      formula: "sin⁻¹(–x) = – sin⁻¹(x)",
    },
    {
      name: "cos⁻¹(–x)",
      formula: "cos⁻¹(–x) = π – cos⁻¹(x)",
    },
    {
      name: "tan⁻¹(–x)",
      formula: "tan⁻¹(–x) = – tan⁻¹(x)",
    },
    {
      name: "cosec⁻¹(–x)",
      formula: "cosec⁻¹(–x) = – cosec⁻¹(x)",
    },
    {
      name: "sec⁻¹(–x)",
      formula: "sec⁻¹(–x) = π – cosec⁻¹(x)",
    },
    {
      name: "cot⁻¹(–x)",
      formula: "cot⁻¹(–x) = π – cot⁻¹(x)",
    },
  ],
};

export default function Formula() {
  const pdfRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState("Periodicity");

  const handleDownload = () => {
    if (pdfRef.current) {
      downloadPDF(pdfRef.current, "trigonometry-formulae.pdf");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 to-black min-h-screen w-full">
      <div className="container mx-auto p-6 rounded-lg shadow-xl shadow-sky-200">
        <h1 className="text-3xl font-bold text-center mb-8 text-sky-200">
          Trigonometric Formulae
        </h1>
        <div className="mb-4">
          <label
            htmlFor="category-select"
            className="block text-lg text-white font-semibold mb-2"
          >
            Select Category
          </label>
          <select
            id="category-select"
            className="p-2 border border-blue-950 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(formulaeData).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md mb-6"
        >
          Download PDF
        </button>
        <div
          ref={pdfRef}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {formulaeData[selectedCategory].map((item, index) => (
            <div
              key={index}
              className="bg-sky-200 p-6 rounded-lg shadow-lg shadow-gray-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
              <p className="text-xl font-mono mb-2">{item.formula}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center p-2 space-x-4">
        <Link to="/quiz">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">
            Take a quiz!
          </button>
        </Link>
      </div>
    </div>
  );
}
