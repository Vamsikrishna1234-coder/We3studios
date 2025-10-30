import React, { useState } from "react";
import interiorrender from "../assets/videos/interior 3d rendering.mp4";
import exteriorrender from "../assets/videos/3d exterior render.mp4";

const RenderGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const sampleRenders = [
    {
      title: "Modern Living Room Visualization",
      video: interiorrender,
    },
    {
      title: "3D Exterior Walkthrough",
      video: exteriorrender,
    },
    {
      title: "Office Interior Animation",
      video: interiorrender,
    },
  ];

  return (
    <>
      {/* Sample Renders Section */}
      <section className="bg-black py-16 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Sample <span className="text-yellow-500">Render Videos</span>
          </h2><br></br>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleRenders.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white flex flex-col h-full"
                onClick={() => setActiveVideo(item.video)}
              >
                {/* 16:9 Video Thumbnail */}
                <div className="relative w-full pt-[56.25%]">
                  <video
                    src={item.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center flex-1 flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
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
    </>
  );
};

export default RenderGallery;
