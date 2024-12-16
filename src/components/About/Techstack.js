import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGoogleDrive, FaChartLine, FaMailchimp } from "react-icons/fa"; // Social media and advertising
import { AiOutlineSearch } from "react-icons/ai"; // SEO/Search icon
import { SiGoogleanalytics } from "react-icons/si"; // Google Analytics
import { GiTakeMyMoney } from "react-icons/gi"; // Marketing/Advertising-related

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Replacing all the old tech stack icons with digital marketing icons */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFacebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTwitter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinkedinIn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogleDrive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineSearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMailchimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiTakeMyMoney /> {/* Represents marketing, outreach, and advertisement */}
      </Col>
    </Row>
  );
}

export default Techstack;
