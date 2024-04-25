import React, { useEffect, useRef, useState } from 'react'
import '../Model/Model.css';
import Typed from 'typed.js';
import Revuelto from '../../Assets/revuelto_home.jpg'
import Urus from '../../Assets/urus_s_home.jpg'




function Model() {
    const [currentSlide, setCurrentSlide] = useState(false);
    const slide = [{ image: Revuelto, name: 'Revuelto', id: 'Create Your' }, { image: Urus, name: 'Urus' }]
    const [descriptionChanged, setDescriptionChanged] = useState(false);

    useEffect(() => {
        if (descriptionChanged) {
            const descriptionElement1 = document.querySelector('.sub1');
            descriptionElement1.classList.remove('sub1-animation');
            void descriptionElement1.offsetWidth;
            descriptionElement1.classList.add('sub1-animation');
            setDescriptionChanged(false);
            const descriptionElement2 = document.querySelector('.sub2');
            descriptionElement2.classList.remove('sub2-animation');
            void descriptionElement2.offsetWidth;
            descriptionElement2.classList.add('sub2-animation');
            setDescriptionChanged(false);
        }
    }, [descriptionChanged]);



    const handleChangeSlide1 = () => {
        setCurrentSlide(true);
        setDescriptionChanged(true)
    }
    const handleChangeSlide2 = () => {
        setCurrentSlide(false);
        setDescriptionChanged(true)
    }

    



    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['CONFIGURATOR'],
            typeSpeed: 50,
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

        typedRef.current = new Typed('.heading-text', options);

        return () => {
            typedRef.current.destroy();
        };
    }, [currentSlide]);




    return (
        <div className='model-container'>
            <div className='image-container'>
                <img src={slide[currentSlide ? 1 : 0].image} alt="Lamborghini" />
            </div>
            <div className='text-container'>
                <div className='mini-heading'><span className='heading-text'></span></div>
                <div className='sub-text'>
                    <div className='sub1'>{slide[0].id}</div>
                    <div className='sub2'>{slide[currentSlide ? 0 : 1].name}</div>
                </div>
                <button className='explore-icon'>
                    <div className='bi bi-hexagon hexagon-icon'></div>
                    <div className='bi bi-hexagon-fill hexagon-icon'></div>
                    <div className='bi bi-chevron-right arrow-icon'></div>
                </button>
                <div className='slide-container'>
                    <div className='slide-div hover-line1'>
                        <button className={` ${currentSlide ? "active-slide-model active-line1" : ''}`} onClick={handleChangeSlide1}>Urus</button>
                    </div>
                    <div className='slide-div hover-line2'>
                        <button className={`${!currentSlide ? "active-slide-model active-line2" : ''}`} onClick={handleChangeSlide2}>Revuelto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
