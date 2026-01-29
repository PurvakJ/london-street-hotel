// src/App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Room';
import Venue from './pages/Venue';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';

import './App.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        
        {/* Public Routes - Show Navbar & Footer */}
        <Routes>
          {/* Routes with Navbar & Footer */}
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/room" element={<Menu />} />
                <Route path="/venue" element={<Venue />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Catch all - redirect to home */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </>
          } />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;