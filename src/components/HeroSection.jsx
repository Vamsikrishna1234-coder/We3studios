import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../assets/images/interior1.jpg";
import hero2 from "../assets/images/exterior design.jpg";
import hero3Video from "../assets/videos/3d exterior render.mp4";
import hero4Video from "../assets/videos/motion graphics.mp4";
import hero5 from "../assets/images/interior2.jpg";

const slides = [
  {
    image: hero1,
    title: "Interior Designs",
    subtitle: "Creating stylish and functional spaces.",
    link: "/services/interior-design",
    type: "image",
  },
  {
    image: hero2,
    title: "Exterior Designs",
    subtitle: "Transforming exteriors into striking landmarks.",
    link: "/services/exterior-design",
    type: "image",
  },
  {
    image: hero3Video,
    title: "3D Visualization & Rendering",
    subtitle: "Realistic 3D visuals for your vision.",
    link: "/services/visualization-rendering",
    type: "video",
  },
  {
    image: hero4Video,
    title: "Motion Graphics & Animations",
    subtitle: "Creative visuals that captivate audiences.",
    link: "/services/motion-graphics",
    type: "video",
  },
  {
    image: hero5,
    title: "2D Plans & Working Drawings",
    subtitle: "Blueprints for seamless construction.",
    link: "/services/working-drawings",
    type: "image",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const durationRef = useRef(4500); // base duration (ms)
  const requestRef = useRef();
  const startTimeRef = useRef(null);
  const navigate = useNavigate();

  // Calculate adjusted duration based on screen width
  useEffect(() => {
    const baseDuration = 4500;
    const screenWidth = window.innerWidth;

    // Adjust speed proportionally (keep same visual time)
    // Larger screens = faster transitions (so same pixel speed)
    const scale = Math.max(0.8, Math.min(1.4, 1920 / screenWidth));
    durationRef.current = baseDuration * scale;
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
      startTimeRef.current = null;
    }, durationRef.current);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      let prog = (elapsed / durationRef.current) * 100;
      if (prog > 100) prog = 100;
      setProgress(prog);

      if (prog < 100) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [current]);

  const goToSlide = (index) => {
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = null;
  };

  const handleExploreClick = () => {
    navigate(slides[current].link);
  };

  const direction = current % 2 === 0 ? 1 : -1;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black"><br></br>
      {slides.map((slide, index) => {
        const isCurrent = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
              isCurrent ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.image}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
                style={{
                  clipPath:
                    direction === 1
                      ? `inset(0 ${100 - progress}% 0 0)`
                      : `inset(0 0 0 ${100 - progress}%)`,
                }}
              ></video>
            ) : (
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
                style={{
                  clipPath:
                    direction === 1
                      ? `inset(0 ${100 - progress}% 0 0)`
                      : `inset(0 0 0 ${100 - progress}%)`,
                }}
              />
            )}

            <div
              className="absolute top-0 h-full w-[2px] bg-white/30 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20"
              style={{
                left: `${direction === 1 ? progress : 100 - progress}%`,
              }}
            ></div>
          </div>
        );
      })}

      {/* Text Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto z-30 transition-all duration-700 ease-in-out ${
          progress < 70 ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
        }`}
      >
        <h2 className="text-base sm:text-lg font-light text-white mb-2">
          {slides[current].subtitle}
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
          {slides[current].title}
        </h1>

        <button
          onClick={handleExploreClick}
          className={`bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-base sm:text-lg py-3 px-6 sm:px-8 md:px-10 rounded-lg shadow-lg cursor-pointer transition-opacity duration-500 hover:scale-105 hover:shadow-xl
            ${progress < 80 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
        >
          Explore Designs
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
