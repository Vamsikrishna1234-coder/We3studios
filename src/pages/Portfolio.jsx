import React, { useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Interior",
    "Exterior",
    "3D Rendering",
    "Motion Graphics",
    "2D Planings",
  ];

  return (
    <div className="overflow-hidden">
      {/* Intro Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 pt-28 pb-16 min-h-[55vh] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h1 className="mb-10 text-center text-3xl font-bold md:text-4xl"><br></br>
            Our <span className="text-yellow-500">Portfolio</span>
          </h1>

          {/* Paragraph - Perfect on All Screens */}
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-6 leading-relaxed text-justify break-words hyphens-auto tracking-tight [word-spacing:0.02em]">
            At WE3 Studios, our portfolio showcases the best of our creative work across residential, 
            commercial, 3D visualization, motion graphics, and 2D planning projects. Each project 
            represents our dedication to detail, innovation, and client satisfaction. Our team strives 
            to bring every concept to life with precision and creativity, ensuring each design is both 
            functional and visually captivating. We believe in blending modern aesthetics with practical 
            solutions to create spaces that inspire. Every project is a collaboration with our clients, 
            reflecting their vision while exceeding expectations. Explore our portfolio to experience the 
            diversity, quality, and passion behind every design we craft.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        {/* Filter Buttons */}
        <div className="text-center mb-12">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-yellow-400 text-black border-[yellow]"
                    : "bg-transparent text-gray-300 border-gray-500 hover:bg-[#de6c0e] hover:text-black"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid (handles images & videos internally) */}
        <PortfolioGrid activeFilter={activeFilter} />
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 pt-28 pb-16 min-h-[55vh] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            Why <span className="text-yellow-500">Choose Us</span>
          </h2>

          {/* Paragraph - Perfect on All Screens */}
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-justify break-words hyphens-auto tracking-tight [word-spacing:0.02em]">
            Our design philosophy focuses on innovation, functionality, and elegance. 
            Every space we design is visually stunning and practical. We pay meticulous 
            attention to detail to ensure each design reflects the client’s vision. 
            Our team combines creativity with technical expertise to deliver exceptional results. 
            From concept to completion, we strive to create environments that inspire and elevate 
            everyday experiences. We believe in blending aesthetics with purpose, ensuring that 
            every element serves both beauty and utility. Our ultimate goal is to transform spaces 
            into timeless expressions of individuality and modern design.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Let's<span className="text-yellow-500"> Create Together</span>
          </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your space into something exceptional? Contact our design experts today.
        </p>
        <a
          href="/ContactUs"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-all duration-300 !no-underline"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default PortfolioPage;
