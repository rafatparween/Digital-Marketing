import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Terms = () => {
  return (
    <div className="container py-5" style={{ marginTop: 30 }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-lg">
           <div className="card-header bg-gradient-primary text-black text-center py-4">
  <div className="d-flex align-items-center justify-content-center mb-3">
    <i className="fas fa-file-contract fa-3x me-3"></i>
    <h1 className="display-4 fw-bold mb-0">Terms of Service</h1>
  </div>
  <p className="lead mb-0">Effective Date: {new Date().toLocaleDateString()}</p>
  <p className="h5 mt-2">Company Name:Micro Sonic Repair</p>
</div>
            <div className="card-body p-4 p-md-5">
              <div className="alert alert-info border-0 mb-5">
                <div className="d-flex">
                  <i className="fas fa-info-circle fa-2x me-3 text-info"></i>
                  <p className="mb-0">
                    <strong>Important:</strong> By accessing or using our website and services, 
                    you agree to these Terms of Service. Please read them carefully.
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">1</span>
                  Acceptance of Terms
                </h2>
                <p className="fs-5">
                  By accessing or using our website and services, you agree to these Terms of Service. 
                  If you do not agree, please discontinue use immediately.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">2</span>
                  Services Provided
                </h2>
                <p className="fs-5">
                  Micro Sonic Repair provides digital marketing, SEO, advertising management, 
                  web development, and related services as described on our website.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">3</span>
                  User Responsibilities
                </h2>
                <p className="fs-5 mb-3">You agree to:</p>
                <div className="ps-4">
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                    <p className="mb-1">Provide accurate and updated information when requested.</p>
                  </div>
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                    <p className="mb-1">Not use our services for illegal, harmful, or misleading purposes.</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-success mt-1 me-3"></i>
                    <p className="mb-0">Maintain confidentiality of account login details.</p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">4</span>
                  Payments & Billing
                </h2>
                <div className="ps-4">
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-dollar-sign text-warning mt-1 me-3"></i>
                    <p className="mb-1">
                      Fees for services are outlined in contracts, invoices, or proposals.
                    </p>
                  </div>
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-dollar-sign text-warning mt-1 me-3"></i>
                    <p className="mb-1">
                      Payments are due as per agreed terms (e.g., monthly, upfront).
                    </p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-dollar-sign text-warning mt-1 me-3"></i>
                    <p className="mb-0">
                      Failure to pay may result in suspension of services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">5</span>
                  Intellectual Property
                </h2>
                <p className="fs-5">
                  All content, materials, logos, and strategies created by us remain the property 
                  of Micro Sonic Repair unless otherwise agreed in writing.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">6</span>
                  Limitation of Liability
                </h2>
                <p className="fs-5 mb-3">We are not liable for:</p>
                <div className="ps-4">
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-exclamation-triangle text-warning mt-1 me-3"></i>
                    <p className="mb-1">
                      Losses due to third-party platforms (e.g., Google Ads, Facebook Ads).
                    </p>
                  </div>
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-exclamation-triangle text-warning mt-1 me-3"></i>
                    <p className="mb-1">
                      Technical issues, downtime, or delays beyond our control.
                    </p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-exclamation-triangle text-warning mt-1 me-3"></i>
                    <p className="mb-0">
                      Indirect, incidental, or consequential damages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">7</span>
                  Termination
                </h2>
                <p className="fs-5">
                  We may suspend or terminate services at our discretion if you breach these Terms 
                  or misuse our services.
                </p>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">8</span>
                  Disclaimers
                </h2>
                <div className="ps-4">
                  <div className="d-flex align-items-start mb-2">
                    <i className="fas fa-shield-alt text-info mt-1 me-3"></i>
                    <p className="mb-1">
                      We do not guarantee specific results from digital marketing campaigns.
                    </p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-shield-alt text-info mt-1 me-3"></i>
                    <p className="mb-0">
                      Performance may vary depending on competition, algorithms, and third-party platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">9</span>
                  Governing Law
                </h2>
                <p className="fs-5">
                  These Terms shall be governed by the laws of [Your Jurisdiction].
                </p>
              </div>

              <div className="mb-4">
                <h2 className="h3 mb-3 text-primary border-bottom pb-2 d-flex align-items-center">
                  <span className="badge bg-primary me-3">10</span>
                  Contact Us
                </h2>
                <p className="fs-5 mb-4">For questions about these Terms, contact:</p>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                        <h5 className="card-title">Email</h5>
                        <p className="card-text">support@microsonicrepair.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
                        <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                        <h5 className="card-title">Phone</h5>
                        <p className="card-text">+(1) 888-291-3869</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm h-100">
                      <div className="card-body text-center p-4">
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
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0">
                  <i className="fas fa-clock text-primary me-2"></i>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <button className="btn btn-primary">
                  <i className="fas fa-download me-2"></i>
                  Download Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;