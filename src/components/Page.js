import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Page.css';

function Page() {
  const navigate = useNavigate();
  
  const goToFaceDetectionPage = () => {
    navigate('/face-detection');
  };

  const goToAadhaarUpdate = () => {
    navigate('/aadhaar-update');
  };

  const goToAadhaarServices = () => {
    navigate('/aadhaar-services');
  };

  const goToGetAadhaar = () => {
    navigate('/aadhaar-get');
  };

  return (
    <main className="homepage">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">UIDAI</div>
          <ul className="nav-links">
            <li onClick={() => navigate('/features')}>Features</li>
            <li onClick={() => navigate('/pricing')}>Pricing</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>
          <div className="nav-buttons">
            <button className="btn-primary" onClick={() => navigate('/start-trial')}>Start Free Trial</button>
            <button className="btn-secondary" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering businesses with automated solutions</h1>
          <p className="hero-subtitle">Explore features and enhance your experience</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={goToFaceDetectionPage}>Start Free Trial</button>
            <button className="btn-secondary" onClick={() => navigate('/book-demo')}>Book a Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/machine-illustration.png" alt="Automated Machine" />
        </div>
      </header>

      <section className="partners">
        <h2>Trusted by Leading Organizations</h2>
        <div className="partner-logos">
          <img src="/assets/stripe.png" alt="Stripe" />
          <img src="/assets/chase.png" alt="Chase" />
          <img src="/assets/authorize.png" alt="Authorize.net" />
          <img src="/assets/wellsfargo.png" alt="Wells Fargo" />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Face Detection</h2>
          <p>Advanced face detection for security.</p>
          <button onClick={goToFaceDetectionPage}>Learn More</button>
        </div>

        <div className="feature-card">
          <h2>Update Aadhaar</h2>
          <p>Keep your Aadhaar up-to-date.</p>
          <button onClick={goToAadhaarUpdate}>Learn More</button>
        </div>

        <div className="feature-card">
          <h2>Get Aadhaar</h2>
          <p>Access your Aadhaar details.</p>
          <button onClick={goToGetAadhaar}>Learn More</button>
        </div>

        <div className="feature-card">
          <h2>Aadhaar Services</h2>
          <p>Explore Aadhaar services.</p>
          <button onClick={goToAadhaarServices}>Learn More</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 UIDAI. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </main>
  );
}

export default Page;
