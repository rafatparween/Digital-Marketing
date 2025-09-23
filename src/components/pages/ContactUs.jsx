import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to your backend here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="container-fluid bg-gradient-primary min-vh-100 py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-3">Get In Touch With Us</h1>
            <p className="lead text-light opacity-75">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="border-bottom border-light border-2 opacity-50 mx-auto" style={{width: '100px'}}></div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="card shadow-lg border-0 h-100" style={{borderRadius: '20px'}}>
              <div className="card-body p-4 p-md-5">
                <h3 className="h3 fw-bold text-dark mb-4 text-center">Contact Information</h3>
                
                <div className="d-flex align-items-start mb-4 p-3 bg-light rounded-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1 text-dark">Our Office</h5>
                    <p className="text-muted mb-0 small">Los Angeles<br />California <br />United States</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4 p-3 bg-light rounded-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                    <i className="fas fa-phone text-success fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1 text-dark">Call Us</h5>
                    <p className="text-muted mb-0 small">+(1) 888-291-3869<br /><span className="text-muted"></span></p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4 p-3 bg-light rounded-3">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                    <i className="fas fa-envelope text-info fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1 text-dark">Email Us</h5>
                    <p className="text-muted mb-0 small">support@microsonicrepair.com<br />support@microsonicrepair.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start p-3 bg-light rounded-3">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3 flex-shrink-0">
                    <i className="fas fa-clock text-warning fs-5"></i>
                  </div>
                  <div>
                    <h5 className="h6 fw-bold mb-1 text-dark">Business Hours</h5>
                    <p className="text-muted mb-0 small">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <hr className="my-4" />
                
                <h5 className="h6 fw-bold mb-3 text-center text-dark">Follow Our Journey</h5>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-primary btn-sm me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-info btn-sm me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-danger btn-sm me-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card shadow-lg border-0" style={{borderRadius: '20px'}}>
              <div className="card-body p-4 p-md-5">
                <h3 className="h3 fw-bold text-dark mb-4 text-center">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="alert alert-success d-flex align-items-center border-0 shadow-sm" role="alert" style={{borderRadius: '15px'}}>
                    <i className="fas fa-check-circle me-3 fs-3 text-success"></i>
                    <div>
                      <h5 className="alert-heading mb-1 fw-bold">Message Sent Successfully!</h5>
                      <p className="mb-0">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="name" className="form-label fw-semibold text-dark">Full Name <span className="text-danger">*</span></label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="fas fa-user text-primary"></i>
                          </span>
                          <input 
                            type="text" 
                            className="form-control border-start-0 py-3" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            required 
                            style={{borderRadius: '0 10px 10px 0'}}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6 mb-4">
                        <label htmlFor="email" className="form-label fw-semibold text-dark">Email Address <span className="text-danger">*</span></label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="fas fa-envelope text-primary"></i>
                          </span>
                          <input 
                            type="email" 
                            className="form-control border-start-0 py-3" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required 
                            style={{borderRadius: '0 10px 10px 0'}}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="form-label fw-semibold text-dark">Subject <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="fas fa-tag text-primary"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control border-start-0 py-3" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          required 
                          style={{borderRadius: '0 10px 10px 0'}}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-semibold text-dark">Your Message <span className="text-danger">*</span></label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0 align-items-start pt-3">
                          <i className="fas fa-pencil-alt text-primary"></i>
                        </span>
                        <textarea 
                          className="form-control border-start-0" 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5" 
                          placeholder="Tell us more about your inquiry, project, or question..."
                          required
                          style={{borderRadius: '0 10px 10px 0', minHeight: '150px'}}
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="d-grid mt-4">
                      <button type="submit" className="btn btn-primary btn-lg py-3 fw-bold shadow-sm" style={{borderRadius: '12px', fontSize: '1.1rem'}}>
                        <i className="fas fa-paper-plane me-2"></i> Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="row mt-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card border-0 bg-white shadow-sm h-100 text-center p-4" style={{borderRadius: '15px'}}>
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                    <i className="fas fa-comments text-primary fs-3"></i>
                  </div>
                  <h5 className="fw-bold text-dark">Quick Response</h5>
                  <p className="text-muted small">We typically reply to all inquiries within 1 business day.</p>
                </div>
              </div>
              
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card border-0 bg-white shadow-sm h-100 text-center p-4" style={{borderRadius: '15px'}}>
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                    <i className="fas fa-shield-alt text-success fs-3"></i>
                  </div>
                  <h5 className="fw-bold text-dark">Privacy First</h5>
                  <p className="text-muted small">Your information is secure and never shared with third parties.</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card border-0 bg-white shadow-sm h-100 text-center p-4" style={{borderRadius: '15px'}}>
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '70px', height: '70px'}}>
                    <i className="fas fa-headset text-warning fs-3"></i>
                  </div>
                  <h5 className="fw-bold text-dark">Expert Support</h5>
                  <p className="text-muted small">Our team of experts is ready to assist with your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;