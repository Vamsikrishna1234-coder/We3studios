import React, { useState } from "react";
import { motion } from "framer-motion";

// Import your images/videos
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior1.jpg";

import exterior1 from "../assets/images/exterior design.jpg";
import exterior2 from "../assets/images/exterior design.jpg";
import exterior3 from "../assets/images/exterior design.jpg";
import exterior4 from "../assets/images/exterior design.jpg";

import render1 from "../assets/videos/3d exterior render.mp4";
import render2 from "../assets/videos/3d render video.mp4";
import render3 from "../assets/videos/3d exterior render.mp4";
import render4 from "../assets/videos/3d render video.mp4";

import motion1 from "../assets/videos/typography motion.mp4";
import motion2 from "../assets/videos/motion graphics.mp4";
import motion3 from "../assets/videos/typography motion.mp4";
import motion4 from "../assets/videos/motion graphics.mp4";

import plan1 from "../assets/images/2d plan home.jpeg";
import plan2 from "../assets/images/2d planing.jpeg";
import plan3 from "../assets/images/2d plan home.jpeg";
import plan4 from "../assets/images/2d planing.jpeg";

// Project Data
const projectsData = {
  All: [
    { image: interior1, title: "Modern Interior", category: "Interior" },
    { image: exterior1, title: "Office Exterior", category: "Exterior" },
    { video: render1, title: "3D Visualization", category: "3D Rendering" },
    { video: motion1, title: "Motion Graphics", category: "Motion Graphics" },
    { image: plan1, title: "2D Plan", category: "2D Planings" },
  ],
  Interior: [
    { image: interior1, title: "Modern Interior", category: "Interior" },
    { image: interior2, title: "Luxury Villa", category: "Interior" },
    { image: interior3, title: "Urban Apartment", category: "Interior" },
    { image: interior4, title: "Living Room Design", category: "Interior" },
  ],
  Exterior: [
    { image: exterior1, title: "Office Exterior", category: "Exterior" },
    { image: exterior2, title: "Commercial Facade", category: "Exterior" },
    { image: exterior3, title: "Shopping Mall Exterior", category: "Exterior" },
    { image: exterior4, title: "Urban Building Exterior", category: "Exterior" },
  ],
  "3D Rendering": [
    { video: render1, title: "3D Interior Render", category: "3D Rendering" },
    { video: render2, title: "3D Exterior Render", category: "3D Rendering" },
    { video: render3, title: "3D Walkthrough", category: "3D Rendering" },
    { video: render4, title: "3D Visualization", category: "3D Rendering" },
  ],
  "Motion Graphics": [
    { video: motion1, title: "Logo Animation", category: "Motion Graphics" },
    { video: motion2, title: "Explainer Video", category: "Motion Graphics" },
    { video: motion3, title: "Promotional Motion", category: "Motion Graphics" },
    { video: motion4, title: "Video Intro", category: "Motion Graphics" },
  ],
  "2D Planings": [
    { image: plan1, title: "Floor Plan", category: "2D Planings" },
    { image: plan2, title: "Section Plan", category: "2D Planings" },
    { image: plan3, title: "Elevation Plan", category: "2D Planings" },
    { image: plan4, title: "Site Layout", category: "2D Planings" },
  ],
};

const PortfolioGrid = ({ activeFilter }) => {
  const projects = projectsData[activeFilter] || [];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextItem = () => {
    setLightboxIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevItem = () => {
    setLightboxIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openLightbox(idx)}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {project.video && (
              <video
                src={project.video}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Overlay text on image */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-2 text-center text-sm font-medium">
              {project.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center px-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-600"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
            onClick={prevItem}
          >
            &#10094;
          </button>

          {/* Next */}
          <button
            className="absolute right-4 text-white text-4xl font-bold hover:text-gray-300"
            onClick={nextItem}
          >
            &#10095;
          </button>

          {/* Display Video or Image */}
          {projects[lightboxIndex].image && (
            <img
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              className="max-h-[80vh] object-contain rounded-lg"
            />
          )}
          {projects[lightboxIndex].video && (
            <video
              src={projects[lightboxIndex].video}
              controls
              className="max-h-[80vh] object-contain rounded-lg"
            />
          )}

          {/* Title & Category */}
          <div className="absolute bottom-8 text-center text-white text-lg">
            {projects[lightboxIndex].title} - {projects[lightboxIndex].category}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGrid;
