import React from 'react';
import './styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About UIDAI and Aadhaar</h1>

      {/* UIDAI Section */}
      <section className="about-section">
        <h2>What is UIDAI?</h2>
        <p>
          The Unique Identification Authority of India (UIDAI) is a statutory authority
          established by the Government of India under the provisions of the Aadhaar Act,
          2016. UIDAI was created to issue Unique Identification numbers (UID), named as
          "Aadhaar", to all residents of India.
        </p>
      </section>

      {/* Aadhaar Section */}
      <section className="about-section">
        <h2>What is Aadhaar?</h2>
        <p>
          Aadhaar is a 12-digit unique identity number that can be obtained by residents
          of India, based on their biometric and demographic data. The data is collected
          by the UIDAI and serves as a proof of identity and address, anywhere in India.
        </p>
      </section>

      {/* Statistics Section */}
      <section className="about-section stats-section">
        <h2>Key Statistics</h2>
        <ul>
          <li>
            <strong>Total Aadhaar Holders:</strong> Over 1.3 billion people
          </li>
          <li>
            <strong>Percentage of Population with Aadhaar:</strong> Approximately 99% of
            the adult population
          </li>
          <li>
            <strong>Enrollment Centers:</strong> Over 30,000 Aadhaar enrollment centers
            across the country
          </li>
          <li>
            <strong>Aadhaar Linked to Government Schemes:</strong> Over 400 welfare
            schemes linked to Aadhaar
          </li>
          <li>
            <strong>Daily Authentications:</strong> 40 million+ Aadhaar authentications
            are done daily
          </li>
          <li>
            <strong>Gender Breakdown:</strong> 51% male, 49% female Aadhaar holders
          </li>
          <li>
            <strong>Biometric Accuracy:</strong> Highly secure with a biometric accuracy
            rate of 99.76%
          </li>
        </ul>
      </section>

      {/* Why Aadhaar Section */}
      <section className="about-section">
        <h2>Why Aadhaar?</h2>
        <p>
          Aadhaar enables people to establish their identity anywhere in India, which
          improves access to financial services, government schemes, and other benefits.
          It is a key component in the "Digital India" initiative and helps in reducing
          duplication and fraud in various government schemes.
        </p>
      </section>

      {/* Impact Section */}
      <section className="about-section">
        <h2>Impact of Aadhaar</h2>
        <p>
          Aadhaar has had a significant impact in various sectors such as banking,
          healthcare, and public distribution systems. It has helped streamline processes,
          reduce corruption, and increase transparency. For example, linking Aadhaar to
          bank accounts has enabled direct benefit transfers (DBT) for government
          subsidies, reducing leakages.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 UIDAI. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{' '}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default AboutPage;
