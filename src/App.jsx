import { useState } from 'react'
import './App.css'
import Header from './components/Header' 
import HeroImage from './components/HeroSection'
import FooterImage from './components/FooterImage'
import ScrollToTop from './components/ScrollToTop'  // ensure import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import InteriorDesign from './pages/InteriorDesign'
import ExteriorDesign from './pages/ExteriorDesign'
import Visualisation from './pages/3D Visualisation'
import MotionGraphics from './pages/MotionGraphics'
import Planings from './pages/2D Planings'
import Portfolio from './pages/Portfolio'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <Router>
      <ScrollToTop behavior="smooth" />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/services/interior-design" element={<InteriorDesign/>}/>
            <Route path="/services/exterior-design" element={<ExteriorDesign/>}/>
            <Route path="/services/visualization-rendering" element={<Visualisation/>}/>
            <Route path="/services/motion-graphics" element={<MotionGraphics/>}/>
            <Route path="/services/working-drawings" element={<Planings/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
      </main>
      <FooterImage />
    </Router>
  );
}

export default App;