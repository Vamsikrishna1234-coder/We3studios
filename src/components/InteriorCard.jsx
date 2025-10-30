import React, { useState } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ imgSrc, title, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
        aria-label="Close"
      >
        <X size={24} className="text-gray-800" />
      </button>
      
      <div 
        className="relative max-w-5xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <img
            src={imgSrc}
            alt={title}
            className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
          />
          <h3 className="text-white text-2xl font-semibold mt-6">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const RotatableImage = ({ imgSrc, title, description, is3D, onClick }) => {
  if (is3D) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div 
          className="relative w-full h-48 cursor-pointer"
          onClick={onClick}
        >
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to view 3D
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 transition-all duration-300 group-hover:text-blue-600">
            {title}
          </h3>
          <p className="text-gray-600 text-sm transition-all duration-300 group-hover:text-gray-800">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-4 relative overflow-hidden">
        <h3 className="font-semibold text-lg mb-2 transition-all duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 text-sm transition-all duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>
    </div>
  );
};

const InteriorCards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Image URLs for the projects
  const interior1 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";
  const interior2 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80";
  const interior3 = "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80";
  const interior4 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80";
  const interior5 = "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80";
  const interior6 = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80";

  const projects = [
    {
      imgSrc: interior1,
      title: "Modern Living Room",
      description: "Sleek and stylish living spaces that maximize comfort and modern aesthetics.",
      is3D: false,
    },
    {
      imgSrc: interior2,
      title: "Kitchen & Dining",
      description: "Functional kitchen layouts with elegant cabinetry, lighting, and dining spaces that enhance usability.",
      is3D: false,
    },
    {
      imgSrc: interior3,
      title: "Bedroom Retreat",
      description: "Cozy and relaxing bedroom interiors designed for comfort, style, and personalized aesthetics.",
      is3D: false,
    },
    {
      imgSrc: interior4,
      title: "Stylish Bedroom",
      description: "Ergonomic and inspiring home office designs that boost productivity and creativity.",
      is3D: false,
    },
    {
      imgSrc: interior5,
      title: "Luxury Bathroom",
      description: "Spa-inspired bathrooms with modern fixtures and serene aesthetics for ultimate relaxation.",
      is3D: false,
    },
    {
      imgSrc: interior6,
      title: "Entertainment Lounge",
      description: "Dynamic entertainment spaces with integrated technology for immersive experiences.",
      is3D: false,
    },
  ];

  const handleImageClick = (project) => {
    setSelectedImage(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <section className="bg-black py-20 min-h-screen max-w-9xl mx-auto px-5 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Sample<span className="text-yellow-500"> Design Process</span>
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-9">
          {projects.map((project, index) => (
            <RotatableImage
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              is3D={project.is3D}
              onClick={() => handleImageClick(project)}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          imgSrc={selectedImage.imgSrc}
          title={selectedImage.title}
          isOpen={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default InteriorCards;