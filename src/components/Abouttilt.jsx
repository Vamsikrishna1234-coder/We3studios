import React, { useState, useEffect, useRef } from 'react';
import aboutLeft from '../assets/images/interior1.jpg';
import aboutRight from '../assets/images/interior2.jpg';

export default function AboutUsSection() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
          const offset = (progress - 0.5) * 400; // -200 to 200
          setScrollOffset(offset);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden py-24 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    ><br></br>
      <div className="container mx-auto px-4 text-white">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-3">About Us</h1>
        <p className="text-yellow-400 italic text-lg mb-12 text-center">
          “Design is not just what it looks like and feels like-design is how it works.”
        </p>


        {/* Main Row */}
        <div className="row align-items-center justify-content-between relative">

          {/* Left Card - Floating Animation */}
          <div 
              className="col-lg-2 col-md-3 d-none d-md-flex justify-content-start"
              style={{ transform: 'translateY(10px) rotate(-15deg)', transition: 'transform 0.3s ease-in-out' }}
            >

            <div className="rounded-2xl overflow-hidden w-48 h-72 shadow-[0_20px_60px_rgba(222,108,14,0.4)] animate-float">
              <img 
                src={aboutLeft} 
                alt="Interior Design"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="col-lg-6 col-md-6 col-12 px-lg-5 px-4">
            <div className="text-center text-gray-300 space-y-4">
              <p className="text-justify text-base md:text-lg leading-relaxed text-gray-300 hyphens-auto[word-spacing:normal]
                  [letter-spacing:normal]
                  break-words">
                    At <span className="font-semibold text-yellow-400">WE3 Design Studio</span>, 
                    we believe design is more than just visuals — it’s a language that shapes experiences. 
                    Our work bridges creativity with technical precision to deliver immersive spaces and visuals. 
                    From Interior & Exterior Designs to 3D Visualization & Rendering, Motion Graphics & Animations, 
                    and 2D Plans & Working Drawings, our team brings concepts to life in ways that inspire and engage. 
                    Every line, color, and texture is thoughtfully crafted to evoke emotion and functionality. 
                    We focus on creating designs that are not only aesthetically pleasing but also practical and meaningful. 
                    Our philosophy is to innovate, inspire, and deliver timeless solutions. Every project we undertake reflects 
                    our passion for detail and our commitment to excellence. By combining imagination with cutting-edge tools, 
                    we ensure every design resonates with our client’s vision and creates memorable experiences for their audience. 
                    Whether it’s transforming interiors, visualizing architectural exteriors, or producing captivating animations, 
                    <span className="font-semibold text-yellow-400">WE3 Design Studio</span> delivers creativity without compromise.
              </p>
            </div>
          </div>

          {/* Right Card - Floating Animation */}
          <div 
            className="col-lg-2 col-md-3 d-none d-md-flex justify-content-end"
            style={{ transform: 'translateY(-110px) rotate(15deg)', transition: 'transform 0.3s ease-in-out' }}
          >
            <div className="rounded-2xl overflow-hidden w-48 h-72 shadow-[0_20px_60px_rgba(222,108,14,0.4)] animate-float-reverse">
              <img 
                src={aboutRight} 
                alt="Exterior Design"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>

        </div>

        {/* Mobile Cards */}
        <div className="row d-md-none mt-4 justify-center gap-4">
          <div className="col-6 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-36 h-52 shadow-[0_10px_30px_rgba(222,108,14,0.3)] animate-float">
              <img 
                src={aboutLeft} 
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-6 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-36 h-52 shadow-[0_10px_30px_rgba(222,108,14,0.3)] animate-float-reverse">
              <img 
                src={aboutRight} 
                alt="Exterior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
