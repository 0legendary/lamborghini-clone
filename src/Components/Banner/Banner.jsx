import React from 'react';
import '../Banner/banner.css';
import img from '../../Assets/hero_desk.avif'
function Banner() {
    return (
        <div className='banner'>
             <div className='banner-img-wrapper'>
                <img src={img} alt="car" className='banner-img' />
            </div>
            <div className='banner-text'>
                <div className='banner-heading'>
                    <h2>Dare To live more</h2>
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
        </div>
    );
}

export default Banner;
