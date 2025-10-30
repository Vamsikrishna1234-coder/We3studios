import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Interior2 from '../assets/images/kitchen-interiordesign.jpg';
import TwoDPlan from '../assets/images/2d planing.jpeg';
import Interior1 from '../assets/images/interior2.jpg';
import Exterior from '../assets/images/exterior design.jpg';
import ThreeDimage from '../assets/images/3d-housemodel.jpg';
import Motionvideo from '../assets/videos/motion graphics.mp4';
import { image } from "framer-motion/client";
const projects = [
  {
    title: "Modern Living Room",
    category: "Interior",
    image: Interior1,
    description: "Elegant space balancing minimalism and comfort.",
    link: "/services/interior-design",
  },
  {
    title: "Contemporary Kitchen",
    category: "Interior",
    image: Interior2,
    description: "Functional and cozy kitchen with modern aesthetics.",
    link: "/services/interior-design",
  },
  {
    title: "2D Floor Plan Design",
    category: "2D",
    image: TwoDPlan,
    description: "Detailed architectural 2D layouts for planning precision.",
    link: "/services/working-drawings",
  },
  {
    title: "Minimalist Villa Exterior",
    category: "Exterior",
    image: Exterior,
    description: "Clean, modern exterior with perfect lines.",
    link: "/services/working-drawings",
  },
  {
    title: "3D Villa Concept",
    category: "3D",
    image: ThreeDimage,
    description: "Photorealistic 3D visualization for luxury villa.",
    link: "/services/visualization-rendering",
  },
  {
    title: "Motion Architecture Reel",
    category: "Motion",
    video: Motionvideo,
    description: "Dynamic storytelling in architectural motion.",
    link: "/services/motion-graphics",
  },
];

const filters = ["All", "Interior", "Exterior", "3D", "Motion", "2D"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600 rounded-full opacity-10 blur-3xl animate-bounce-slow-reverse"></div>

      {/* Header */}
      <div className="text-center relative z-10 mb-16 px-4">
        <h2 className="text-5xl font-bold mb-4">
          Our <span className="text-yellow-600">Portfolio</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our creative journey through interior, exterior, and digital
          design excellence.
        </p>
        <div className="mt-6 h-1 w-24 bg-yellow-600 mx-auto rounded-full"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 relative z-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              activeFilter === filter
                ? "bg-yellow-600 text-black border-yellow-600 shadow-lg"
                : "border-gray-600 text-gray-300 hover:text-white hover:border-yellow-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform duration-300 ${
                  hoveredCard === index
                    ? "translate-y-[-10px] shadow-yellow-400/40"
                    : "translate-y-0 shadow-black/50"
                }`}
              >
                {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-96 object-cover transition-transform duration-500 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-96 object-cover transition-transform duration-500 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                />
              )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-70"
                  }`}
                ></div>

                <div
                  className={`absolute top-4 right-4 bg-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold transition-transform duration-300 ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  }`}
                >
                  {project.category}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-transform duration-300 ${
                      hoveredCard === index ? "translate-y-[-5px]" : "translate-y-0"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-300 text-sm transition-all duration-300 ${
                      hoveredCard === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-80 translate-y-2"
                    }`}
                  >
                    {project.description}
                  </p>

                  <button
                    onClick={() => navigate(project.link)}
                    className={`mt-4 px-4 py-2 bg-yellow-600 text-black rounded-full text-sm font-semibold hover:bg-yellow-500 transition-all ${
                      hoveredCard === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(30px, -30px); }
          }
          @keyframes bounce-slow-reverse {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-30px, 30px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 8s ease-in-out infinite;
          }
          .animate-bounce-slow-reverse {
            animation: bounce-slow-reverse 10s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PortfolioSection;
