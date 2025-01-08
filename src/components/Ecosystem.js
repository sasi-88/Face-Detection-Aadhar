import React from 'react';
import './styles/Ecosystem.css';

const Ecosystem = () => {
  return (
    <div className="ecosystem-container">
      <div className="section">
        <h3>UIDAI Ecosystem</h3>
      </div>

      <div className="section">
        <h3>Enrolment Ecosystem</h3>
        <ul>
          <li><a href="#">Registrars</a></li>
          <li><a href="#">Enrolment Agencies</a></li>
          <li><a href="#">Aadhaar Seva Kendra</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Enrolment Documents</h3>
        <ul>
          <li><a href="#">Sanction Orders</a></li>
          <li><a href="#">Aadhaar Saturation Report, PDF 0.448 MB</a></li>
          <li><a href="#">Terms of Engagement (TOE)</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Authentication Ecosystem</h3>
        <ul>
          <li><a href="#">Operation Model</a></li>
          <li><a href="#">Authentication Requesting Agency</a></li>
          <li><a href="#">Authentication Service Agencies</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Authentication Devices & Documents</h3>
        <ul>
          <li><a href="#">Biometric Devices</a></li>
          <li><a href="#">QR Code Reader</a></li>
          <li><a href="#">About Aadhaar Paperless Offline e-kyc</a></li>
          <li><a href="#">Developer Section</a></li>
          <li><a href="#">Authentication Documents</a></li>
        </ul>
      </div>

      <div className="section">
        <h3>Training, Testing & Certification Ecosystem</h3>
        <ul>
          <li><a href="#">Training, Testing and Certification Policy 2023 Doc Type: PDF Size: 1.1MB</a></li>
          <li><a href="#">SOP for training, testing and certification of E&U Operators</a></li>
          <li><a href="#">SOP for Training, Testing and Certification of Authentication Operators Doc Type: PDF Size: 2 MB</a></li>
          <li><a href="#">Annual Training Calendar 2023-24 Doc. Type:- PDF, Doc. Size:- 1.6 M</a></li>
          <li><a href="#">Corrigendum to Standard Operating Procedure (SOP) for training, testing and certification of Enrolment and Update (E&U) Operators. PDF, 0.7 MB</a></li>
          <li><a href="#">Annual Training Calendar 2024-25</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Ecosystem;
