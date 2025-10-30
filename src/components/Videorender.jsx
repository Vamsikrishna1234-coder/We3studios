import React from "react";
import rendervideo from "../assets/videos/3d render video.mp4"
const VideoIntroSection = ({ videoSrc, title, description }) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={rendervideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default VideoIntroSection;
