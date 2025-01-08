import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Page from './components/Page';
import AboutPage from './components/AboutPage';
import HomeLogin from './components/HomeLogin';
import FaceDetectionPage from './components/FaceDetectionPage';
import ImageCapture from './components/ImageCapture';
import AadhaarUpdate from './components/AadhaarUpdate';
import AadhaarServices from './components/AadhaarServices';
import GetAadhaar from './components/GetAadhaar';
import Aadhaar1 from './components/Aadhaar1';
import Ecosystem from './components/Ecosystem';

// Layout Component for Routes
const Layout = () => {
  const location = useLocation(); // Detects the current route
  const hideNavBarRoutes = ['/']; // Routes where NavBar should be hidden

  return (
    <>
      {/* Conditionally render NavBar */}
      {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/page" element={<Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/face-detection" element={<FaceDetectionPage />} />
        <Route path="/image-capture" element={<ImageCapture />} />
        <Route path="/aadhaar-update" element={<AadhaarUpdate />} />
        <Route path="/aadhaar-services" element={<AadhaarServices />} />
        <Route path="/aadhaar-get" element={<GetAadhaar />} />
        <Route path="/aadhaar1" element={<Aadhaar1 />} />
        <Route path="ecosystem" element={<Ecosystem />} />
      </Routes>
    </>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading effect
    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Run only on initial render

  return (
    <>
      {loading ? (
        <div className="loading-background">
          <div className="loading-spinner">
            <img src="/path/to/loading-logo.png" alt="Loading" />
          </div>
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
};

export default App;
