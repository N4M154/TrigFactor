import React, { useEffect, useRef } from "react";
import TrigonometricCalculator from "../components/Calculator";

function SineWaveAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    let angle = 0;
    const radius = 50;
    const centerX = width / 4;
    const centerY = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.closePath();

      // Draw the rotating line
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.closePath();

      // Draw the vertical line from the circle to the sine wave
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(width / 2 + angle * 20, y);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.closePath();

      // Draw the sine wave
      ctx.beginPath();
      ctx.moveTo(width / 2, centerY);
      for (let i = 0; i < angle; i += 0.01) {
        ctx.lineTo(width / 2 + i * 20, centerY + radius * Math.sin(i));
      }
      ctx.strokeStyle = "lightblue";
      ctx.stroke();
      ctx.closePath();

      angle += 0.02;
      if (angle >= 2 * Math.PI) {
        angle = 0;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="border border-gray-400 mx-auto"
    />
  );
}

export default function IntroToTrig() {
  const angleValues = [
    { angle: "0°", sin: "0", cos: "1", tan: "0" },
    { angle: "30°", sin: "1/2", cos: "√3/2", tan: "1/√3" },
    { angle: "45°", sin: "√2/2", cos: "√2/2", tan: "1" },
    { angle: "60°", sin: "√3/2", cos: "1/2", tan: "√3" },
    { angle: "90°", sin: "1", cos: "0", tan: "undefined" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-950 to-black min-h-screen w-full p-6">
      <div className="container mx-auto bg-bg-gradient-to-b from-blue-950 to-black p-6 rounded-lg shadow-xl shadow-sky-200">
        <h1 className="text-3xl text-sky-200 font-bold text-center mb-8">
          Introduction to Trigonometry
        </h1>
        <div className="p-6  mb-8">
          <h2 className="text-2xl text-green-400 font-semibold mb-4 text-center">
            Why Right Triangles?
          </h2>
          <p className="text-lg text-white mb-4">
            Trigonometry is the study of the relationships between the angles
            and sides of triangles, especially right triangles. A right triangle
            has one angle that is exactly 90 degrees. This makes it special
            because it allows us to define the basic trigonometric functions in
            a simple and consistent way.
          </p>
          <div className="fade-in-section flex items-center justify-center">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220927183328/rightangleratios.png"
              alt="Hipparchus"
              className="max-w-md w-full rounded-lg shadow-lg"
              style={{ maxWidth: "30%", height: "auto" }}
            />
          </div>
          <br />

          <h2 className="text-2xl text-green-400 font-semibold mb-4 text-center">
            The Basic Trigonometric Functions
          </h2>
          <p className="text-lg text-white mb-4">
            The basic trigonometric functions are sine, cosine, and tangent,
            often abbreviated as sin, cos, and tan. These functions relate the
            angles of a right triangle to the lengths of its sides.
          </p>

          <ul className="text-lg text-white list-disc list-inside mb-8">
            <li className="mb-2">
              <strong>Sine (sin)</strong>: For an angle θ, sin(θ) is the ratio
              of the length of the opposite side to the length of the
              hypotenuse.
              <br />
              <em>sin(θ) = opposite / hypotenuse</em>
            </li>
            <li className="mb-2">
              <strong>Cosine (cos)</strong>: For an angle θ, cos(θ) is the ratio
              of the length of the adjacent side to the length of the
              hypotenuse.
              <br />
              <em>cos(θ) = adjacent / hypotenuse</em>
            </li>
            <li className="mb-2">
              <strong>Tangent (tan)</strong>: For an angle θ, tan(θ) is the
              ratio of the length of the opposite side to the length of the
              adjacent side.
              <br />
              <em>tan(θ) = opposite / adjacent</em>
            </li>
          </ul>

          <h2 className="text-2xl text-center text-green-400 font-semibold mb-4">
            The Reciprocal Trigonometric Functions
          </h2>
          <p className="text-lg text-white mb-4">
            In addition to sine, cosine, and tangent, there are three other
            trigonometric functions known as the reciprocal functions: secant,
            cosecant, and cotangent.
          </p>

          <ul className="text-lg text-white list-disc list-inside">
            <li className="mb-2">
              <strong>Secant (sec)</strong>: Secant is the reciprocal of cosine.
              <br />
              <em>sec(θ) = 1 / cos(θ)</em> or{" "}
              <em>sec(θ) = hypotenuse / adjacent</em>
            </li>
            <li className="mb-2">
              <strong>Cosecant (csc)</strong>: Cosecant is the reciprocal of
              sine.
              <br />
              <em>csc(θ) = 1 / sin(θ)</em> or{" "}
              <em>csc(θ) = hypotenuse / opposite</em>
            </li>
            <li className="mb-2">
              <strong>Cotangent (cot)</strong>: Cotangent is the reciprocal of
              tangent.
              <br />
              <em>cot(θ) = 1 / tan(θ)</em> or{" "}
              <em>cot(θ) = adjacent / opposite</em>
            </li>
          </ul>
        </div>

        <div className="p-6 text-center">
          <h2 className="text-2xl text-green-400 font-semibold mb-4">
            Sine Wave
          </h2>
          <p className="text-lg text-white mb-4">
            Below is an animation showing how sine waves are created from the
            angles in a circle:
          </p>
          <SineWaveAnimation />
        </div>

        <div className="p-6 text-center mt-8">
          <h2 className="text-3xl text-green-400 font-semibold mb-4">
            Trigonometric Values Table
          </h2>
          <table className="min-w-full bg-gray-900 text-white border border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Angle</th>
                <th className="py-2 px-4 border-b">sin(θ)</th>
                <th className="py-2 px-4 border-b">cos(θ)</th>
                <th className="py-2 px-4 border-b">tan(θ)</th>
              </tr>
            </thead>
            <tbody>
              {angleValues.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.angle}</td>
                  <td className="py-2 px-4 border-b">{item.sin}</td>
                  <td className="py-2 px-4 border-b">{item.cos}</td>
                  <td className="py-2 px-4 border-b">{item.tan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" p-6 mb-8">
          <h2 className="text-3xl text-green-400 font-semibold mb-4 text-center">
            Trigonometric Calculator
          </h2>
          <TrigonometricCalculator />
        </div>
      </div>
    </div>
  );
}
