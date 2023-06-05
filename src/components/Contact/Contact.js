import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="centered-container">
      <Navbar />
      <h2>CONTACT</h2>
      <Footer />
    </div>
  );
};

export default Contact;
