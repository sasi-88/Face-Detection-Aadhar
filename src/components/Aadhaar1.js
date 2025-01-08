import React from "react";
import "./styles/Aadhaar1.css";

const Aadhaar1= () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblem_of_India_%28without_motto%29.svg/1280px-Emblem_of_India_%28without_motto%29.svg.png"
          alt="Emblem"
          className="emblem"
        />
        <div className="flag">Government of India</div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Aadhaar_Logo.svg"
          alt="Aadhaar Logo"
          className="aadhaar-logo"
        />
      </div>
      <div className="card-body">
        <div className="photo"></div>
        <div className="details">
          <p className="text-line"></p>
          <p className="text-line"></p>
          <p className="text-line"></p>
          <div className="aadhaar-number">XXXX XXXX XXXX</div>
        </div>
        <img
          src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Aadhaar%20QR%20Code"
          alt="QR Code"
          className="qr-code"
        />
      </div>
    </div>
  );
};

export default Aadhaar1;
