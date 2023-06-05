import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import ParticlesBg from "particles-bg";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import Typed from "react-typed";

const Dashboard = () => {
  useEffect(() => {
    document.title = "<ARIEL/>";
  }, []);

  return (
    <div className="dashboard-page">
      <Navbar />
      <Container className="content-mid">
        <Row>
          <Col>
            <Typed
              className="typed-text"
              strings={["Hi! I'm John Ariel Yap", "Full Stack Developer"]}
              typeSpeed={90}
              backSpeed={50}
              loop
            />
            <p className="description">
              Im Passionate about all things in IT and eager to explore every
              corner of the industry, I am a student of Information Technology
              who is always on the lookout for new and exciting challenges. With
              a love for developments, graphics, and anything that brings
              technology to life.
            </p>
          </Col>
        </Row>
        <Row>
          <div className="social-icons">
            <a
              href="https://github.com/yapariel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/arielyap.fb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/arielyap69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/yaparieljohn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          {/* <Button
            variant="primary"
            className="custom-button"
            // href="mailto:your-email@example.com"
          >
            Contact Me
          </Button> */}
        </Row>
      </Container>
      <ParticlesBg type="cobweb" bg={true} color="#808080" num={70} />
    </div>
  );
};

export default Dashboard;
