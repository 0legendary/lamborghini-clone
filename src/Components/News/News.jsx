import React from 'react'
import '../News/news.css';
import ConverImg from '../../Assets/cover.png'
import urus from '../../Assets/urus_se_cover.jpg'
import imola from '../../Assets/sc63_imola_cover.png'

function News() {
    const Models = [
        { img: urus, date: '24 April 2024', tag: 'Urus SE', des: 'Lamborgini Urus SE: The first plug-in hybrid super suv' },
        { img: imola, date: '24 April 2024', tag: 'Motorsport', des: 'the debut of Lamborgini sc63 at imola' }
    ]
    return (
        <div className='news-container'>
            <div className='news-content'>
                <div className='sub-heading' >
                    <h3>News</h3>
                    <h2 style={{fontSize: '1rem'}}>Lamborghini World</h2>
                </div>
                <div className='cover-img'>
                    <img src={ConverImg} alt="coverImg" />
                </div>
                <div className='date-info'>
                    <div className='date'>
                        <p>26 April 2024</p>
                    </div>
                    <div className='model-info'>
                        <p>Urus se</p>
                    </div>
                </div>
                <div className='about-model'>
                    <div className='model-container'>
                        <div className='text-description'>
                            <p>Lamborghini Urus se makes world premier at <br /> auto china beijin 2024</p>
                        </div>
                        <button className='btn-read-more'>
                            Read More
                        </button>
                    </div>
                    <div className='description'>
                        <p>World premiere of the Lamborghini Urus SE: the first PHEV (Plug-in Hybrid Electric Vehicle) Super SUV</p>
                    </div>
                </div>
                <div className='diff-container'>
                    {Models.map((data) => (
                        <div className='diff-models'>
                            <div className='image'>
                                <img src={data.img} alt="Car" />
                            </div>
                            <div className='models-text-container'>
                                <div className='text'>
                                    <p>{data.date}</p>
                                </div>
                                <div className='model-info'>
                                    <p>{data.tag}</p>
                                </div>
                                <div className='text-description' style={{ marginTop: '2rem' }}>
                                    <p>{data.des}</p>
                                </div>
                                <button className='btn-read-more'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='discover-more-btn'>
                    <button className='discover-btn'>
                        See All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News
