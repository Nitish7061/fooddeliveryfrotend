import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets /frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className='login-popup-litle'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='password' required />

            </div>
            <button>{currState==="Sing up"?"Create account":"Login"}</button>
             <div className='login-popup-condition'>
              <input type="checkbox" required/>
              <p>By continuing i agree to the term of use & privacy policy
                
            </p>
              {currState==="Login"?<p>Create a new account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
              :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
             </div>

        </form>

    </div>
  )
}

export default LoginPopup