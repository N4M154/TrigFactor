import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const chapters = [
    { name: "Home", link: "/" },
    { name: "Chapter 1: History", link: "/stuff" },
    { name: "Chapter 2: Introduction to Trigonometry", link: "/intro" },
    { name: "Chapter 3: Graph", link: "/graph" },
    { name: "Chapter 4: Formulae", link: "/formula" },
    { name: "Chapter 5: Quiz", link: "/quiz" },
  ];

  return (
    <div>
      <div className="bg-blue-950 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-white mr-10">
              &#9776;
            </button>
            <h2 className="font-bold text-2xl font-serif text-white">
              TrigFactor
            </h2>
          </div>

          <ul className="flex gap-4 text-white font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 w-64 bg-black shadow-lg shadow-sky-200  text-white p-4 z-10">
          <button onClick={toggleSidebar} className="mb-4">
            &#10005; {/*close icon*/}
          </button>
          <h3 className="text-lg font-bold mb-4">Chapters</h3>
          <ul>
            {chapters.map((chapter, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={chapter.link}
                  className="block py-2 text-white"
                  onClick={toggleSidebar}
                >
                  {chapter.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-blue-950">&nbsp;</div>
    </div>
  );
}
