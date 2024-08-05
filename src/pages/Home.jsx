import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../images/701721.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h2 className="text-5xl font-bold mb-4 text-sky-200">TrigFactor!</h2>
          <p className="text-xl text-green-400 mb-8 font-mono overflow-hidden border-r-2 border-green-400 whitespace-nowrap animate-typewriter animate-blink">
            Explore concepts, interactive graphs, and formulae to enhance your
            understanding of the world of Trigonometry.
          </p>

          <Link
            to="/stuff"
            className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Start Learning
          </Link>
        </section>

        {/* Features Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-200">
            What You Will Learn
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-b from-green-400 to-black p-6 rounded-lg shadow-lg shadow-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Introduction
              </h3>
              <p>
                Understand the foundational concepts of trigonometry including
                angles, triangles, and the unit circle.
              </p>
            </div>
            <div className="bg-gradient-to-b from-black to-blue-500 p-6 rounded-lg shadow-lg shadow-green-400">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Trigonometric Functions
              </h3>
              <p>
                Learn about sine, cosine, tangent, and other trigonometric
                functions and their formulae.
              </p>
            </div>
            <div className="bg-gradient-to-b from-green-400 to-black p-6 rounded-lg shadow-lg shadow-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Interactive Graphs
              </h3>
              <p>
                Visualize and interact with trigonometric functions using our
                interactive graphing tools.
              </p>
            </div>
            <div className="bg-gradient-to-b from-black to-blue-500 p-6 rounded-lg shadow-lg shadow-green-400">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Chatbot
              </h3>
              <p>Ask AI powered chatbot about your queries.</p>
            </div>
            <div className="bg-gradient-to-b from-green-400 to-black p-6 rounded-lg shadow-lg shadow-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Quizzes and timer
              </h3>
              <p>
                Test your knowledge with interactive quizzes equipped with
                designed to reinforce learning.
              </p>
            </div>
            <div className="bg-gradient-to-b from-black to-blue-500 p-6 rounded-lg shadow-lg shadow-green-400">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Resources
              </h3>
              <p>Download PDFs for offline reading.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
