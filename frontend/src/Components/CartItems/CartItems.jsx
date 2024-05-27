import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-items'>
            <div className='cart-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(cartItems[e.id]>0) {
                    return  <div>
                                <div className='cart-format cart-format-main'>
                                    <img src={e.image} alt='' className='cart-product-icon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cart-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <img src={remove_icon} className='cart-remove-item' onClick={() => {removeFromCart(e.id)}} alt='' />
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}
            <div className='cart-down'>
                <div className='cart-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cart-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cart-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-promo'>
                    <p>If you have a promo code, enter it here</p>
                    <div className='cart-promo-box'>
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems