import React, { useContext } from 'react'
import './BuyNow.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const BuyNow = () => {
    const {validatephonenumber,handlePhoneNumber,
        validatepincode,handlepincode,validateusername,validateemail,handleUserName,handleClick,signup,
        click} = useContext(ShopContext);
  return (
      <div className='signup'>
        <h3>Buy Now</h3>
        <div className='input-details'>
          <input type='text' placeholder='Indian Mobile Number' onChange={handlePhoneNumber}/>{validatephonenumber ? null : <p className='invalid'>invalid number</p>}
          <input type='text' placeholder='Name' onChange={handleUserName}/>{validateusername ? null : <p className='invalid'>Minumum 3 characters</p>}
          <input type='text' placeholder='Area Pincode'  onChange={handlepincode}/>{validatepincode ? null : <p className='invalid'>invalid pincode</p>}
        </div>
        <div className='check-box'>
          <input type='checkbox' /><p>Protect My Details (optional)</p>
        </div>
        {(signup && validateemail && validatephonenumber && validatepincode && validateusername) === false ? <div className='disable-button'><p className='fill-inputs'>Details Missing Or haven't SignUp</p> <button disabled>Place Order</button></div>:<div><p className='fill-inputs'>Details Saved and Details will be automatically deleated when you try to change, Note : Double click on place order button if you purchased before.</p> <button className='apply-button' onClick={handleClick}>Place Order</button></div> }
        {signup && click && validateemail && validatephonenumber && validatepincode && validateusername  ? <div className='placed-order'><p className='placed-order-text'>Order Placed Sucefully</p><Link to='/' className='placed-order-button' style={{textDecoration : "none"}} onClick={handleClick}>Return To Home</Link></div> : null}    
      </div>
  )
}

export default BuyNow
