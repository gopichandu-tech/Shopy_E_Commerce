import React from 'react'
import './Footer.css'
import twitter_icon from '../../Assets/twitter_icon.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import facebook_icon from '../../Assets/facebook_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.webp'

const Footer = () => {
  return (
    <div className='main'>
        <div className='footer'>
            <div className='footer-menu'>
                <div>Home</div>
                <div>Popular</div>
                <div>Contact</div>
                <div>Products</div>
            </div>
            <div className='footer-icons'>
                <img src={twitter_icon} alt='twitter_icon'/>
                <img src={instagram_icon} alt='instagram_icon'/>
                <img src={facebook_icon} alt='facebook_icon'/>
                <img src={whatsapp_icon} alt='whatsapp_icon'/>
            </div>
            <div className='footer-tagline'>
                <input type='e-mail' placeholder='Enter E-Mail' />
                <div className='subscribe-button'>Subscribe</div>
            </div>
        </div>
    </div> 
  )
}

export default Footer
