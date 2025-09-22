import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>The information contained here is subject to change without notice</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Micro Sonic Repair</h3>
        </Col>
        <Col md="4" className="footer-body">
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
  );
}

export default Footer;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

// const FooterSection = () => {
//   return (
//     <footer className="bg-dark text-light">
//       {/* Upper part with links */}
//       <div className="container py-5">
//         <div className="row row-cols-2 row-cols-md-5 g-4">
          
//           {/* First Column */}
//           <div className="col">
//             <ul className="list-unstyled">
//               <li className="mb-2 fw-semibold">About Us</li>
//               <li className="mb-2 text-light hover-text-muted">Contact HP</li>
//               <li className="mb-2 text-light hover-text-muted">Careers</li>
//               <li className="mb-2 text-light hover-text-muted">Investor relations</li>
//               <li className="mb-2 text-light hover-text-muted">Sustainable impact</li>
//               <li className="mb-2 text-light hover-text-muted">Diversity, Equity and Inclusion</li>
//               <li className="mb-2 text-light hover-text-muted">Press center</li>
//               <li className="mb-2 text-light hover-text-muted">The Garage</li>
//               <li className="mb-2 text-light hover-text-muted">HP Store Newsletter</li>
//               <li className="mb-2 text-light hover-text-muted">HP Printables Newsletter</li>
//             </ul>
//           </div>

//           {/* Second Column */}
//           <div className="col">
//             <ul className="list-unstyled">
//               <li className="mb-2 fw-semibold">Ways to buy</li>
//               <li className="mb-2 text-light hover-text-muted">Shop online</li>
//               <li className="mb-2 text-light hover-text-muted">Call an HP rep</li>
//               <li className="mb-2 text-light hover-text-muted">Find a reseller</li>
//               <li className="mb-2 text-light hover-text-muted">Enterprise store</li>
//               <li className="mb-2 text-light hover-text-muted">Public sector purchasing</li>
//             </ul>
//           </div>

//           {/* Third Column */}
//           <div className="col">
//             <ul className="list-unstyled">
//               <li className="mb-2 fw-semibold">Support</li>
//               <a href="/policy" className="mb-2 text-light hover-text-muted">Privacy Policy</a>
//               <li className="mb-2 text-light hover-text-muted">Support & troubleshooting</li>
//               <li className="mb-2 text-light hover-text-muted">Download drivers</li>
//               <li className="mb-2 text-light hover-text-muted">Register your product</li>
//               <li className="mb-2 text-light hover-text-muted">Authorized service providers</li>
//               <li className="mb-2 text-light hover-text-muted">Check repair status</li>
//               <li className="mb-2 text-light hover-text-muted">Fraud alert</li>
//               <li className="mb-2 text-light hover-text-muted">Security Center</li>
//             </ul>
//           </div>
        
//           {/* Fourth Column */}
//           <div className="col">
//             <ul className="list-unstyled">
//               <li className="mb-2 fw-semibold">HP Partners</li>
//               <li className="mb-2 text-light hover-text-muted">HP Amplify Partner Program</li>
//               <li className="mb-2 text-light hover-text-muted">HP Partner Portal</li>
//               <li className="mb-2 text-light hover-text-muted">Developers</li>
//             </ul>
//           </div>

//           {/* Fifth Column: Stay Connected */}
//           <div className="col">
//             <ul className="list-unstyled">
//               <li className="mb-2 fw-semibold">Stay connected</li>
//               <div className="d-flex gap-3">
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faLinkedin} />
//                 </a>
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a>
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </a>
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//                 <a href="#" className="text-light hover-text-muted fs-3">
//                   <FontAwesomeIcon icon={faTiktok} />
//                 </a>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Lower part with terms and conditions */}
//       <div className="border-top border-light py-4">
//         <div className="container d-flex flex-column flex-md-row justify-content-between text-muted">
//           <div className="d-flex flex-wrap gap-2 mb-2 mb-md-0">
//             <a href="#" className="text-light hover-text-muted">Recalls</a>
//             <a href="#" className="text-light hover-text-muted">Product recycling</a>
//             <a href="#" className="text-light hover-text-muted">Accessibility</a>
//             <a href="#" className="text-light hover-text-muted">CA Supply Chains Act</a>
//             <a href="#" className="text-light hover-text-muted">Privacy</a>
//             <a href="#" className="text-light hover-text-muted">Use of cookies</a>
//             <a href="#" className="text-light hover-text-muted">Your privacy choices</a>
//             <a href="#" className="text-light hover-text-muted">Terms of use</a>
//             <a href="#" className="text-light hover-text-muted">Limited warranty statement</a>
//             <a href="#" className="text-light hover-text-muted">Terms & conditions of sales & service</a>
//           </div>
//           <p className="text-center text-md-start">&copy;2024 HP Development Company, L.P. The information contained herein is subject to change without notice.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;
