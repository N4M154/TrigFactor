import React, { useRef, useEffect } from "react";
import { downloadPDF } from "../utils/pdf";
import { Link } from "react-router-dom";

export default function Stuff() {
  const pdfRef = useRef();

  useEffect(() => {
    if (location.pathname === "/stuff") {
      const scriptConfig = document.createElement("script");
      scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "Ujgay-ax1xPvnCAad5Y2_",
        domain: "www.chatbase.co"
      };
    `;
      document.body.appendChild(scriptConfig);

      const scriptEmbed = document.createElement("script");
      scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
      scriptEmbed.setAttribute("chatbotId", "Ujgay-ax1xPvnCAad5Y2_");
      scriptEmbed.setAttribute("domain", "www.chatbase.co");
      scriptEmbed.defer = true;
      document.body.appendChild(scriptEmbed);

      return () => {
        document.body.removeChild(scriptConfig);
        document.body.removeChild(scriptEmbed);
      };
    }
  }, [location.pathname]);

  return (
    <div className="bg-gradient-to-b from-blue-950 to-black min-h-screen w-full">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-sky-200 font-bold text-center mb-8">
          Trigonometry: The Story of Triangles and Tunes
        </h1>
        <div
          ref={pdfRef}
          id="pdfContent"
          className="p-6 rounded-lg shadow-xl shadow-sky-200 bg-transparent"
        >
          <p className="text-lg mb-4 text-yellow-300 font-semibold">
            Imagine a time, long before calculators and fancy math apps—ancient
            civilizations were scratching their heads over triangles. Let’s
            rewind to around 300 BCE, where the adventure begins!
          </p>
          <h1 className="text-2xl text-green-400 font-bold mb-8">
            1. The Ancient Greeks: The Birth of Trigonometry
          </h1>
          <p className="text-lg mb-4 font-medium text-white">
            Picture yourself in ancient Greece. Mathematicians like Hipparchus
            are getting all excited about triangles. They’re not just any
            triangles, though—they’re right triangles. Hipparchus is the OG of
            trigonometry. He’s like, “Hey, let’s measure angles and sides of
            these triangles and see what patterns we find!” And just like that,
            he starts creating tables of chords (the ancient version of sine and
            cosine) to help sailors navigate the vast seas.
          </p>
          <div className="fade-in-section flex items-center justify-center">
            <img
              src="https://kaiserscience.wordpress.com/wp-content/uploads/2021/02/hipparchus-greek-astronomer-trigonometry-ii.jpg"
              alt="Hipparchus"
              className="max-w-md w-full rounded-lg shadow-lg"
              style={{ maxWidth: "40%", height: "auto" }}
            />
          </div>
          <h1 className="text-2xl text-green-400 font-bold mb-8">
            2. The Hindu and Islamic Golden Age: Trigonometry Gets a Glow-Up
          </h1>
          <p className="text-lg mb-4 font-medium text-white">
            Fast forward a bit to the medieval period. In India and the Islamic
            world, trigonometry is getting a serious upgrade. Indian
            mathematicians like Aryabhata and Bhaskara II are busy refining the
            trigonometric functions and introducing sine and cosine. Meanwhile,
            in the Islamic world, scholars like Al-Khwarizmi and Al-Battani are
            adding their own flair to the mix, making trigonometry even more
            precise. It’s like trigonometry is on a world tour, picking up cool
            new tricks!
          </p>
          <h1 className="text-2xl text-green-400 font-bold mb-8">
            3. The Renaissance: Trigonometry’s Glamour Shot
          </h1>
          <p className="text-lg mb-4 font-medium text-white">
            As the Renaissance dawns, trigonometry is getting its glamour shot.
            European mathematicians like Johannes Kepler and Tycho Brahe are
            using it to make astronomical observations. Kepler, in particular,
            is discovering the laws of planetary motion, and trigonometry is his
            secret weapon. It’s like trigonometry is the VIP guest at the
            coolest scientific parties!
          </p>
          <div className="fade-in-section flex items-center justify-center">
            <img
              src="https://imageio.forbes.com/blogs-images/startswithabang/files/2018/08/motion_through_universe.png?height=425&width=711&fit=bounds"
              alt="Astronomical Observations"
              className="max-w-md w-full rounded-lg shadow-lg"
              style={{ maxWidth: "40%", height: "auto" }}
            />
          </div>
          <h1 className="text-2xl text-green-400 font-bold mb-8">
            4. The Modern Era: Trigonometry Goes Mainstream
          </h1>
          <p className="text-lg mb-4 font-medium text-white">
            In the 18th and 19th centuries, trigonometry gets a modern makeover.
            People like Leonhard Euler are diving deep into its applications,
            turning it into a full-blown mathematical superstar. Whether it’s
            calculus, physics, or engineering, trigonometry is everywhere. It’s
            like trigonometry’s finally made it big in Hollywood!
          </p>
          <h1 className="text-2xl text-green-400 font-bold mb-8">
            5. Today: Trigonometry in Everyday Life
          </h1>
          <p className="text-lg mb-4 font-medium text-white">
            Now, trigonometry is like the best-kept secret of the universe. It’s
            behind everything from GPS systems to video games, helping us
            understand everything from waves to building design. It’s the unsung
            hero of countless tech marvels.
          </p>
          <br />

          <p className="text-lg mb-4 text-yellow-400 font-bold">
            So next time you see a triangle, remember: it’s not just a
            shape—it’s got a whole epic history behind it!
          </p>

          <h1 className="text-2xl text-green-400 text-center font-bold mb-4">
            Some Fun Facts About Trigonometry
          </h1>
          <ul className="text-lg font-medium list-disc list-inside text-sky-200 text-center zigzag-list">
            <li className="mb-2">
              The word "trigonometry" comes from the Greek words "trigonon"
              (triangle) and "metron" (measure).
            </li>
            <li className="mb-2">
              Hipparchus is known as the "Father of Trigonometry" and was one of
              the first to compile a trigonometric table.
            </li>
            <li className="mb-2">
              In ancient times, trigonometry was used mainly for astronomy and
              navigation.
            </li>
            <li className="mb-2">
              The sine function, crucial to trigonometry, was known to Indian
              mathematicians as "jya" or "jiva" around 500 AD.
            </li>
            <li className="mb-2">
              Leonhard Euler, a famous mathematician, made significant
              contributions to the development of trigonometric functions.
            </li>
            <li className="mb-2">
              Trigonometry helps in creating computer graphics, especially for
              3D modeling and animations in video games and movies.
            </li>
            <li className="mb-2">
              The concept of measuring angles and calculating distances is vital
              for GPS technology and satellite communications.
            </li>
            <li className="mb-2">
              Trigonometry plays a key role in engineering, physics,
              architecture, and even music theory!
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center p-2 space-x-4">
        <button
          className="bg-sky-800 text-white px-4 py-2 rounded-md"
          onClick={() =>
            downloadPDF(pdfRef.current, "history-of-trigonometry.pdf")
          }
        >
          Download PDF
        </button>
        <Link to="/intro">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-md">
            NEXT
          </button>
        </Link>
      </div>
      <style jsx>{`
        .zigzag-list li:nth-child(even) {
          margin-left: 20px;
        }
        .zigzag-list li:nth-child(odd) {
          margin-left: 0px;
        }
      `}</style>
    </div>
  );
}
