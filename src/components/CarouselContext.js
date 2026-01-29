// src/context/CarouselContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const CarouselContext = createContext();

export const CarouselProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(() => {
    // Initialize from sessionStorage or default to 0
    const saved = sessionStorage.getItem('globalCarouselSlide');
    return saved ? parseInt(saved) : 0;
  });

  const goToNextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % 10; // Assuming 10 images
      sessionStorage.setItem('globalCarouselSlide', next.toString());
      return next;
    });
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => useContext(CarouselContext);