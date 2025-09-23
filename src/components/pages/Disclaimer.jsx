import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Disclaimer = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Header Section */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-3">Disclaimer</h1>
              <p className="lead text-muted">Important information about our services and policies</p>
              <div className="border-bottom border-primary mx-auto" style={{width: '100px'}}></div>
            </div>

            {/* Disclaimer Content */}
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-4 p-md-5">
                {/* No Guaranteed Results */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-exclamation-triangle text-danger fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">No Guaranteed Results</h3>
                  </div>
                  <p className="text-muted mb-0">
                    We provide digital marketing services to help improve your online presence. However, we do not guarantee specific results, as outcomes depend on many factors like competition, algorithms, and third-party platforms (e.g., Google Ads, Facebook Ads).
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Use of Information */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-shield-alt text-info fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Use of Information</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Any data you share with us is used only to provide our services, communicate with you, and improve your experience. We do not sell or rent your personal information.
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Third-Party Links & Services */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-external-link-alt text-warning fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Third-Party Links & Services</h3>
                  </div>
                  <p className="text-muted mb-0">
                    Our website or campaigns may include links to third-party websites. We are not responsible for the content or privacy practices of those websites.
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Limitation of Liability */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-secondary bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-balance-scale text-secondary fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Limitation of Liability</h3>
                  </div>
                  <p className="text-muted mb-0">
                    We are not liable for losses or damages caused by third-party platforms, technical issues, or delays beyond our control.
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Professional Advice */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-graduation-cap text-success fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Professional Advice</h3>
                  </div>
                  <p className="text-muted mb-0">
                    The information provided on this website or through our services is for general guidance only and should not be considered professional, legal, or financial advice.
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Changes to Services or Policies */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-sync-alt text-primary fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Changes to Services or Policies</h3>
                  </div>
                  <p className="text-muted mb-0">
                    We may update our services, Privacy Policy, Terms, or this Disclaimer at any time. Updates will be posted on our website.
                  </p>
                </div>
                
                <hr className="my-4" />
                
                {/* Contact Section */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-dark bg-opacity-10 p-2 rounded-circle me-3">
                      <i className="fas fa-envelope text-dark fs-4"></i>
                    </div>
                    <h3 className="h4 mb-0 text-dark">Contact</h3>
                  </div>
                  <p className="text-muted mb-3">
                    For questions about this Disclaimer, please contact:
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-envelope text-primary me-2"></i>
                        <span>Email: <a href="mailto:support@microsonicrepair.com" className="text-decoration-none">support@microsonicrepair.com</a></span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-phone text-primary me-2"></i>
                        <span>Phone:+(1) 888-291-3869</span>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        <span>Address:Los Angeles, California United States</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Note */}
            <div className="text-center mt-4">
              <p className="text-muted small">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;