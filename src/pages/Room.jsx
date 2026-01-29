// src/pages/Rooms.jsx
import { useState } from 'react';
import Hero from '../components/Hero';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);
  
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      description: "A comfortable room with essential amenities, perfect for solo travelers or couples on a budget. Features a cozy double bed and basic facilities.",
      price: "₹1200",
      perNight: "per night",
      size: "250 sq ft",
      capacity: "2 Adults",
      bed: "1 Double Bed",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Work Desk", "Tea/Coffee Maker"],
      image: "https://i.postimg.cc/6pDQN6Yx/Whats_App_Image_2026_01_29_at_17_29_14_(1).jpg",
      images: [
        "https://i.postimg.cc/6pDQN6Yx/Whats_App_Image_2026_01_29_at_17_29_14_(1).jpg",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Spacious room with premium amenities, comfortable king-sized bed, and city views. Ideal for business travelers or couples seeking extra comfort.",
      price: "₹1400",
      perNight: "per night",
      size: "300 sq ft",
      capacity: "2 Adults",
      bed: "1 King Bed",
      amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Private Bathroom", "Work Desk", "Mini-fridge", "Coffee Maker", "Sitting Area"],
      image: "https://i.postimg.cc/nh6LtVTY/Whats_App_Image_2026_01_29_at_14_53_27_(1).jpg",
      images: [
        "https://i.postimg.cc/nh6LtVTY/Whats_App_Image_2026_01_29_at_14_53_27_(1).jpg",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ]
    },
  ];

  const roomFeatures = [
    { icon: "🛏️", feature: "Comfortable Bedding", description: "Clean, comfortable beds with quality linens" },
    { icon: "🚿", feature: "Private Bathroom", description: "En-suite bathroom with shower and basic toiletries" },
    { icon: "📺", feature: "TV", description: "Flat-screen TV with cable channels" },
    { icon: "📶", feature: "Free Wi-Fi", description: "High-speed internet access" },
    { icon: "❄️", feature: "Air Conditioning", description: "Individual climate control" },
    { icon: "🔌", feature: "Power Outlets", description: "Multiple charging points" },
    { icon: "☕", feature: "Tea/Coffee Maker", description: "Electric kettle with supplies" },
    { icon: "🪞", feature: "Mirror", description: "Full-length mirror" },
    { icon: "👔", feature: "Closet Space", description: "Adequate storage for luggage" },
    { icon: "🔒", feature: "Secure Access", description: "Electronic key card system" },
    { icon: "🧹", feature: "Daily Cleaning", description: "Regular housekeeping service" },
    { icon: "🪟", feature: "Windows", description: "Windows with blackout curtains" }
  ];

  return (
    <>
      <Hero 
        title="Rooms & Accommodation" 
        subtitle="Comfortable rooms with essential amenities for your perfect stay"
        showButton={false}
      />

      {/* Rooms Showcase Section */}
      <section className="section rooms-showcase-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Rooms</h2>
            <p className="section-subtitle">Choose the perfect room for your stay</p>
          </div>

          {/* Room Navigation */}
          <div className="room-type-navigation">
            {roomTypes.map((room, index) => (
              <button
                key={room.id}
                className={`room-type-tab ${selectedRoom === index ? 'active' : ''}`}
                onClick={() => setSelectedRoom(index)}
              >
                <span className="room-tab-icon">🏨</span>
                <span className="room-tab-name">{room.name}</span>
                <span className="room-tab-price">From {room.price}</span>
              </button>
            ))}
          </div>

          {/* Selected Room Details */}
          <div className="room-details-container">
            <div className="room-gallery">
              <div className="main-room-image">
                <img src={roomTypes[selectedRoom].image} alt={roomTypes[selectedRoom].name} />
              </div>
              <div className="room-thumbnails">
                {roomTypes[selectedRoom].images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`thumbnail ${img === roomTypes[selectedRoom].image ? 'active' : ''}`}
                    onClick={() => {
                      const updatedRoom = {...roomTypes[selectedRoom]};
                      updatedRoom.image = img;
                      const newRoomTypes = [...roomTypes];
                      newRoomTypes[selectedRoom] = updatedRoom;
                    }}
                  >
                    <img src={img} alt={`${roomTypes[selectedRoom].name} view ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="room-info-container">
              <div className="room-header">
                <h3 className="room-name">{roomTypes[selectedRoom].name}</h3>
                <div className="room-price">
                  <span className="price-amount">{roomTypes[selectedRoom].price}</span>
                  <span className="price-period">{roomTypes[selectedRoom].perNight}</span>
                </div>
              </div>
              
              <p className="room-description">{roomTypes[selectedRoom].description}</p>
              
              <div className="room-specs">
                <div className="spec-item">
                  <span className="spec-icon">📏</span>
                  <div>
                    <span className="spec-label">Size</span>
                    <span className="spec-value">{roomTypes[selectedRoom].size}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">👥</span>
                  <div>
                    <span className="spec-label">Capacity</span>
                    <span className="spec-value">{roomTypes[selectedRoom].capacity}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">🛏️</span>
                  <div>
                    <span className="spec-label">Bed Type</span>
                    <span className="spec-value">{roomTypes[selectedRoom].bed}</span>
                  </div>
                </div>
              </div>
              
              <div className="room-amenities">
                <h4>Room Amenities</h4>
                <div className="amenities-grid">
                  {roomTypes[selectedRoom].amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <span className="amenity-check">✓</span>
                      <span className="amenity-text">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="room-booking">
                <a href="/contact" className="btn btn-primary">
                  Book This Room
                </a>
                <a href="tel:8559038506" className="btn btn-outline">
                  Call to Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Features Section */}
      <section className="section room-features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Standard Room Features</h2>
            <p className="section-subtitle">All rooms include these essential amenities</p>
          </div>

          <div className="room-features-grid">
            {roomFeatures.map((feature, index) => (
              <div key={index} className="room-feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.feature}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section booking-info-section">
        <div className="container">
          <div className="booking-info-grid">
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h4>Check-in & Check-out</h4>
              <p>Check-in: 2:00 PM<br />Check-out: 11:00 AM</p>
              <p className="info-note">Early check-in/late check-out may be available</p>
            </div>
            <div className="info-card">
              <div className="info-icon">👶</div>
              <h4>Children Policy</h4>
              <p>Children under 12 stay free<br />Extra bedding available on request</p>
              <p className="info-note">Family rooms recommended for families</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚭</div>
              <h4>Hotel Policies</h4>
              <p>Non-smoking rooms<br />Pets not allowed</p>
              <p className="info-note">ID proof required at check-in</p>
            </div>
            <div className="info-card">
              <div className="info-icon">💳</div>
              <h4>Payment Options</h4>
              <p>Credit/Debit Cards<br />Cash on arrival</p>
              <p className="info-note">Deposit may be required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section rooms-cta-section">
        <div className="container">
          <div className="rooms-cta">
            <h2>Ready to Book Your Room?</h2>
            <p>Contact us today to reserve your perfect room at London Street Hotel</p>
            <div className="cta-buttons">
              <a href="tel:8559038506" className="btn btn-primary">
                Call Now: 85590 38506
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact for Booking
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;