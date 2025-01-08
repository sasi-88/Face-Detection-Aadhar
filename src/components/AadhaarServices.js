import React, { useState } from 'react';
import './styles/AadhaarServices.css';

const AadhaarServices = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Toggle FAQ answers visibility
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="aadhaar-container">
      <h1 className="aadhaar-title">Aadhaar Services</h1>

      {/* Aadhaar Update Section */}
      <section className="service-section">
        <div className="service-box">
          <h2>Aadhaar Update Service</h2>

          <div className="update-box">
            <h3>Document Update</h3>
            <p>
              Update the documents in your Aadhaar database for better service
              delivery and accurate Aadhaar-based authentication.
            </p>
            <a
              href="https://myaadhaar.uidai.gov.in/du/en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Document Update
            </a>
          </div>

          <div className="update-box">
            <h3>Check Aadhaar Update Status</h3>
            <p>
              Have you already sent a request to get your address or details
              updated in Aadhaar?
            </p>
            <a
              href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Aadhaar Update Status
            </a>
          </div>

          <div className="update-box">
            <h3>Verify Registered mobile or email id</h3>
            <p>
              You can verify your email address and mobile number that has been
              declared at the time of enrolment or during latest Aadhaar detail
              update.
            </p>
            <a
              href="https://myaadhaar.uidai.gov.in/verify-email-mobile/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify Email/Mobile Number
            </a>
          </div>

          <div className="update-box">
            <h3>Retrieve Aadhaar</h3>
            <p>
              Lost your Aadhaar number? Retrieve it here on your registered
              mobile.
            </p>
            <a
              href="https://myaadhaar.uidai.gov.in/retrieve-eid-uid/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Retrieve Lost or Forgotten EID/UID
            </a>
          </div>

          <div className="update-box">
            <h3>Generate VID</h3>
            <p>
              VID is a temporary, revocable 16-digit random number mapped with
              the Aadhaar number. It can be used in lieu of Aadhaar number
              whenever authentication or e-KYC services are performed. It is not
              possible to derive Aadhaar number from VID.
            </p>
            <a
              href="https://myaadhaar.uidai.gov.in/genericGenerateOrRetriveVID/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual ID (VID) Generator
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-section">
        <div className="faq-box">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {[
              { question: 'Virtual ID (VID)', answer: 'What is the expiry period of VID?' },
              { question: 'mAadhaar FAQs', answer: 'Details about mAadhaar FAQs will be shown here.' },
              { question: 'Aadhaar Authentication History', answer: 'Details about Aadhaar Authentication History will be shown here.' },
              { question: 'Secure QR Code Reader (beta)', answer: 'Details about Secure QR Code Reader (beta) will be shown here.' },
              { question: 'Aadhaar Paperless Offline e-KYC', answer: 'Details about Aadhaar Paperless Offline e-KYC will be shown here.' },
            ].map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeFAQ === index}
                >
                  {faq.question}
                </button>
                <div 
                  className={`faq-answer ${activeFAQ === index ? 'show' : ''}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
            <a href="#" className="faq-view-all">View All</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AadhaarServices;
