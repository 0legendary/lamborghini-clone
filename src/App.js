import React, { useEffect, useState } from 'react';


import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from "./Components/Banner/Banner";
import Slider from "./Components/Slider/Slider";
import Model from "./Components/Model/Model";
import './app.css'
import Location from './Components/Location/Location';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import Sticky from './Components/Sticky/Sticky';
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Update isMobile state based on screen width
    };

    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);
  return (
    <div>
      <Header />
      <div className="banner-container-main">
        <Banner />
      </div>
      <div className="slider-container-main">
        <Slider />
      </div>
      {!isMobile &&(
        <div className="model-container-main">
          <Model />
        </div>
      )}
      <div className="location-container-main">
        <Location />
      </div>
      <div className="news-container-main">
        <News />
      </div>
      <div className="footer-container-main">
        <Footer />
      </div>
      <div className="sticky-container-main">
        <Sticky />
      </div>

    </div>
  );
}

export default App;
