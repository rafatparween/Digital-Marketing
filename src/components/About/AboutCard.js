import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to <span className="purple">Micro Sonic</span>, a leading company in the field of{" "}
            <span className="purple">Digital Marketing</span>. At Micro Sonic, we specialize in driving business growth through innovative and data-driven marketing strategies. Our services include Search Engine Optimization (SEO), Social Media Marketing, Paid Advertising Campaigns, and Content Marketing, all designed to enhance brand visibility and engagement across digital platforms.
            <br />
            With a strong focus on delivering measurable results, we leverage the power of digital tools to help businesses achieve their marketing goals and connect with their target audience effectively.
            <br />
            Our team at Micro Sonic is passionate about staying ahead of the curve, constantly exploring new trends and technologies to ensure that our clients' marketing strategies remain innovative and impactful.
            <br />
            <br />
            Some of the core services we provide include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            In addition to my technical skills, I also have a passion for{" "}
            <span className="purple">Digital Marketing</span>. Some of my
            interests and activities in this field include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> SEO (Search Engine Optimization)
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media Marketing (Facebook, Instagram)
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Marketing & Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Ads Campaigns
            </li>
            <li className="about-activity">
              <ImPointRight /> Email Marketing (Mailchimp)
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
