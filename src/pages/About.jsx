// src/pages/About.jsx
import Hero from '../components/Hero';

const About = () => {
  const aboutSections = [
    {
      id: 1,
      title: "Our Founding Vision",
      text: "Founded in 2024, London Street Hotel began with a simple vision: to provide comfortable, reliable accommodation with essential amenities for travelers. We believe that a good hotel stay should be hassle-free, clean, and convenient.",
      icon: "🏨"
    },
    {
      id: 2,
      title: "Convenient Location",
      text: "Strategically located in the city center, we offer easy access to business districts, transportation hubs, and local attractions. Our location makes us the perfect choice for both business and leisure travelers.",
      icon: "📍"
    },
    {
      id: 3,
      title: "Essential Amenities",
      text: "We focus on providing the amenities that matter most: comfortable rooms, reliable Wi-Fi, ample parking, and excellent service. Our banquet hall is perfect for events, conferences, and celebrations.",
      icon: "✅"
    },
    {
      id: 4,
      title: "Free Parking",
      text: "Enjoy complimentary on-site parking for all our guests. No need to worry about finding parking spots or paying extra fees. Our secure parking area is well-lit and easily accessible.",
      icon: "🅿️"
    },
    {
      id: 5,
      title: "Clean & Comfortable",
      text: "We maintain high standards of cleanliness and comfort. All our rooms are regularly cleaned and well-maintained to ensure a pleasant stay for every guest.",
      icon: "✨"
    },
    {
      id: 6,
      title: "Family & Business Friendly",
      text: "Whether you're traveling for work with colleagues or visiting family, our hotel accommodates all types of travelers with flexible room options and essential facilities.",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <>
      <Hero 
        title="About London Street Hotel" 
        subtitle="Simple, comfortable accommodation with essential amenities"
        showButton={false}
      />
      
      {/* Main About Content */}
      <section className="section about-main-section">
        <div className="container">
          <div className="about-intro">
            <h2>Welcome to London Street Hotel</h2>
            <p className="intro-text">
              Located in the heart of the city, London Street Hotel offers practical, comfortable accommodation 
              for business travelers, families, and event attendees. With over 18 well-appointed rooms, 
              ample parking, and a spacious banquet hall, we focus on providing essential amenities for 
              a hassle-free stay.
            </p>
            <p className="intro-text">
              Our commitment is to deliver clean, comfortable rooms with reliable service at affordable prices. 
              We pride ourselves on our convenient location, friendly staff, and commitment to guest satisfaction.
            </p>
          </div>

          {/* Key Features */}
          <div className="mission-vision">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide comfortable, affordable accommodation with essential amenities for all types of travelers.</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>To be the preferred choice for practical travelers seeking reliable accommodation in the city center.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            {aboutSections.map((section) => (
              <div key={section.id} className="feature-card">
                <div className="feature-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Stats */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">Hotel Facts</h2>
          <div className="about-stats">
            <div className="stat-item">
              <h3>18+</h3>
              <p>Comfortable Rooms</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Front Desk Service</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Banquet Capacity</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Guest Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Simplified */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Dedicated staff committed to your comfort</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-icon">👨‍💼</div>
              <h4>Management</h4>
              <p className="team-bio">Experienced professionals ensuring smooth operations and guest satisfaction.</p>
            </div>
            <div className="team-card">
              <div className="team-icon">🧹</div>
              <h4>Housekeeping</h4>
              <p className="team-bio">Dedicated team maintaining high standards of cleanliness and room comfort.</p>
            </div>
            <div className="team-card">
              <div className="team-icon">💼</div>
              <h4>Front Desk</h4>
              <p className="team-bio">Friendly staff available 24/7 to assist with your needs and inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="section location-advantage-section">
        <div className="container">
          <h2 className="section-title">Location Advantage</h2>
          <div className="location-advantages">
            <div className="advantage-card">
              <h3>✓ Central Location</h3>
              <p>Easy access to business districts, shopping areas, and tourist attractions</p>
            </div>
            <div className="advantage-card">
              <h3>✓ Public Transport</h3>
              <p>Close to bus stops, metro stations, and taxi stands for easy city exploration</p>
            </div>
            <div className="advantage-card">
              <h3>✓ Ample Parking</h3>
              <p>Complimentary on-site parking for all hotel guests and event attendees</p>
            </div>
            <div className="advantage-card">
              <h3>✓ Nearby Facilities</h3>
              <p>Restaurants, pharmacies, banks, and shopping centers within walking distance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="booking-cta">
            <h2>Experience Comfort & Convenience</h2>
            <p>
              Book your stay at London Street Hotel and enjoy comfortable accommodation 
              with all the essential amenities you need for a pleasant stay.
            </p>
            <div className="cta-buttons">
              <a href="/rooms" className="btn btn-primary">
                View Rooms
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;