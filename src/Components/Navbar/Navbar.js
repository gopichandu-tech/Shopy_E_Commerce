import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import hamburger from '../../Assets/hamburger.png'
import into from '../../Assets/into.png'
import cart from '../../Assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
    const [click,setClick] = useState(true);
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <img className='display-none' src={click ? hamburger : into} onClick={()=>setClick(!click)} alt='ham-into' />
        <div className='navbar-logo-title'>
            <img src={logo} alt='logo' /><div id='title'>Range</div>
        </div>
        <div className={click ? 'navbar-menu-hide' : 'navbar-menu'}>
            <div className='menu'><Link to='/' className='menu-item' style={{textDecoration : "none"}}>Home</Link></div>
            <div className='menu'><Link to='/mens' className='menu-item' style={{textDecoration : "none"}}>Mens</Link></div>
            <div className='menu'><Link to='/womens' className='menu-item' style={{textDecoration : "none"}}>Womens</Link></div>
            <div className='menu'><Link to='/jewellery' className='menu-item' style={{textDecoration : "none"}}>Jewellery</Link></div>
            <div className='menu'><Link to='/electronics' className='menu-item' style={{textDecoration : "none"}}>Electronics</Link></div>
            <div className='menu nav-bar-menu-signup'><Link to='/signup' className='menu-item' style={{textDecoration : "none"}}>Signup</Link></div>

        </div>
        <div className='navbar-signup-cart'>
            <Link to='/signup' style={{textDecoration : "none"}}><div className='signup'>Signup</div></Link>
            <Link to='/cart' style={{textDecoration : "none"}}><img src={cart} alt='cart' /></Link>
            <div className='nav-login-count'>{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
