import React, { useRef, useEffect, useState } from "react";
import testimonial1 from "../assets/images/Team3.jpg";
import testimonial2 from "../assets/images/Team3.jpg";
import testimonial3 from "../assets/images/Team3.jpg";
import testimonial4 from "../assets/images/Team3.jpg";
import testimonial5 from "../assets/images/Team3.jpg";
import testimonial6 from "../assets/images/Team3.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Modern Living",
    quote:
      "We3Studios transformed our workspace into a creative oasis. The attention to detail and design expertise is unmatched.",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Founder, GreenSpaces",
    quote:
      "Their 3D visualizations helped us fully understand the project before construction. Truly innovative and professional team.",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Architect, Urban Designs",
    quote:
      "Working with We3Studios was seamless. Their designs perfectly balanced aesthetics and functionality.",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Interior Designer",
    quote:
      "Every project is executed with precision and creativity. Highly recommend their team.",
    image: testimonial4,
  },
  {
    id: 5,
    name: "David Brown",
    role: "Developer, Urban Estates",
    quote:
      "Professional and innovative approach to modern design. Truly impressed.",
    image: testimonial5,
  },
  {
    id: 6,
    name: "Sophia Wilson",
    role: "Project Manager",
    quote:
      "Amazing experience! The attention to detail and dedication is remarkable.",
    image: testimonial6,
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate testimonials for seamless scrolling
  const items = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.style.display = "flex";
    container.style.gap = "24px";
    container.style.overflowX = "hidden";

    Array.from(container.children).forEach((child) => {
      child.style.flex = "0 0 auto";
      child.style.minWidth = "320px";
      child.style.boxSizing = "border-box";
    });

    let lastTime = performance.now();
    const speed = 0.25; // pixels per ms

    const step = (t) => {
      if (!pausedRef.current) {
        const dt = t - lastTime;
        lastTime = t;

        posRef.current += speed * dt;

        const half = container.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;

        container.scrollLeft = posRef.current;
      } else {
        lastTime = t; // reset time to avoid jump
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Pause/resume on hover/touch
  const handlePointerEnter = () => {
    pausedRef.current = true;
    setIsHovering(true);
  };
  const handlePointerLeave = () => {
    pausedRef.current = false;
    setIsHovering(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Hear directly from our clients about their experience working with
            We3Studios.
          </p>
        </div>

        {/* Scrolling strip */}
        <div
          ref={scrollRef}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          className="pt-6 pb-6"
          aria-label="Testimonials carousel"
        >
          {items.map((tst, i) => (
            <article
              key={i}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-transform duration-300"
              style={{ minWidth: 320, maxWidth: 420 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={tst.image}
                  alt={tst.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500 flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{tst.name}</h3>
                  <p className="text-yellow-500 text-sm">{tst.role}</p>
                </div>
              </div>

              <p className="text-gray-300 italic leading-relaxed">"{tst.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
