import React from 'react';

// Replace with your actual local images
const missionImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop';
const visionImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop';

export default function MissionVisionSection() {
  return (
    <section className="bg-black py-16 md:py-20 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-center text-4xl font-bold text-white md:mb-16 md:text-5xl">
          Our <span className="text-yellow-600">Mission & Vision</span>
        </h1>

        {/* Mission Section */}
        <div className="mb-16 flex flex-col items-center gap-8 md:mb-20 md:flex-row md:gap-12 lg:gap-16">
          {/* Image - Left on Desktop, Top on Mobile */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <div className="group h-72 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-110 md:h-80 md:max-w-lg">
              <img
                src={missionImage}
                alt="Our Mission"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text - Right on Desktop, Bottom on Mobile */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold md:mb-5 md:text-4xl">
              Our <span className="text-yellow-600">Mission</span>
            </h2>
            <p className="
              text-justify          /* justified on all screens */
              text-base md:text-lg
              leading-relaxed
              text-gray-300
              hyphens-auto          /* break long words cleanly */
              [word-spacing:normal] /* Tailwind arbitrary value – forces normal spacing */
              [letter-spacing:normal]
            ">
              Our mission is to empower businesses and individuals through innovative design
              solutions that transcend expectations. We strive to create meaningful experiences
              by blending creativity with cutting-edge technology. Every project we undertake
              is driven by our commitment to excellence, sustainability, and client
              satisfaction. We believe in pushing boundaries, challenging conventions, and
              delivering results that make a lasting impact. Through collaboration and
              dedication, we aim to be the catalyst for transformation in every space we
              touch.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12 lg:gap-16">
          {/* Image - Right on Desktop, Top on Mobile */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-start">
            <div className="group h-72 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-110 md:h-80 md:max-w-lg">
              <img
                src={visionImage}
                alt="Our Vision"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text - Left on Desktop, Bottom on Mobile */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold md:mb-5 md:text-4xl">
              Our <span className="text-yellow-600">Vision</span>
            </h2>
            <p className="
                text-justify
                text-base md:text-lg
                leading-relaxed
                text-gray-300
                hyphens-auto
                [word-spacing:normal]
                [letter-spacing:normal]
                break-words
              ">
                We envision a future where design is not just aesthetic but transformative. 
                Our goal is to become a global leader in creating spaces and visuals that 
                inspire, engage, and elevate human experiences. We see a world where every 
                project tells a story, where functionality meets artistry, and where our 
                work contributes to building sustainable and inspiring environments. Through 
                innovation and passion, we aim to redefine what's possible in design and 
                leave a legacy of creativity that stands the test of time.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}