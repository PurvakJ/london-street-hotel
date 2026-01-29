// src/pages/Venue.jsx
import { useState } from 'react';
import Hero from '../components/Hero';

const Venue = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  // Simplified - just one banquet hall with different configurations
  const banquetHall = {
    name: "Main Banquet Hall",
    capacities: [
      { layout: "Theater Style", guests: "Up to 200 guests", description: "For conferences, seminars, and presentations" },
      { layout: "Classroom Style", guests: "Up to 120 guests", description: "For training sessions and workshops" },
      { layout: "U-Shape Style", guests: "Up to 80 guests", description: "For interactive meetings and discussions" },
      { layout: "Banquet Style", guests: "Up to 150 guests", description: "For weddings, parties, and celebrations" },
      { layout: "Cocktail Style", guests: "Up to 180 guests", description: "For networking events and receptions" }
    ],
    description: "Our spacious banquet hall is perfect for all types of events - from business meetings to family celebrations. With flexible layout options and essential amenities, we provide a comfortable space for your special occasion.",
    features: [
      "Spacious 2000 sq ft area",
      "Air conditioning & heating",
      "Basic sound system",
      "Projector & screen available",
      "Free Wi-Fi access",
      "Ample parking space",
      "Separate entrance",
      "Nearby restroom facilities"
    ],
    images: [
      "https://i.postimg.cc/0yLNq5cR/Whats_App_Image_2026_01_29_at_17_29_13.jpg",
      "https://i.postimg.cc/2SP5fjTw/Whats_App_Image_2026_01_29_at_17_29_12_(1).jpg",
      "https://i.postimg.cc/FH2KQFGx/Whats_App_Image_2026_01_29_at_14_53_27.jpg",
      "https://i.postimg.cc/nh6LtVTY/Whats_App_Image_2026_01_29_at_14_53_27_(1).jpg"
    ],
    pricing: "Affordable packages starting from $500",
    dimensions: "50ft × 40ft (2000 sq ft)",
    included: ["Tables & chairs", "Basic lighting", "Water station", "Setup assistance"],
    optional: ["Audio-visual equipment", "Decoration services", "Catering coordination", "Extra cleaning"]
  };

  const eventTypes = [
    {
      name: "Weddings",
      description: "Celebrate your special day in our spacious hall",
      icon: "💍",
      features: ["Bridal room available", "Decoration allowed", "Music system", "Flexible timings"]
    },
    {
      name: "Corporate Events",
      description: "Professional space for business meetings and conferences",
      icon: "💼",
      features: ["Projector available", "Whiteboard", "High-speed WiFi", "Business services"]
    },
    {
      name: "Birthday Parties",
      description: "Perfect venue for family celebrations",
      icon: "🎂",
      features: ["Decoration friendly", "Music allowed", "Flexible setup", "Family-friendly"]
    },
    {
      name: "Conferences",
      description: "Host seminars and workshops",
      icon: "🎤",
      features: ["Stage setup", "Microphone system", "Registration area", "Breakout space"]
    },
    {
      name: "Social Gatherings",
      description: "Reunions, anniversaries, and community events",
      icon: "👨‍👩‍👧‍👦",
      features: ["Flexible seating", "Kitchen access", "Storage space", "Extended hours"]
    }
  ];

  const services = [
    { name: "Basic Setup", icon: "🪑", description: "Tables & chairs arrangement" },
    { name: "Audio-Visual", icon: "🔊", description: "Sound system & projector rental" },
    { name: "Cleaning Service", icon: "🧹", description: "Pre and post-event cleaning" },
    { name: "Security", icon: "👮", description: "Event security personnel" },
    { name: "Parking Assistance", icon: "🅿️", description: "Parking coordination" },
    { name: "Setup Support", icon: "🛠️", description: "Assistance with event setup" }
  ];

  const galleryImages = [
    { 
      src: "https://i.postimg.cc/2SP5fjTw/Whats_App_Image_2026_01_29_at_17_29_12_(1).jpg", 
      title: "Wedding Reception", 
      desc: "Elegant wedding setup" 
    },
    { 
      src: "https://i.postimg.cc/Z51qhYjV/Whats_App_Image_2026_01_29_at_17_29_12_(2).jpg", 
      title: "Corporate Conference", 
      desc: "Professional seminar setup" 
    },
    { 
      src: "https://i.postimg.cc/Z51qhYj2/Whats_App_Image_2026_01_29_at_17_29_13_(1).jpg", 
      title: "Family Celebration", 
      desc: "Birthday party decoration" 
    },
    { 
      src: "https://i.postimg.cc/6pDQN6Yx/Whats_App_Image_2026_01_29_at_17_29_14_(1).jpg", 
      title: "Rooms", 
      desc: "Family Gathering" 
    },
    { 
      src: "https://i.postimg.cc/0yLNq5cR/Whats_App_Image_2026_01_29_at_17_29_13.jpg", 
      title: "Business Meeting", 
      desc: "Corporate training session" 
    },
    { 
      src: "https://i.postimg.cc/x1WdSjgF/Whats_App_Image_2026_01_29_at_17_29_12.jpg", 
      title: "Anniversary Party", 
      desc: "Family celebration event" 
    }
  ];

  return (
    <>
      <Hero 
        title="Banquet Hall & Events" 
        subtitle="Spacious venue for weddings, conferences, and celebrations"
        showButton={false}
      />

      {/* Banquet Hall Section */}
      <section className="section banquet-section">
        <div className="container">
          <h2 className="section-title">Our Banquet Hall</h2>
          <p className="section-subtitle">Flexible space for all your event needs</p>
          
          <div className="banquet-details-container">
            <div className="banquet-image-container">
              <img src={banquetHall.images[0]} alt={banquetHall.name} />
              <div className="banquet-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">📏</div>
                  <div>
                    <div className="highlight-label">Size</div>
                    <div className="highlight-value">{banquetHall.dimensions}</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💰</div>
                  <div>
                    <div className="highlight-label">Starting From</div>
                    <div className="highlight-value">{banquetHall.pricing}</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🅿️</div>
                  <div>
                    <div className="highlight-label">Parking</div>
                    <div className="highlight-value">Ample & Free</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="banquet-info-container">
              <h3 className="banquet-name">{banquetHall.name}</h3>
              <p className="banquet-description">{banquetHall.description}</p>
              
              <div className="banquet-features">
                <h4>Hall Features</h4>
                <div className="features-grid">
                  {banquetHall.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="banquet-capacities">
                <h4>Seating Capacities</h4>
                <div className="capacities-grid">
                  {banquetHall.capacities.map((capacity, index) => (
                    <div key={index} className="capacity-item">
                      <div className="capacity-layout">{capacity.layout}</div>
                      <div className="capacity-guests">{capacity.guests}</div>
                      <div className="capacity-desc">{capacity.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section event-types-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Types of Events We Host</h2>
            <p className="section-subtitle">Perfect venue for various occasions</p>
          </div>
          
          <div className="event-types-grid">
            {eventTypes.map((event, index) => (
              <div 
                key={index}
                className={`event-type-card ${selectedEvent === index ? 'active' : ''}`}
                onClick={() => setSelectedEvent(index)}
                onMouseEnter={() => setSelectedEvent(index)}
              >
                <div className="event-type-icon">{event.icon}</div>
                <div className="event-type-content">
                  <h4>{event.name}</h4>
                  <p>{event.description}</p>
                  <div className="event-features">
                    {event.features.map((feature, idx) => (
                      <span key={idx} className="event-feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Available Services</h2>
          <p className="section-subtitle">Essential services to make your event successful</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="included-optional">
            <div className="included-section">
              <h4>Included in Basic Package</h4>
              <div className="included-items">
                {banquetHall.included.map((item, index) => (
                  <div key={index} className="included-item">
                    <span className="check-mark">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="optional-section">
              <h4>Optional Add-ons</h4>
              <div className="optional-items">
                {banquetHall.optional.map((item, index) => (
                  <div key={index} className="optional-item">
                    <span className="plus-mark">+</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Event Gallery</h2>
          <p className="section-subtitle">Previous events hosted at our banquet hall</p>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                  <p>{image.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section booking-info-section">
        <div className="container">
          <h2 className="section-title">Booking Information</h2>
          <div className="booking-info-grid">
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h4>Availability</h4>
              <p>Check availability for your preferred dates. Weekends book fast!</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💰</div>
              <h4>Pricing</h4>
              <p>Affordable rates with flexible packages. Contact for detailed quote.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📋</div>
              <h4>Booking Process</h4>
              <p>Simple booking with deposit. Final payment before event date.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🏨</div>
              <h4>Hotel Guests</h4>
              <p>Special rates for guests staying at our hotel. Parking included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Book Our Banquet Hall</h2>
            <p>Perfect for weddings, conferences, parties, and all special occasions</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;