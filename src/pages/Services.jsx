import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import interiorImg from "../assets/images/interior1.jpg";
import exteriorImg from "../assets/images/exterior design.jpg";
import render3DImg from "../assets/images/interior2.jpg";
import motionImg from "../assets/images/interior3.jpg";
import planningImg from "../assets/images/2d planing.jpeg";

const services = [
  {
    title: "Interior Design",
    description:
      "We craft bespoke interiors that blend functionality, aesthetics, and innovation, creating spaces that inspire.",
    image: interiorImg,
    link: "/services/interior-design",
  },
  {
    title: "Exterior Design",
    description:
      "Our exterior designs elevate building facades, landscapes, and outdoor spaces with elegance and precision.",
    image: exteriorImg,
    link: "/services/exterior-design",
  },
  {
    title: "3D Visualization",
    description:
      "Bring ideas to life with photorealistic 3D renders and walkthroughs, ensuring clarity before execution.",
    image: render3DImg,
    link: "/services/visualization-rendering",
  },
  {
    title: "Motion Graphics",
    description:
      "Engaging animations and videos that communicate design concepts effectively to clients and stakeholders.",
    image: motionImg,
    link: "/services/motion-graphics",
  },
  {
    title: "2D Planning & Drawings",
    description:
      "Detailed 2D layouts and technical drawings that provide accurate spatial planning, clear visualization, and seamless project execution.",
    image: planningImg,
    link: "/services/working-drawings",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4"><br></br>
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore the range of services we offer at We3Studios to bring your
            vision to life with precision, creativity, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer block !no-underline"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
