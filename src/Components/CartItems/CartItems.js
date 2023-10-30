import React, { useContext } from 'react'
import './CartItems.css'
import into from '../../Assets/into.png'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const {getTotalCartAmount,cartItems,removeFromCart,search} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <div>Products</div>  
            <div>Quantity</div>
            <div>Price</div>
            <div>Remove</div>
        </div>
        <hr/>
        {search.map((e)=>{
                if(cartItems[e.id]>0){//This id is already store or added to cart
                    return (
                        <div>
                            <div className='cartitems-format-details'>
                                <img src={e.image} className='carticon-product-icon' alt=''/>
                                <p className='cartitems-quantity'>{cartItems[e.id]}</p>
                                <p className='cartitems-price'>${(e.price*cartItems[e.id] * 50) / 100}</p>
                                <img src={into} className='cartitems-remove-icon' alt='remove-from-cart' onClick={()=>{removeFromCart(e.id)}}/>    
                            </div>
                            <hr/>
                        </div>
                    )
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='title'>Cart Totals</div>
                <div className='cartitems-total-items'>
                    <p>Shipping Fee : Free</p>
                    <hr/>
                </div>
                <div className='cartitems-total-items'>
                    <p>Total Amount : ${getTotalCartAmount()}</p>
                    <hr/>
                </div>
                <Link to='/buynow'><button className='check-out-button'>PROCEED TO CHECKOUT</button></Link>      
            </div>
    </div>
  )
}

export default CartItems
