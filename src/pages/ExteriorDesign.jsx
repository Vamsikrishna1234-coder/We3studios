import React from "react";
import exteriorImg from "../assets/images/exterior design.jpg"; // replace with your image path
import { Link } from "react-router-dom";
import ExteriorCard from "../components/ExteriorCard"
import CTAButton from "../components/CtaButton";

const ExteriorDesign = () => {
  return (
    <div className="min-h-screen bg-gray-100"><br></br>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${exteriorImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div><br></br>
        <h1 className="relative text-white text-4xl sm:text-5xl font-bold z-10 text-center">
          Exterior Design
        </h1>
      </section>

      {/* Overview Section */}
      <section className="relative overflow-hidden pt-28 pb-16 min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight">
            Our <span className="text-yellow-500">Exterior Design Services</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight [word-spacing:0.02em]">
            At <span className="text-yellow-400 font-semibold">WE3STUDIOS</span>, we craft striking and functional exterior designs that elevate both aesthetics and performance. From residential facades to large-scale commercial exteriors, our team blends creativity, engineering precision, and environmental harmony to create timeless architectural statements.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight [word-spacing:0.02em]">
            Our expertise includes landscaping, façade design, outdoor lighting, and structural detailing. We ensure that every project aligns with modern design trends while maintaining functionality, durability, and aesthetic appeal. Each exterior is a seamless balance between innovation, texture, and form that complements its surroundings.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight [word-spacing:0.02em]">
            Whether it’s a luxurious villa, a contemporary office, or an industrial complex, we bring our clients’ visions to life with meticulous planning and creative flair. At <span className="text-yellow-400 font-semibold">WE3STUDIOS</span>, we redefine exterior spaces into inspiring environments that reflect sophistication, sustainability, and identity.
          </p>
        </div>
      </section>

      {/* Sample Projects Section */}
      <div>
          <ExteriorCard/>
      </div>

      {/* Our Design Process Section */}
      <section className="relative overflow-hidden pt-28 pb-16 min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Our<span className="text-yellow-500"> Design Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-7 lg:p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-blue-400">
                Consultation
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                We start by understanding your vision, preferences, and functional
                requirements. Every idea is discussed in detail.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-7 lg:p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-blue-400">
                Conceptual Design
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                Our designers create concept sketches, 3D models, and visualizations to
                help you envision the final exterior layout.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-7 lg:p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-blue-400">
                Implementation
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                We collaborate with contractors and suppliers to execute the design
                with precision, quality materials, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div>
        <CTAButton/>
      </div>
      <br></br>
    </div>
  );
};

export default ExteriorDesign;
