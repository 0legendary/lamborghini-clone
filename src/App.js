import React from 'react';
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from "./Components/Banner/Banner";
import Slider from "./Components/Slider/Slider";
import Model from "./Components/Model/Model";
import './app.css'
function App() {
  return (
    <div>
      <Header/> 
      <div className="banner-container-main">
        <Banner/>
      </div>
      <div className="slider-container-main">
        <Slider/>
      </div>
      <div className="model-container-main">
        <Model/>
      </div>
    </div>
  );
}

export default App;
