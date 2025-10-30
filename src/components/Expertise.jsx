import React from 'react';
import about4 from '../assets/images/interior2.jpg'; // Replace with your actual image path

export default function ExpertiseSection() {
  return (
    <section className="bg-black py-16 md:py-20 min-h-[auto]">
      <div className="container mx-auto px-4">
        <div className="row d-flex align-items-center justify-content-center flex-column-reverse flex-md-row">
          
          {/* Content Left */}
          <div className="col-md-6 text-md-start text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              Our <span className="text-yellow-500">Expertise</span>
            </h2>

            <ul className="list-disc pl-6 text-gray-300 text-start space-y-2">
              <li>Interior Designs – functional, aesthetic, and personalized spaces.</li>
              <li>Exterior Designs – bold, modern facades with perfect proportions.</li>
              <li>3D Visualization & Rendering – hyper-realistic representations that bring ideas to life.</li>
              <li>Motion Graphics & Animation – dynamic visuals that communicate your brand’s story.</li>
              <li>2D Plans & Working Drawings – technical precision for flawless execution.</li>
            </ul>
          </div>

          {/* Image Right */}
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <img 
              src={about4} 
              alt="Our Expertise"
              className="rounded-3xl shadow-lg mx-auto object-cover w-[350px] md:w-[420px] h-[280px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
