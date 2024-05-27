import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.svg';
import insta_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pinterest_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=''/>
                <p>SHOPPING ONLINE</p>
            </div>
            <hr/>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icon-container'>
                    <img src={insta_icon} alt=''/>
                </div>
                <div className='footer-icon-container'>
                    <img src={pinterest_icon} alt=''/>
                </div>
                <div className='footer-icon-container'>
                    <img src={whatsapp_icon} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Footer