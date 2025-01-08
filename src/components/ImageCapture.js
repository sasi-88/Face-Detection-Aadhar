import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/ImageCapture.css'; // Style for the Image Capture Page

function ImageCapture() {
  const location = useLocation();
  const navigate = useNavigate();
  const { capturedImage } = location.state || {};

  // Handle image blur with a CSS class instead of inline styles
  const applyBlur = (imgSrc) => {
    return (
      <div className="image-box">
        <img src={imgSrc} alt="Captured" className="blurred-image" />
        <p>Blurred Image</p>
      </div>
    );
  };

  // If no captured image is found, return a fallback message
  if (!capturedImage) {
    return <div className="error-message">No image captured. Please try again.</div>;
  }

  return (
    <div className="image-capture-container">
      <h1>Captured Image</h1>
      <div className="image-boxes">
        <div className="image-box">
          <img src={capturedImage} alt="Captured" />
          <p>Original Image</p>
        </div>
        {applyBlur(capturedImage)}
      </div>

      {/* Optional: Add download button */}
      <a href={capturedImage} download="captured-image.png">
        <button className="download-button">Download Image</button>
      </a>

      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default ImageCapture;
