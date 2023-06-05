import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="centered-container">
      <Navbar />
      <h2>ABOUT</h2>
      <Footer />
    </div>
  );
};

export default About;
