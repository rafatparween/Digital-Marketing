import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LET US <span className="purple"> BOOST  </span> YOUR BUSINESS
            </h1>
            <p className="home-about-body">
            At our digital marketing agency, we specialize in helping businesses grow online by leveraging the power of digital marketing strategies.
            😊
              <br />
              <br /> With a passion for innovation, we use tools like Google Ads,Facebook Ads Analytics to help your business reach its goals faster and more efficiently.
      
              <i>
                <b className="purple">   Ready to grow your brand? Let’s connect and discuss how we can take your business to the next level!
                </b>
              </i>
              <br />
              <br />
              We believe that digital marketing is not just about running ads or creating content—it's about building a lasting relationship with your audience. Our services include:
 &nbsp;
              <i>
                <b className="purple">Search Engine Optimization</b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              We help you rank higher on search engines, increasing your website’s visibility and driving organic traffic to your business.
             
              with <b className="purple">Pay-Per-Click Advertising</b> and
              <i>
                <b className="purple">
                  {" "}
                  Social Media Marketing 
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> We’re active on all</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
