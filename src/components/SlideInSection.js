import React, { useRef, useState, useEffect } from 'react';
import './styles/Page.css'; // Ensure this is the correct path

function SlideInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`feature-card ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default SlideInSection;
