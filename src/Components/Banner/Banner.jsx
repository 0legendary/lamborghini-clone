import React from 'react';
import '../Banner/banner.css';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-heading'>
                <h2>First Edition</h2>
            </div>
            <div className="heading-container">
                <h1>Lamborghini</h1>
                <h1>Arena</h1>
                
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
