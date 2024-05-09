import React, { useState, useEffect, useRef } from 'react';
import '../Slider/slider.css';
import Typed from 'typed.js';

import image1 from '../../Assets/revuelto.avif'
import image2 from '../../Assets/urus_s_family_chooser.avif'
import image3 from '../../Assets/family_chooser_sterrato.avif'
import image4 from '../../Assets/Urus_m.avif'
import image5 from '../../Assets/huracan_sterrato_m.avif'
import image6 from '../../Assets/revuelto_m.avif'


function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isBorderVisibleLeft, setIsBorderVisibleLeft] = useState(false);
    const [isBorderVisibleRight, setIsBorderVisibleRight] = useState(false);
    const [isMoreDetails, setIsMoreDetails] = useState(false);
    const [descriptionChanged, setDescriptionChanged] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const images = [
        { image: image2, name: "REVUELTO", des: "FROM NOW ON" },
        { image: image3, name: "URUS", des: "UNLOCK ANY ROAD" },
        { image: image1, name: "HURACÁN", des: "BEYOND THE CONCRETE" },
    ];

    useEffect(() => {
        if (descriptionChanged) {
            const descriptionElement = document.querySelector('.description');
            descriptionElement.classList.remove('slideRightToLeft');
            void descriptionElement.offsetWidth; // Trigger reflow to restart animation
            descriptionElement.classList.add('slideRightToLeft');
            setDescriptionChanged(false);
        }
    }, [descriptionChanged]);


    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [images[currentSlide].name],
            typeSpeed: 150,
            backSpeed: 0,
            showCursor: false,
            startDelay: 0,
            loop: false,
            onComplete: function (self) {
                const cursor = self.el.parentElement.querySelector('.cursor');
                if (cursor) {
                    cursor.remove();
                }
            },
        };

        if (typedRef.current) {
            // Initialize Typed instance when ref is available and component is mounted
            typedRef.current.destroy(); // Cleanup previous instance if exists
            typedRef.current = new Typed('.typed-text', options);
        }

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
        // eslint-disable-next-line
    }, [currentSlide]);




    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
        setIsBorderVisibleRight(true);
        setIsBorderVisibleLeft(false);
        setDescriptionChanged(true);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
        setIsBorderVisibleLeft(true);
        setIsBorderVisibleRight(false);
        setDescriptionChanged(true);
    };

    const handleBlur = () => {
        setIsBorderVisibleLeft(false);
        setIsBorderVisibleRight(false);
        setIsMoreDetails(false);
    };
    const handleMoreDetails = () => {
        setIsMoreDetails(true)
    };

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
            {isMobile ? (
                <div className="mobile-container">
                    {/* Models Title */}
                    <div className="models-title">
                        Models
                    </div>

                    {/* Slide for images */}
                    <div className="image-slide">
                        <img className='images'
                            src={image5}
                            alt='Lamborghini'
                        />
                        <img className='images'
                            src={image6}
                            alt='Lamborghini'
                        />
                        <img className='images'
                            src={image4}
                            alt='Lamborghini'
                        />
                    </div>

                    {/* Model name and description */}
                    <div className="model-info">
                        <h3>HURACÁN</h3>
                        <h5>BEYOND THE CONCRETE</h5>
                    </div>
                    <button className='explore-model'>Explore the models</button>
                </div>
            ) : (
                <div className='slider-container'>
                    <div className='inner-container'>
                        <div className='content'>
                            <div className='content-changer'>
                                <div className='ctrl-container'>
                                    <h2 className='heading'>Models</h2>
                                    <div className='ctrl-btns'>
                                        <button className={`icon-ctrl ${isBorderVisibleRight ? 'with-border' : ''}`} onClick={handleNextSlide} onBlur={handleBlur}>
                                            <div className='bi bi-hexagon hexagon-ctrl'></div>
                                            <div className='bi bi-hexagon-fill hexagon-ctrl'></div>
                                            <div className='bi bi-chevron-left arrow-ctrl'></div>
                                        </button>
                                        <button className={`icon-ctrl ${isBorderVisibleLeft ? 'with-border' : ''}`} onClick={handlePrevSlide} onBlur={handleBlur}>
                                            <div className='bi bi-hexagon hexagon-ctrl'></div>
                                            <div className='bi bi-hexagon-fill hexagon-ctrl'></div>
                                            <div className='bi bi-chevron-right arrow-ctrl'></div>
                                        </button>
                                    </div>
                                </div>
                                <div className='Model'>
                                    <div style={{ height: '180px' }}>
                                        <span className='reveal-text typed-text'></span>
                                    </div>

                                    <div className='description'>
                                        <span>{images[currentSlide].des}</span>
                                    </div>
                                </div>

                                <button className="extra-details" onClick={handleMoreDetails} onBlur={handleBlur}>
                                    <div className={`more-details ${isMoreDetails ? 'border-more-details' : ''}`}>
                                        <div className='icon-ctrl'>
                                            <div className='bi bi-hexagon hexagon-ctrl'></div>
                                            <div className='bi bi-hexagon-fill hexagon-ctrl'></div>
                                            <div className='bi bi-plus-lg arrow-ctrl'></div>
                                        </div>
                                        <div className='text-more'>
                                            <h5 className='text'>Explore the</h5>
                                            <h5 className='text'>model</h5>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='items'>
                            <div className='slider-item'>
                                <div className='skew'>
                                    <div className='slide-image shade'>
                                        <img src={images[currentSlide].image} alt='Car 1'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='slider-item'>
                                <div className='skew'>
                                    <div className='slide-image shade'>
                                        <img src={images[currentSlide === 2 ? 0 : currentSlide + 1].image} alt='Car 2'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='slider-item active-slide'>
                                <div className='skew'>
                                    <div className='slide-image'>
                                        <img src={images[currentSlide === 0 ? 2 : currentSlide - 1].image} alt='Car 3'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Slider;