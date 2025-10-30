import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import rendervideo from "../assets/videos/3d render video.mp4"
import Renders from "../components/Renders";
import CTAButton from "../components/CtaButton";
import Footer from "../components/FooterImage";

const VisualizationRendering = () => {
  // Your intro/sample video
  const renderVideo =
    rendervideo ; // 🔁 Replace with your own video

  // Each card shares the same video
  const sampleRenders = [
    { title: "Interior Visualization", video: renderVideo },
    { title: "Lighting & Mood Rendering", video: renderVideo },
    { title: "Architectural Walkthrough", video: renderVideo },
  ];

  // State for fullscreen video
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="h-[75vh] bg-gray-50 relative"><br></br>
      {/* Intro Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <video
          src={renderVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onClick={() => setActiveVideo(renderVideo)}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4"><br></br>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            3D Visualization & Rendering
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Realistic 3D renders and visualizations that bring your concepts to
            life before construction begins.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden pt-28 pb-16 min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight">
            3D <span className="text-yellow-500">Visualization & Rendering</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto">
            At <span className="text-yellow-400 font-semibold">WE3STUDIOS</span>, we specialize in creating photorealistic 3D visualizations that bring architectural and interior design concepts to life. Each render is meticulously crafted to showcase materials, lighting, and spatial relationships with stunning accuracy.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto">
            Our services include interior and exterior renders, lighting studies, animated walkthroughs, and product visualizations. We work closely with clients to provide visuals that allow them to experience the final design before construction begins.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify break-words hyphens-auto">
            Whether for marketing, client presentations, or design approvals, our renders communicate clarity, realism, and impact. Every project is customized to match the client’s vision, combining creativity and technical expertise to deliver immersive and interactive experiences.
          </p>
        </div>
      </section>




      {/* Sample Renders Section */}
      <div>
          <Renders/>
      </div>

      {/* Workflow Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Our <span className="text-yellow-500">Workflow</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "1. Brief & References",
                desc: "We begin by gathering project details, visual references, and setting a clear creative direction.",
              },
              {
                step: "2. Concept Renders",
                desc: "We create quick visual drafts to confirm style, tone, and structure before full-scale production.",
              },
              {
                step: "3. Final Production",
                desc: "We refine every element, ensuring all deliverables meet professional quality and client goals.",
              },
              {
                step: "4. Delivery & Support",
                desc: "We share final outputs in multiple formats and offer support for revisions or continued collaboration.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-700 transition-all duration-300 p-6 flex flex-col items-start text-center lg:text-left h-full"
              >
                <h3 className="font-semibold text-lg md:text-xl text-blue-400 mb-2">
                  {s.step}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <div>
        <CTAButton/>
      </div><br></br>
      <Footer/>
    </div>
  );
};

export default VisualizationRendering;
