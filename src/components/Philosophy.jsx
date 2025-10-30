import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import philosophyimg from '../assets/images/interior3.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function DesignPhilosophySection() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: -20 },
        {
          y: 20,
          duration: 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 pt-28 pb-16 min-h-[75vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop & Tablet: Side-by-Side */}
        <div className="hidden items-center justify-center gap-8 md:flex lg:gap-12">
          {/* Left: Image */}
          <div className="w-full max-w-md flex-shrink-0 md:w-1/2">
            <div
              ref={imageRef}
              className="rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <img
                src={philosophyimg}
                alt="Our Philosophy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-extrabold lg:text-5xl">
              Our <span className="text-yellow-500">Design Philosophy</span>
            </h2>

            <p className="mb-4 text-justify text-base leading-relaxed text-gray-300 md:text-lg hyphens-auto [word-spacing:0.02em] break-words">
              At WE3 Design Studio, design is not just decoration — it’s a <strong>language of creativity</strong>.  
              We approach every project with curiosity, collaboration, and craftsmanship. Every line, color, and texture is thoughtfully applied to evoke emotion and functionality.  
              Our team strives to make spaces and visuals that are not only aesthetically pleasing but also meaningful and practical.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-300 md:text-lg hyphens-auto [word-spacing:0.02em] break-words">
              Whether it’s an elegant interior, a stunning exterior, or an animated visual, our philosophy remains simple:  
              <span className="font-semibold text-yellow-400">Design that connects people with creativity.</span>  
              We combine imagination with cutting-edge technology to deliver immersive experiences that resonate with clients and their audiences.  
              Every project reflects our commitment to excellence, attention to detail, and passion for innovation. We believe in creating work that inspires, engages, and leaves a lasting impact on every viewer.
            </p>
          </div>
        </div>

        {/* Mobile: Stacked, Centered */}
        <div className="flex flex-col items-center md:hidden">
          {/* Image */}
          <div className="mb-8 w-full max-w-sm">
            <div
              ref={imageRef}
              className="rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <img
                src={philosophyimg}
                alt="Our Philosophy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full max-w-xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold">
              Our <span className="text-yellow-500">Design Philosophy</span>
            </h2>

            <p className="mb-4 text-justify text-base leading-relaxed text-gray-300 hyphens-auto [word-spacing:0.02em] break-words">
              At WE3 Design Studio, design is not just decoration — it’s a <strong>language of creativity</strong>.  
              We approach every project with curiosity, collaboration, and craftsmanship. Every line, color, and texture is thoughtfully applied to evoke emotion and functionality.  
              Our team strives to make spaces and visuals that are not only aesthetically pleasing but also meaningful and practical.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-300 hyphens-auto [word-spacing:0.02em] break-words">
              Whether it’s an elegant interior, a stunning exterior, or an animated visual, our philosophy remains simple:  
              <span className="font-semibold text-yellow-400">Design that connects people with creativity.</span>  
              We combine imagination with cutting-edge technology to deliver immersive experiences that resonate with clients and their audiences.  
              Every project reflects our commitment to excellence, attention to detail, and passion for innovation. We believe in creating work that inspires, engages, and leaves a lasting impact on every viewer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}