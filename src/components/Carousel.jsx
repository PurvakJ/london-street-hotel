// src/components/Hero.jsx (Updated version)
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, showButton = true }) => {
  // Store current slide in sessionStorage so it persists across page navigation
  const [currentSlide, setCurrentSlide] = useState(() => {
    // Get the saved slide index from sessionStorage, default to 0
    const savedSlide = sessionStorage.getItem('carouselSlide');
    return savedSlide ? parseInt(savedSlide) : 0;
  });
  
  const images = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % images.length;
      // Save to sessionStorage
      sessionStorage.setItem('carouselSlide', nextSlide.toString());
      return nextSlide;
    });
  };

  useEffect(() => {
    // Set up automatic rotation
    const interval = setInterval(goToNextSlide, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

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