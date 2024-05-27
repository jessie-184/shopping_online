import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='display'>
            <div className='display-left'>
                <div className='display-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='display-img'>
                    <img className='display-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='display-right'>
                <h1>{product.name}</h1>
                <div className='display-star'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className='display-price'>
                    <div className='display-old-price'>${product.old_price}</div>
                    <div className='display-new-price'>${product.new_price}</div>
                </div>
                <div className='display-description'>
                    A lightweight, often knitted, pullover, tight-fitting shirt with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className='display-size'>
                    <h1>Select Size</h1>
                    <div className='display-size-list'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay