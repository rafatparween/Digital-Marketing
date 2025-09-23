// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>The information contained here is subject to change without notice</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} Micro Sonic Repair</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://image.similarpng.com/very-thumbnail/2021/05/Round-Facebook-icon-in-flat-design-on-transparent-background-PNG.png"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-3 position-relative">
      <div className="container text-center">

        {/* Brand & Copyright */}
        <div className="mb-3 px-2" style={{ fontFamily: "monospace" }}>
          <h5 className="text-warning mb-2">Micro Sonic Repair</h5>
          <p className="text-secondary mb-0" style={{ fontSize: "18px" }}>
            © 2025 All Rights Reserved — Micro Sonic Repair boosts business growth with innovative digital marketing strategies. They focus on results and staying ahead of trends.
          </p>
        </div>

        {/* Quick Links */}
        <div className="d-flex flex-wrap justify-content-center align-items-center mb-4 gap-3" style={{ fontSize: "16px" }}>
          <Link to="/terms" className="footer-link">Terms</Link>
          <span className="text-secondary">|</span>
          <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
          <span className="text-secondary">|</span>
          {/* <Link to="/" className="footer-link">Refunds</Link>
          <span className="text-secondary">|</span> */}
          <Link to="/Disclaimer" className="footer-link">Disclaimer</Link>
          <span className="text-secondary">|</span>
          <Link to="/ContactUs" className="footer-link">Contact Us</Link>
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4">
          <a href="#" className="social-icon facebook"><FaFacebook /></a>
          <a href="#" className="social-icon twitter"><FaTwitter /></a>
          <a href="#" className="social-icon instagram"><FaInstagram /></a>
          <a href="#" className="social-icon youtube"><FaYoutube /></a>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          /* Footer Links */
          .footer-link {
            color: #bbbbbb;
            text-decoration: none;
            transition: color 0.3s, transform 0.3s;
          }
          .footer-link:hover {
            color: white;
            transform: scale(1.1);
          }

          /* Social Icons */
          .social-icon {
            color: #bbbbbb;
            font-size: 1.5rem;
            transition: transform 0.3s, color 0.3s;
          }
          .social-icon:hover {
            transform: scale(1.2) rotate(10deg);
          }
          .social-icon.facebook:hover { color: #3b5998; }
          .social-icon.twitter:hover { color: #1DA1F2; }
          .social-icon.instagram:hover { color: #E1306C; }
          .social-icon.youtube:hover { color: #FF0000; }

          /* Responsive Adjustments */
          @media (max-width: 576px) {
            .footer-link { font-size: 14px; }
            .social-icon { font-size: 1.3rem; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
