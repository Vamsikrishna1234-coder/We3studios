import React from "react";
import interiorImg from "../assets/images/interior1.jpg"; // replace with your interior image path
import { Link } from "react-router-dom";
import InteriorCard from "../components/InteriorCard";
import CTAButton from "../components/CtaButton";

const InteriorDesign = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${interiorImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div><br></br>
        <h1 className="relative text-white text-4xl sm:text-5xl font-bold z-10 text-center">
          Interior Design
        </h1>
      </section>

      {/* Overview Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-5 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Our <span className="text-yellow-500">Interior Design Services</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-justify space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            At <span className="text-yellow-400">WE3STUDIOS</span>, we create functional and beautiful interior spaces that reflect your unique style and personality. From elegant homes to inspiring commercial environments, our team merges creativity, ergonomics, and aesthetics to design interiors that elevate everyday living.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Our expertise spans space planning, furniture layout, lighting design, material selection, and 3D visualization. We collaborate closely with clients to ensure every detail aligns with their vision, creating spaces that are both visually stunning and practically efficient.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Every project we craft is tailored to individual needs, balancing functionality, comfort, and visual harmony. Through thoughtful design choices in color, lighting, and spatial flow, we transform interiors into timeless expressions of sophistication and purpose.
          </p>
        </div>
      </section>




      {/* sample projects */}
      <div>
          <InteriorCard/>
      </div>


      {/* Our Design Process Section */}
      <section className="relative overflow-hidden pt-24 pb-16 min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto">
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
                Understanding your style, needs, and functional requirements to create
                the perfect interior space.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-7 lg:p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-blue-400">
                Conceptual Design
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                Concept sketches, mood boards, and 3D visualizations to showcase design
                ideas before implementation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-7 lg:p-8 text-center hover:bg-gray-700 transition-all duration-300">
              <h3 className="font-semibold text-xl mb-3 text-blue-400">
                Implementation
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                Executing the design with attention to detail and ensuring the final
                space meets your expectations.
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

export default InteriorDesign;
