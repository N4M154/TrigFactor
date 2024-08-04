import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Trigonometry Learning!
          </h2>
          <p className="text-lg mb-8">
            Your one-stop destination for learning and mastering trigonometry.
            Explore concepts, interactive graphs, and formulae to enhance your
            understanding.
          </p>
          <Link
            to="/stuff"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Start Learning
          </Link>
        </section>

        {/* Features Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What You Will Learn
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Basic Concepts</h3>
              <p>
                Understand the foundational concepts of trigonometry including
                angles, triangles, and the unit circle.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Trigonometric Functions
              </h3>
              <p>
                Learn about sine, cosine, tangent, and other trigonometric
                functions and how to use them.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Interactive Graphs
              </h3>
              <p>
                Visualize and interact with trigonometric functions using our
                interactive graphing tools.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Real-World Applications
              </h3>
              <p>
                Discover how trigonometry is applied in various fields such as
                physics, engineering, and architecture.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Exercises and Quizzes
              </h3>
              <p>
                Test your knowledge with interactive exercises and quizzes
                designed to reinforce learning.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Resources</h3>
              <p>
                Access additional resources including tutorials, videos, and
                reference materials.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
