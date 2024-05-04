import React from 'react'
import '../Footer/footer.css';

function Footer() {
    const menus = [
        'company',
        'financials',
        'careers',
        'contact us',
        'sustainability',
        'media center',
        'privacy & legal',
        'cookie settings',
        'sitemap',
        'newsletter',
        'accessibility'
    ];

    const icons = [
        'bi-instagram',
        'bi-threads',
        'bi-facebook',
        'bi-youtube',
        'bi-twitter-x',
        'bi-tiktok',
        'bi-linkedin',
        'bi-sina-weibo',
        'bi-play-circle',
        'bi-wechat',
        'bi-discord'
    ]


    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-menu'>
                    <div className='menu menu-lg'>
                        {menus.map((menu, index) => (
                            <li key={index}>{menu}</li>
                        ))}
                    </div>
                    <div className='menu menu-sm'>
                        {menus.slice(0, 6).map((menu, index) => (
                            <li key={index}>{menu}</li>
                        ))}
                    </div>
                    <div className='menu menu-sm'>
                        {menus.slice(6).map((menu, index) => (
                            <li key={index + 6}>{menu}</li>
                        ))}
                    </div>
                    <div className='social-icons'>
                        {icons.map((icon, index) => (
                            <i key={index} class={`bi ${icon}`}></i>
                        ))}
                    </div>
                </div>
                <div className='footer-base-container'>
                    <div className='des1'>
                        <p>The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer
                            to get valid consumption and emissions information in your area.
                        </p>
                    </div>
                    <div className='copyright-details'>
                        <div className='text'>
                            <p>Copyright © 2024 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
                            <p>All rights reserved. VAT no. IT 00591801204</p>
                            <p>WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.</p>
                            <p>Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from</p>
                            <p>Volkswagen Aktiengesellschaft nor from any of its subsidiaries.</p>
                        </div>
                    </div>
                    <div className='social-container'>
                        <div className='social-icons'>
                            {icons.map((icon, index) => (
                                <i key={index} class={`bi ${icon}`}></i>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
