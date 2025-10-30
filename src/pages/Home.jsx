import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import BlogsSection from "../components/BlogsSection";
import TestimonialsSection from "../components/TestimonialsSection";


const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection/>
      <BlogsSection />
      <TestimonialsSection/>
    </main>
  );
};

export default Home;
