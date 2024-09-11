import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Hero from "./Components/Hero";
import { useEffect } from "react";
const App = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div  className="main-container poppins-regular">
      <Hero />
    </div>
  );
};

export default App;
