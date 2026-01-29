// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  // State for room showcase carousel
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  
  // Room types showcase
  const roomTypes = [
    {
      name: "Deluxe Room",
      description: "Spacious room with premium amenities, comfortable king-sized bed, and city views.",
      features: ["King-size bed", "Free WiFi", "Air Conditioning", "Flat-screen TV"],
      image: "https://i.postimg.cc/nh6LtVTY/Whats_App_Image_2026_01_29_at_14_53_27_(1).jpg"
    },
    {
      name: "Executive Suite",
      description: "Luxurious suite with separate living area, perfect for business travelers and families.",
      features: ["Separate living area", "Work desk", "Mini-fridge", "Coffee maker"],
      image: "https://i.postimg.cc/FH2KQFGx/Whats_App_Image_2026_01_29_at_14_53_27.jpg"
    },
  ];

  // Rotate room showcase every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoomIndex(prev => (prev + 1) % roomTypes.length);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [roomTypes.length]);
  

  const nextRoom = () => {
    setCurrentRoomIndex(prev => (prev + 1) % roomTypes.length);
  };

  const prevRoom = () => {
    setCurrentRoomIndex(prev => (prev - 1 + roomTypes.length) % roomTypes.length);
  };

  return (
    <>
      <Hero 
        title="Welcome to London Street Hotel" 
        subtitle="Comfortable stays with essential amenities in the heart of the city."
      />
      
      {/* About Hotel Section */}
      <section className="section about-section">
        <div className="container">
          <h2>About London Street Hotel</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Located conveniently in the city center, London Street Hotel offers comfortable accommodation 
                with essential amenities for both business and leisure travelers. With over 18 well-appointed rooms, 
                we provide a hassle-free stay experience at an affordable price.
              </p>
              <p>
                Our focus is on delivering clean, comfortable rooms with reliable service. Whether you're visiting 
                for work, attending events, or exploring the city, our hotel serves as your perfect base with easy 
                access to local attractions and transportation.
              </p>
              <p>
                We pride ourselves on maintaining high standards of cleanliness and providing friendly, helpful 
                service to ensure your stay is pleasant and convenient. Our dedicated staff is available to assist 
                with any needs during your visit.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>18+</h3>
                <p>Comfortable Rooms</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Front Desk</p>
              </div>
              <div className="stat-item">
                <h3>Free</h3>
                <p>Parking Available</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Clean & Safe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Showcase Section */}
      <section className="section rooms-section">
        <div className="container">
          <h2>Our Accommodations</h2>
          <p className="section-subtitle">Choose from our range of comfortable rooms designed for your needs</p>
          
          <div className="room-showcase">
            <div className="room-showcase-image">
              <img 
                src={roomTypes[currentRoomIndex].image} 
                alt={roomTypes[currentRoomIndex].name}
              />
              <div className="room-nav">
                <button onClick={prevRoom} className="nav-btn">‹</button>
                <button onClick={nextRoom} className="nav-btn">›</button>
              </div>
            </div>
            <div className="room-showcase-content">
              <h3>{roomTypes[currentRoomIndex].name}</h3>
              <p>{roomTypes[currentRoomIndex].description}</p>
              <div className="room-features">
                {roomTypes[currentRoomIndex].features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <Link to="/room" className="btn btn-primary">
                View All Rooms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2>Hotel Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>18+ Comfortable Rooms</h3>
              <p>
                Choose from various room types including deluxe rooms, executive suites, and family rooms. 
                All rooms include essential amenities for a comfortable stay.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎪</div>
              <h3>Banquet Hall</h3>
              <p>
                Spacious banquet hall available for events, conferences, weddings, and parties. 
                Capacity for up to 200 guests with basic audio-visual equipment available.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🅿️</div>
              <h3>Ample Parking</h3>
              <p>
                Complimentary on-site parking available for all guests. Secure and well-lit parking area 
                with easy access to the hotel entrance.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📶</div>
              <h3>Free WiFi</h3>
              <p>
                High-speed internet access available throughout the hotel. Stay connected for work or 
                entertainment during your stay.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Friendly</h3>
              <p>
                We welcome families with children and provide extra bedding options. Convenient location 
                near family attractions and dining options.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Business Ready</h3>
              <p>
                Work desk in every room, printing facilities available at reception, and meeting spaces 
                for small business gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Booking CTA Section */}
<section className="section booking-section">
  <div className="container">
    <div className="booking-cta">
      <h2>Book Your Stay Today</h2>
      <p>
        Experience comfortable accommodation with essential amenities at London Street Hotel. 
        Perfect for business trips, family visits, or event attendance.
      </p>
      <div className="cta-buttons">
        <Link to="/room" className="btn btn-primary">
          View Rooms & Rates
        </Link>
        <Link to="/venue" className="btn btn-outline">
          View Banquet Hall
        </Link>
        <Link to="/contact" className="btn btn-secondary">
             Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;