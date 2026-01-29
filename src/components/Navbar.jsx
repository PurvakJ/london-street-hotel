// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHotel, FaBars, FaTimes, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  const location = useLocation();

  // Instagram booking link
  const BOOKING_LINK = " https://wa.me/qr/4PHKNEIAHRWRG1";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active nav based on location
  useEffect(() => {
    setActiveNav(location.pathname);
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  const handleNavClick = (path) => {
    setActiveNav(path);
    setIsOpen(false);
    
    // Scroll to top if already on the page
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    // Open Instagram link in a new tab
    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { path: '/', label: 'Home' }, 
    { path: '/about', label: 'About' },
    { path: '/venue', label: 'Venue' },
    { path: '/room', label: 'Room' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <FaPhoneAlt className="top-bar-icon" />
              <span>85590 38506</span>
            </div>
            <div className="top-bar-item">
              <FaCalendarAlt className="top-bar-icon" />
              <span>24/7 Reservations</span>
            </div>
          </div>
          <div className="top-bar-right">
            <a 
              href={BOOKING_LINK} 
              className="top-bar-btn"
              onClick={handleBookNow}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={() => handleNavClick('/')}>
            <FaHotel className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">LONDON STREET</span>
              <span className="logo-sub">HOTEL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${activeNav === item.path ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                  <span className="nav-link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Booking Button */}
          <div className="desktop-booking">
            <a 
              href={BOOKING_LINK}
              className="btn btn-primary"
              onClick={handleBookNow}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCalendarAlt className="btn-icon" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;