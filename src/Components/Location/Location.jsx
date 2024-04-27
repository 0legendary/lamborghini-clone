import React, { useState } from 'react'
import '../Location/location.css';
import img from '../../Assets/533702.jpg'
function Location() {
  const [isBorderVisible, setIsBorderVisible] = useState(false);

  const handlelocationClick = () => {
    setIsBorderVisible(true);
  };

  const handleBlur = () => {
    setIsBorderVisible(false);
  };

  return (
    <div className='location-container'>
      <div className='bg-image'>
        <img src={img} alt="" />
      </div>
      <div className='text-container'>
        <div className='text1'>
          Dealer Locator
        </div>
        <div className='text2'>
          <div>Find Your</div>
          <div>COUNTRY DEALER</div>
        </div>
        <div className='loc-icon'>
          <div className={`more-details ${isBorderVisible ? 'border-more-details' : ''}`}>
            <button className='icon-ctrl' onClick={handlelocationClick} onBlur={handleBlur}>
              <div className='bi bi-hexagon hexagon-ctrl'></div>
              <div className='bi bi-hexagon-fill hexagon-ctrl'></div>
              <div className='bi bi-chevron-right arrow-icon'></div>
            </button>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Location
