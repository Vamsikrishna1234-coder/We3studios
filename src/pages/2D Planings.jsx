// TwoDPlannings.jsx
import React, { useState } from "react";
import Plan2d from "../assets/images/2d planing.jpeg";
import Plan2dhome from "../assets/images/2d plan home.jpeg";

const TwoDPlannings = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const samplePlans = [
    { title: "Residential Floor Plan", image: Plan2d },
    { title: "Commercial Layout", image: Plan2dhome },
    { title: "Office Space Planning", image: Plan2d },
    { title: "Retail Store Layout", image: Plan2dhome },
  ];

  // Handle Zoom (scroll wheel)
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 3)); // 1x - 3x zoom
  };

  // Rotate Image
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Reset values and close
  const handleClose = () => {
    setActiveImage(null);
    setScale(1);
    setRotation(0);
  };

  return (
    <div className="min-h-screen bg-gray-50"><br></br>
      {/* Intro Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-gray-600">
        <img
          src={Plan2d}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Background Plan"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white"><br></br>
            2D Planning & Layouts
          </h1>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Detailed 2D floor plans, office layouts, and commercial designs to
            help visualize your spaces clearly before implementation.
          </p>
        </div>
      </section>
      
      {/* Description Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Why Choose <span className="text-yellow-500">2D Plannings & Drawings</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Our 2D planning and drawing services provide detailed visual blueprints that lay the foundation for every great
            design. With precise scaling, accurate layouts, and clean presentation, you can visualize spaces before any
            physical work begins — ensuring perfect alignment between your concept and execution.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Whether it’s residential floor plans, commercial layouts, or office interiors, our 2D drawings give you complete
            clarity on dimensions, placements, and spatial organization. Every plan is created with attention to functionality,
            flow, and aesthetics — balancing design intent with technical precision.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            We use industry-standard tools and design principles to deliver accurate, presentation-ready drawings that can be
            easily shared, reviewed, or developed further into 3D models. This approach helps minimize errors, streamline
            communication, and enhance the overall design workflow.
          </p>
        </div>
      </section>


      {/* Sample 2D Plans */}
      <section className="bg-black py-16 px-5 md:px-10 lg:px-16"><br></br>
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Sample <span className="text-yellow-500">2D Plans</span>
        </h2><br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {samplePlans.map((plan, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => setActiveImage(plan.image)}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-gray-50 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {plan.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
          onWheel={handleWheel}
        >
          {/* Close and Rotate Buttons */}
          <div className="absolute top-6 right-6 flex gap-4 z-50">
            <button
              onClick={handleRotate}
              className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-2xl"
              title="Rotate"
            >
              ⟳
            </button>
            <button
              onClick={handleClose}
              className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-2xl"
              title="Close"
            >
              &times;
            </button>
          </div>

          {/* Image (centered + zoom + rotate) */}
          <img
            src={activeImage}
            alt="2D Plan"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg transition-transform duration-300 select-none"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
            draggable="false"
          />

          {/* Zoom info */}
          <p className="text-gray-300 text-sm mt-4">
            Scroll to Zoom | Click ⟳ to Rotate
          </p>
        </div>
      )}
    </div>
  );
};

export default TwoDPlannings;
