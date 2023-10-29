import React, { useContext } from 'react'
import './SignUp.css'
import { ShopContext } from '../../Context/ShopContext'

const SignUp = () => {
    const{handleEmail,handleUserName,handleEnterPassword,handleSignUp,signup,validateusername,validateemail,validatepassword} = useContext(ShopContext)
  return (
    <div className='signup'>
      <h3>SignUP</h3>
      <div className='input-details'>
        <input type='text' placeholder='Enter Username' onChange={handleUserName}/>{validateusername ? null : <p className='invalid'>Minimum 3 characters</p>}
        <input type='email' placeholder='Enter E-mail' onChange={handleEmail}/>{validateemail ? null : <p className='invalid'>inavlid mail</p>}
        <input type='password' placeholder='Create Password'  onChange={handleEnterPassword}/>{validatepassword ? null : <p className='invalid'>atleast one Uppercase,Lowercase and number</p>}
      </div>
      <div className='check-box'>
        <input type='checkbox' /><p>Protect My Details (optional)</p>
      </div>
        {(validateusername && validateemail && validatepassword) === false ? <div className='disable-button'><p className='fill-inputs'>Fill the inputs</p> <button disabled>SignUp</button></div>: <button className='apply-button' onClick={handleSignUp}>SignUp</button>}
        {signup && validateusername && validateemail && validatepassword  ? <p>Account Created Successfully</p> : null}    
    </div>
  )
}

export default SignUp
