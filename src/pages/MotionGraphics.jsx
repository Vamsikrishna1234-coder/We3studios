// MotionGraphics.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Motiongraphics from "../assets/videos/motion graphics.mp4"
import logoanimation from "../assets/videos/youtube motion.mp4"
import typography from "../assets/videos/typography motion.mp4"
import promotional from "../assets/videos/brand promotional.mp4"
import UIanimation from "../assets/videos/ui animation.mp4"
import introanimation from "../assets/videos/intro animation.mp4"

const MotionGraphics = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const motionProjects = [
    {
      title: "Logo Animation Reel",
      video: logoanimation,
    },
    {
      title: "3D Motion Typography",
      video: typography,
    },
    {
      title: "Promotional Motion Clip",
      video: promotional,
    },
    {
      title: "UI Animation Showcase",
      video: UIanimation,
    },
    {
      title: "Intro Animation",
      video: introanimation,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center bg-black">
        <video
            src={Motiongraphics}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold">Motion Graphics Studio</h1>
            <p className="mt-4 max-w-xl mx-auto">
            Explore dynamic animations and cinematic visuals crafted to engage and captivate.
            </p>
        </div>
        </section>


      {/* Description Section */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Why Choose <span className="text-yellow-500">Motion Graphics</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Motion graphics bring your ideas to life with captivating visuals, dynamic typography, and smooth transitions.
            They allow you to communicate complex concepts quickly and engagingly, making your content memorable.
            Our team combines creativity with technical expertise to craft animations that tell stories, enhance branding,
            and captivate your audience.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            From explainer videos and logo animations to promotional clips and UI motion, we ensure every frame is visually
            polished and narratively clear. We integrate vibrant colors, realistic effects, and precise timing to maintain
            consistency with your brand identity.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto tracking-tight">
            Each project is tailored to your objectives, guaranteeing a professional and impactful final product that resonates
            with your audience and strengthens your visual presence.
          </p>
        </div>
      </section>




      {/* Projects Grid */}
      <section className="bg-black py-16 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Sample <span className="text-yellow-500">Motion Graphics</span>
          </h2>
          <br />

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {motionProjects.map((project, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white flex flex-col h-full"
                onClick={() => setActiveVideo(project.video)}
              >
                {/* 16:9 Video Thumbnail */}
                <div className="relative w-full pt-[56.25%]">
                  <video
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center flex-1 flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-black">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
     {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-8 text-white text-4xl font-bold z-50 hover:text-gray-300"
          >
            &times;
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-4xl flex justify-center">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg z-40"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MotionGraphics;
