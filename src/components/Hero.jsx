// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, showButton = true }) => {
  // Initialize from sessionStorage or default to 0
  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = sessionStorage.getItem('carouselSlide');
    return saved ? parseInt(saved) : 0;
  });
  
  // Hotel images array
  const images = [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
  ];

  // Save current slide to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('carouselSlide', currentSlide.toString());
  }, [currentSlide]);

  // Set up automatic rotation - Changed from 5000ms to 2000ms (5s to 2s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500); // Changed from 5000 to 2000 for 2-second interval
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      {/* Background Carousel - No controls or indicators */}
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Hero Content - Overlay on carousel */}
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {showButton && (
          <Link to="/contact" className="btn">
            Book Now
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;