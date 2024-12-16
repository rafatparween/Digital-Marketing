import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          About <strong className="purple">Digital Marketing Solutions</strong>
        </h1>

        <p style={{ color: "white" }}>
          At <span className="purple">Micro Sonic</span>, we specialize in providing innovative <span className="purple">Digital Marketing Solutions</span> that help businesses grow, engage with their audience, and achieve measurable results online. 
          Our suite of products is designed to streamline digital marketing efforts through advanced tools in areas like SEO, Social Media Marketing, Paid Ads, and Analytics.
          <br />
          We focus on delivering cutting-edge marketing automation, content management, and real-time analytics solutions that empower businesses to stay ahead in the digital landscape.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?semt=ais_hybrid"
              isBlog={false}
              title="Marketing Automation"
              description="Our Marketing Automation tool streamlines campaigns, saving time while optimizing performance. With seamless integration, businesses can set up automated workflows that increase engagement and conversions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.digitalauthority.me/wp-content/uploads/2024/04/shutterstock_2262377637-1.jpg"
              isBlog={false}
              title="Social Media Engagement"
              description="A platform that helps businesses manage and track social media campaigns across multiple platforms, analyzing performance, audience engagement, and ROI to drive better results."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA="
              isBlog={false}
              title="SEO Optimizer"
              description="Our SEO tool helps businesses optimize their websites for higher rankings on search engines. It provides keyword tracking, on-page SEO recommendations, and backlink analysis to improve organic visibility."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://digitalcatalyst.in/blog/wp-content/uploads/2021/01/how-does-digital-marketing-help-business-1.jpg"
              isBlog={false}
              title="Analytics Dashboard"
              description="This dashboard provides real-time insights into the performance of marketing campaigns. From social media to paid ads, businesses can track KPIs, conversions, and customer engagement in one unified view."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://bicads.com/blog/wp-content/uploads/2024/02/Linked-article.webp"
              isBlog={false}
              title="Ad Campaign Tracker"
              description="Our platform allows businesses to create, track, and optimize paid advertising campaigns. With detailed performance analytics, businesses can fine-tune their campaigns for maximum ROI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.licdn.com/dms/image/D5612AQFCQl2tXDBBDA/article-cover_image-shrink_600_2000/0/1687101803246?e=2147483647&v=beta&t=u2oGdCFQJNWKUYLkK2FI1hhX4GKqs1Zt_d-7PZlDgr8"
              isBlog={false}
              title="Content Marketing Platform"
              description="A platform designed to help businesses plan, create, and distribute content effectively. Track performance across various channels and fine-tune strategies to maximize audience engagement and conversions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
