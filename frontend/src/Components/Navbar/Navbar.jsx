import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.svg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.svg'
// import { useState } from 'react'

const Navbar = () => {
    
    // const [menu, setMenu] = useState("shop");
    const {menuState, updateMenu, getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>SHOPPING ONLINE</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{updateMenu("shop")}}><Link to='/' style={{textDecoration: 'none'}}>Home</Link>{menuState==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{updateMenu("men")}}><Link to='/men' style={{textDecoration: 'none'}}>Men</Link>{menuState==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{updateMenu("women")}}><Link to='/women' style={{textDecoration: 'none'}}>Women</Link>{menuState==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{updateMenu("kid")}}><Link to='/kid' style={{textDecoration: 'none'}}>Kids</Link>{menuState==="kid"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')
                ?<button onClick={() => {
                    localStorage.removeItem('auth-token');
                    window.location.replace('/');}}>Logout</button>
                :<Link to='/login' onClick={()=>{updateMenu(null)}}><button>Login</button></Link>
                }
                <Link to='/cart' onClick={()=>{updateMenu(null)}}><img src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>{getTotalCartItem()}</div>
            </div>
        </div>
    )
}

export default Navbar 
