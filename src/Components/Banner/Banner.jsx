import React from 'react';
import '../Banner/banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-heading'>
                <h2 className='sub-heading'>First Edition</h2>
            </div>
            <div className="heading-container">
                <h1 className='main-heading'>Lamborghini</h1>
                <h1 className='main-heading'>Arena</h1>

            </div>
            <div className='icon-container'>
                <div className='bi bi-hexagon hexagon'></div>
                <div className='bi bi-hexagon-fill hexagon'></div>
                <div className='bi bi-chevron-right arrow'></div>
            </div>
        </div>
    );
}

export default Banner;
