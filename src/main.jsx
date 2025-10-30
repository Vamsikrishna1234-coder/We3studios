import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";


// ✅ Initialize AOS before rendering App
AOS.init({
  once: true,
  duration: 1000,
  offset: 100,
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
)
