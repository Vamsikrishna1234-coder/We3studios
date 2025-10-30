import React, { useEffect, useRef } from "react";
import { easeInOut } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Correct import for navigation
import serviceimg1 from "../assets/images/interior1.jpg";
import serviceimg2 from "../assets/images/exterior design.jpg";
import serviceimg3 from "../assets/images/2d planing.jpeg";

import { video } from "framer-motion/client";

const ServicesSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      icon: "🏠",
      title: "Interior Designs",
      subtitle:
        "Crafting sophisticated and comfortable interior spaces with artistic balance.",
      image: serviceimg1,
      color: "from-gray-900 via-gray-800 to-black",
      link: "/services/interior-design",
    },
    {
      icon: "🏢",
      title: "Exterior Designs",
      subtitle:
        "Enhancing architectural exteriors with modern aesthetics and clean structure.",
      image: serviceimg2,
      color: "from-neutral-900 via-gray-900 to-gray-800",
      link: "/services/exterior-design",
    },
    {
      icon: "🖥️",
      title: "3D Visualization & Rendering",
      subtitle:
        "Turning blueprints into immersive 3D experiences that captivate imagination.",
      image: serviceimg3,
      color: "from-black via-gray-900 to-zinc-800",
      link: "/services/visualization-rendering",
    },
    {
      icon: "🎬",
      title: "Motion Graphics & Animations",
      subtitle:
        "Dynamic and elegant animations to visually narrate your story with impact.",
      image: serviceimg2,
      color: "from-zinc-900 via-neutral-800 to-gray-900",
      link: "/services/motion-graphics",
    },
    {
      icon: "📐",
      title: "2D Plans & Working Drawings",
      subtitle:
        "Detailed architectural plans that blend precision and clarity for flawless execution.",
      image: serviceimg3,
      color: "from-gray-800 via-gray-900 to-black",
      link: "/services/working-drawings",
    },
  ];

  useEffect(() => {
    // 🚫 Skip GSAP animation setup for mobile screens
    if (window.innerWidth < 768) return;

    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    script2.async = true;

    document.body.appendChild(script1);

    script1.onload = () => {
      document.body.appendChild(script2);

      script2.onload = () => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const totalCards = cardsRef.current.length;

        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          // 🧩 Pin each card for tablet/desktop
          ScrollTrigger.create({
            trigger: card,
            start: "center center",
            end: () => `+=${(totalCards - index) * window.innerHeight}`,
            pin: true,
            pinSpacing: false,
          });

          // Smooth stacking animation
          if (index === totalCards - 1) {
            gsap.to(cardsRef.current, {
              yPercent: -100 * totalCards,
              opacity: 0,
              ease: easeInOut,
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: () => `+=${window.innerHeight * totalCards}`,
                scrub: 1,
              },
            });
          }
        });
      };
    };

    // 🧹 Cleanup
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  return (
    <section className="relative bg-black py-20">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl font-bold text-white mb-4">
          Our <span className="text-yellow-600">Services</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Tailored design experiences that reflect your vision in every detail.
        </p>
        <div className="mt-6 h-1 w-24 bg-yellow-600 mx-auto rounded-full"></div>
      </div>

      {/* Desktop/Tablet Layout (with GSAP animation) */}
      {/* ✅ Desktop Animation Layout (Only on lg and above) */}
      <div ref={containerRef} className="relative hidden lg:block">
        {services.map((service, index) => (
          <div key={index} className="h-screen flex items-center justify-center">
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full max-w-5xl px-4"
              style={{ zIndex: index + 1 }}
            >
              <div
                className={`bg-gradient-to-br ${service.color} rounded-3xl shadow-2xl border border-gray-700/40 overflow-hidden flex flex-col md:flex-row min-h-[420px]`}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-10">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-semibold text-white mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {service.subtitle}
                  </p>

                  <Link
                    to={service.link}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl !no-underline"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="h-screen"></div>
      </div>

      {/* ✅ Mobile + Tablet Layout (Static cards, no animation) */}
      <div className="container block lg:hidden px-3">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6">
              <div
                className={`card bg-gradient-to-br ${service.color} border-0 shadow-lg rounded-4 overflow-hidden`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top img-fluid opacity-90"
                />
                <div className="card-body text-center text-white p-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h5 className="card-title fw-semibold fs-4 mb-2">
                    {service.title}
                  </h5>
                  <p className="card-text text-gray-300 mb-3">
                    {service.subtitle}
                  </p>

                  <Link
                    to={service.link}
                    className="btn btn-warning fw-semibold px-4 py-2 rounded-3 !no-underline"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
