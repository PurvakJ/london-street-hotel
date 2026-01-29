import { FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Rooms", path: "/room" },
    { name: "Banquet Hall", path: "/venue" },
    { name: "Amenities", path: "/amenities" },
    { name: "Gallery", path: "/venue" },
    { name: "Contact", path: "/contact" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "46Q9+V83, Bhagal, Haryana 136034" },
    { icon: <FaPhone />, text: "85590 38506" }
  ];

  const socialMedia = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/london_street_hotel?utm_source=qr&igsh=MXV6MmJrMmFtMDM1cg%3D%3D", color: "#E4405F" }
  ];

  const hotelServices = [
    "18+ Comfortable Rooms",
    "Spacious Banquet Hall",
    "Ample Parking",
    "Free Wi-Fi",
    "24/7 Front Desk",
    "Family Friendly",
    "Business Ready",
    "Near Transport"
  ];

  return (
    <footer className="footer">
      <div className="container">

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Hotel Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <h2 className="logo-text">London Street<span>Hotel</span></h2>
              </div>
              <p className="footer-description">
                Comfortable accommodation with essential amenities in the city center. 
                Perfect for business, family visits, and events.
              </p>
              <div className="awards-badges">
                <div className="award-badge">🏆 Clean & Safe</div>
                <div className="award-badge">⭐ Guest Recommended</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <span className="contact-icon">{info.icon}</span>
                    <span className="contact-text">{info.text}</span>
                  </div>
                ))}
              </div>
              <div className="operating-hours">
                <h4>Hotel Hours</h4>
                <p>Check-in: <span>2:00 PM</span></p>
                <p>Check-out: <span>11:00 AM</span></p>
                <p>Front Desk: <span>24/7</span></p>
              </div>
            </div>

            {/* Services & Social */}
            <div className="footer-column">
              <h3 className="footer-title">Hotel Features</h3>
              <div className="services-list">
                {hotelServices.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>
              
              <div className="social-section">
                <h4 className="services-title">Follow Us</h4>
                <div className="social-icons">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ backgroundColor: social.color }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} London Street Hotel. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
              <a href="/contact">Contact Us</a>
            </div>
            <div className="payment-methods">
              <span className="payment-text">Payment Methods:</span>
              <div className="payment-icons">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">💲</span>
                <span className="payment-icon">🏧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;