import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5" style={{ marginTop: 30 }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white text-center py-4">
              <h1 className="display-4 fw-bold">Privacy Policy</h1>
              <p className="lead mb-0">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="card-body p-5">
              <div className="mb-4">
                <p className="lead">
                  We respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard information when 
                  you visit our website, use our services, or interact with our digital marketing campaigns.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">2. Information We Collect</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 px-0">
                    <strong>Personal Information:</strong> Name, email, phone number, billing information, etc., 
                    when you fill out forms, request services, or sign up.
                  </li>
                  <li className="list-group-item border-0 px-0">
                    <strong>Usage Data:</strong> IP address, browser type, device info, cookies, and pages visited.
                  </li>
                  <li className="list-group-item border-0 px-0">
                    <strong>Marketing Data:</strong> Preferences, feedback, and engagement with campaigns.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">3. How We Use Information</h2>
                <p>We may use collected information for:</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 px-0">Delivering and managing digital marketing services.</li>
                  <li className="list-group-item border-0 px-0">Personalizing campaigns and improving user experience.</li>
                  <li className="list-group-item border-0 px-0">Processing payments and sending invoices.</li>
                  <li className="list-group-item border-0 px-0">
                    Communicating with you about services, promotions, or updates.
                  </li>
                  <li className="list-group-item border-0 px-0">
                    Meeting legal, regulatory, and compliance obligations.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">4. Cookies & Tracking</h2>
                <p>
                  We use cookies and similar technologies to analyze website traffic, improve ads, 
                  and understand customer behavior. You may disable cookies in your browser, but 
                  some features may not work properly.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">5. Sharing of Information</h2>
                <p>We do not sell or rent your personal information. We may share data with:</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 px-0">
                    Trusted third-party partners (e.g., analytics, advertising, or payment processors).
                  </li>
                  <li className="list-group-item border-0 px-0">
                    Legal authorities when required by law.
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">6. Data Security</h2>
                <p>
                  We implement technical and organizational measures to protect personal information. 
                  However, no system is 100% secure.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have rights to access, update, delete, or restrict 
                  the use of your personal data. Contact us at [insert contact email] for requests.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to external sites. We are not responsible for the 
                  privacy practices of those websites.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">9. Changes to Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. Changes will be posted on this 
                  page with a revised effective date.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2">10. Contact Us</h2>
                <p>For any questions, contact:</p>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                        <h5 className="card-title">Email</h5>
                        <p className="card-text">support@microsonicrepair.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                        <h5 className="card-title">Phone</h5>
                        <p className="card-text">+(1) 888-291-3869</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                        <h5 className="card-title">Address</h5>
                        <p className="card-text">Los Angeles, California United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-footer bg-light text-center py-4">
              <p className="mb-0">
                Thank you for trusting us with your information. We are committed to protecting your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;