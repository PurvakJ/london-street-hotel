// src/pages/Contact.jsx
import Hero from '../components/Hero';
import { FaPhone,  FaMapMarkerAlt, FaClock, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "London Street Hotel",
      subtitle: "City Center, Downtown"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "85590 38506",
      subtitle: "General Inquiries"
    },
    {
      icon: <FaClock />,
      title: "Hotel Hours",
      details: "Front Desk: 24/7",
      subtitle: "Check-in: 2 PM, Check-out: 11 AM"
    }
  ];

  const socialMedia = [
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/london_street_hotel?utm_source=qr&igsh=MXV6MmJrMmFtMDM1cg%3D%3D", color: "#E4405F" }
  ];

  const departments = [
    { name: "Manager", phone: "77990 00040", note: "For room reservations" },
    { name: "Owner", phone: "60090 00020", note: "For event bookings" },
    { name: "General Inquiries", phone: "85590 38506", note: "For all other questions" },
    { name: "Email-Id", phone: "Londonstreethotelazimgarh@gmail.com", note: "Contact us there" }
  ];

  return (
    <>
      <Hero 
        title="Contact London Street Hotel" 
        subtitle="Get in touch with us for bookings and inquiries"
        showButton={false}
      />

      {/* Contact Information Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">We're here to help you with your stay</p>
          </div>

          <div className="contact-cards-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">
                  {item.icon}
                </div>
                <h3 className="contact-card-title">{item.title}</h3>
                <p className="contact-card-details">{item.details}</p>
                <p className="contact-card-subtitle">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="section contact-details-section">
        <div className="container">
          <div className="contact-layout">
            {/* Departments */}
            <div className="departments-section">
              <h3>Contact Departments</h3>
              <div className="departments-list">
                {departments.map((dept, index) => (
                  <div key={index} className="department-item">
                    <h4>{dept.name}</h4>
                    <div className="department-contact">
                      <FaPhone className="department-icon" />
                      <span className="department-phone">{dept.phone}</span>
                    </div>
                    <p className="department-note">{dept.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info & Social */}
            <div className="info-social-section">
              {/* Social Media */}
              <div className="social-media-section">
                <h3>Follow Us</h3>
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

              {/* Quick Info */}
              <div className="quick-info-section">
                <h3>Quick Information</h3>
                <div className="quick-info">
                  <div className="info-item">
                    <span className="info-icon">🅿️</span>
                    <div>
                      <strong>Parking:</strong>
                      <p>Free on-site parking available</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🎪</span>
                    <div>
                      <strong>Banquet Hall:</strong>
                      <p>Bookings available for events</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📶</span>
                    <div>
                      <strong>Wi-Fi:</strong>
                      <p>Free throughout the hotel</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">💳</span>
                    <div>
                      <strong>Payment:</strong>
                      <p>All major cards accepted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">Find us easily in the city center</p>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.3968629776437!2d76.21700197555737!3d30.140067674875645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911cd6818091369%3A0x22b7fbb6a7333533!2sLONDON%20STREET%20HOTEL!5e0!3m2!1sen!2sin!4v1769684620102!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="London Street Hotel Location on Google Maps"
              aria-label="Interactive map showing London Street Hotel location"
            />
          </div>
          
          <div className="location-details">
            <div className="location-card">
              <div className="location-icon">📍</div>
              <div>
                <h4>How to Reach Us</h4>
                <p>Located in the city center with easy access from main roads</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">🚗</div>
              <div>
                <h4>Parking</h4>
                <p>Ample free parking available on-site</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">🚌</div>
              <div>
                <h4>Public Transport</h4>
                <p>Bus stops and taxi stands nearby</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="contact-cta">
            <h2>Ready to Book Your Stay?</h2>
            <p>Contact us today to reserve your room or inquire about our banquet hall</p>
            <div className="cta-buttons">
              <a href="tel:8559038506" className="btn btn-primary">
                <FaPhone /> Call Now: 85590 38506
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about our hotel</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>What is your cancellation policy?</h4>
              <p>Free cancellation up to 24 hours before check-in. Please contact us for details.</p>
            </div>
            <div className="faq-item">
              <h4>Do you have parking?</h4>
              <p>Yes, we provide complimentary on-site parking for all our guests.</p>
            </div>
            <div className="faq-item">
              <h4>What time is check-in and check-out?</h4>
              <p>Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in may be available upon request.</p>
            </div>
            <div className="faq-item">
              <h4>Is Wi-Fi available?</h4>
              <p>Yes, free high-speed Wi-Fi is available throughout the hotel.</p>
            </div>
            <div className="faq-item">
              <h4>Can I book the banquet hall?</h4>
              <p>Yes, our banquet hall is available for events. Contact us for bookings.</p>
            </div>
            <div className="faq-item">
              <h4>Are you family-friendly?</h4>
              <p>Yes, we welcome families and can provide extra bedding if needed.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;