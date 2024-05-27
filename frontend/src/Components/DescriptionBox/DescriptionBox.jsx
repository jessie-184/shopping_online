import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='description-box'>
            <div className='description-box-nav'>
                <div className='description-box-nav-box'>Description</div>
                <div className='description-box-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='description-box-details'>
                <p><span>REGULAR FIT:</span> Comfortable, easy fit through the shoulders, chest, and waist</p>
                <p><span>PERFORMANCE FABRIC:</span> This lightweight, breathable performance polyester is specially knit to keep you dry with sweat wicking properties, moving moisture away from the skin to the surface of the fabric and quickly drying.</p>
                <p><span>GOLF POLO:</span> This short sleeve golf polo is not just for the links, wear it for activities like tennis and hiking or for an evening out with friends. Dress it up or keep it casual, it is the perfect everyday polo.</p>
                <p><span>DETAILS:</span> Flat knit rib trim at collar, contrast back neck taping, three button placket and straight bottom hem with side vents for comfortable movement.</p>
            </div>
        </div>
    )
}

export default DescriptionBox;