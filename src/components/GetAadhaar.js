import React from 'react';
import './styles/GetAadhaar.css';

const GetAadhaar = () => {
  return (
    <div className="aadhaar-container">
      <h1 className="aadhaar-title">Get Your Aadhaar</h1>

      {/* Update Services Section */}
      <section className="update-section">
        <div className="update-service">
          <h2>Aadhaar Update Service</h2>

          <div className="update-box">
            <h3>Document Update</h3>
            <p>Update the documents in your Aadhaar database for better service delivery and accurate Aadhaar-based authentication.</p>
            <a href="https://myaadhaar.uidai.gov.in/update" target="_blank" rel="noopener noreferrer">
              Document update
            </a>
          </div>

          <div className="update-box">
            <h3>Check Aadhaar Update Status</h3>
            <p>Have you already sent a request to get your address or details updated in Aadhaar?</p>
            <a href="https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en" target="_blank" rel="noopener noreferrer">
              Check Aadhaar Update Status
            </a>
          </div>

          {/* Reference Section */}
          <div className="reference-section">
            <h3>References</h3>
            <ul>
              <li>
                <a href="https://appointments.uidai.gov.in/bookappointment.aspx" target="_blank" rel="noopener noreferrer">
                  Book an appointment
                </a>
              </li>
              <li>
                <a href="https://myaadhaar.uidai.gov.in/check-aadhaar" target="_blank" rel="noopener noreferrer">
                  Check Status
                </a>
              </li>
              <li>
                <a href="https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" target="_blank" rel="noopener noreferrer">
                  Download Aadhaar
                </a>
              </li>
              <li>
                <a href="https://myaadhaar.uidai.gov.in/checkStatus/en" target="_blank" rel="noopener noreferrer">
                  Check Aadhaar PVC Card Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h3 aria-label="Frequently Asked Questions">Frequently Asked Questions</h3>
        <details>
          <summary>How can I update my Aadhaar details?</summary>
          <p>You can update your Aadhaar details online via the UIDAI portal or visit your nearest Aadhaar center.</p>
        </details>
        <details>
          <summary>What documents are required for Aadhaar update?</summary>
          <p>You need proof of identity and address. Visit the UIDAI website for the full list of acceptable documents.</p>
        </details>
        <details>
          <summary>Can I download my Aadhaar online?</summary>
          <p>Yes, you can download an e-Aadhaar from the UIDAI portal using your Aadhaar number or enrolment ID.</p>
        </details>
      </section>
    </div>
  );
};

export default GetAadhaar;
