import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive offers via email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type='email' placeholder='abc@example.com'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter