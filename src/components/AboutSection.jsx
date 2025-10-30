import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/images/interior1.jpg"; // replace with your own image

const AboutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AboutUs"); // change to your desired route
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="relative py-24 bg-black text-white overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <img
              src={aboutImg}
              alt="About We3Studios"
              className="rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-lg text-yellow-400 font-light">
                Creative. Modern. Precise.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                About <span className="text-yellow-500">We3Studios</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 text-justify">
                At <span className="text-white font-semibold">We3Studios</span>, we transform ideas into elegant spaces that
                reflect individuality and innovation. Our team blends art, technology, and architecture
                to craft interiors and exteriors that inspire emotion and elevate lifestyle.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 text-justify">
                From <span className="text-yellow-400">3D visualization & rendering</span> to
                <span className="text-yellow-400"> motion graphics and 2D working plans</span>, every project is
                designed with passion, precision, and purpose. We strive to deliver not just designs — but
                timeless experiences.
              </p>

            {/* Discover More Button */}
            <div className="mt-8">
              <button
                onClick={handleClick}
                className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
