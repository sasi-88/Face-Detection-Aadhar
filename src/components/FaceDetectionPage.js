import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/FaceDetectionPage.css'; // Style for face detection

function FaceDetectionPage() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(''); 
  const [mediaStream, setMediaStream] = useState(null); // Store the media stream
  const [livenessResult, setLivenessResult] = useState(null); // Store liveness result
  const [loading, setLoading] = useState(true); // Loading state for spinner
  const navigate = useNavigate();

  useEffect(() => {
    const startVideo = async () => {
      setLoading(true); // Show loading while video stream is being set up
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        videoRef.current.srcObject = stream;
        setMediaStream(stream); // Save the media stream
        setCameraActive(true);
        setError(''); // Clear any error messages
      } catch (err) {
        console.error('Error accessing camera: ', err);
        setError('Camera access denied. Please allow camera access to proceed.');
      } finally {
        setLoading(false); // Hide loading spinner when video stream is ready
      }
    };

    startVideo();

    return () => {
      stopVideo(); // Ensure video stream is stopped
    };
  }, []);

  const stopVideo = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        if (track.readyState === 'live' && track.kind === 'video') {
          track.stop();
        }
      });
      videoRef.current.srcObject = null;
      setCameraActive(false);
      setMediaStream(null);
    }
  };

  const captureImage = () => {
    if (videoRef.current && mediaStream) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0);
      const capturedImageData = canvas.toDataURL('image/png');
      setCapturedImage(capturedImageData);

      console.log('Image captured, now stopping video...');
      stopVideo(); // Stop video immediately after capture

      const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
      const csrfToken = csrfTokenElement ? csrfTokenElement.getAttribute('content') : null;

      fetch('http://localhost:8000/aadhaar/detect_liveness/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(csrfToken && { 'X-CSRFToken': csrfToken }),  // Add CSRF token only if it's available
        },
        body: JSON.stringify({ image: capturedImageData }),
      })
        .then(response => {
          if (!response.ok) {
            return response.text().then((text) => { throw new Error(text) });
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setLivenessResult(data); // Set the liveness result state here

          // Navigate to Aadhaar1.js page if liveness is detected as real
          if (data.liveness === 'real') {
            navigate('/aadhaar1'); // Ensure the correct route for Aadhaar1.js is defined
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setError('Failed to analyze liveness.');
        });
    }
  };

  return (
    <div className="face-detection-container">
      <h1>Face Detection</h1>

      {/* Show error if camera access is denied */}
      {error && <p className="error-message">{error}</p>}

      {/* Loading spinner */}
      {loading && (
        <div className="loading-spinner">
          <img src="/path/to/loading-logo.png" alt="Loading" className="loading-logo" />
        </div>
      )}

      {/* Show video feed if not loading and no captured image */}
      {!loading && !capturedImage && (
        <div className="video-box">
          <video ref={videoRef} autoPlay playsInline className="video-feed" />
        </div>
      )}

      {/* Display captured image in place of video feed */}
      {capturedImage && (
        <div className="captured-image-box">
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" className="captured-image" />
        </div>
      )}

      {/* Capture button */}
      {!capturedImage && (
        <button className="capture-button" onClick={captureImage} disabled={!cameraActive || loading}>
          Capture
        </button>
      )}

      {/* Back button */}
      <button className="back-button" onClick={() => {
        stopVideo();
        navigate(-1);
      }}>
        Back
      </button>

      {/* Display liveness result */}
      {livenessResult && (
        <div className="liveness-result-container">
          <h3>Liveness Detection Result:</h3>
          <p><strong>Liveness:</strong> {livenessResult.liveness}</p>
          <p><strong>Confidence:</strong> {livenessResult.confidence}</p>
          <p><strong>Blur Status:</strong> {livenessResult.blur_score}</p>
        </div>
      )}
    </div>
  );
}

export default FaceDetectionPage;
