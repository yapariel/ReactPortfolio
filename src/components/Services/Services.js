import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <div className="centered-container">
      <Navbar />
      <h2>SERVICES</h2>
      <Footer />
    </div>
  );
};

export default Services;
