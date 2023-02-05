import React, { Component, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import wavinghand from '../../StoreDashboard/assets/wavinghand.png';

const Signinform = ({brandName}) => {

    const ShowAndHidePassword = () => {
        const [passwordType, setPasswordType] = useState("password");
        const [passwordInput, setPasswordInput] = useState("");
        const handlePasswordChange = (e) => {
            setPasswordInput(e.target.value);
        }
        const togglePassword = () => {
          if(passwordType==="password")
          {
           setPasswordType("text")
           return;
          }
          setPasswordType("password")
        }

    }
    return ( 
        <div className='flex flex-col h-screen justify-center items-center'>
             <span className='text-xl mb-3 font-bold'>Welcome back, {brandName} Sign into your <span className='text-pink-500'>your account</span><img src={wavinghand} alt="" className='inline-block w-6'/></span>
            
            <form className='w-[30vw] h-fit'>
               <div className="form-group mt-2">
               <FontAwesomeIcon icon="fa-solid fa-eye" />
                    <label for="email-address" className='block mt-2 text-xs font-bold text-gray-900 '>Email Address</label>
                    <input type="email" id="email-address" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-xs" placeholder="Your brand's email" />
                </div>
                <div className="form-group">
                    <label for="password" className='block mt-3 text-xs font-bold text-gray-900 '>Password</label>
                    <input type="text" id="password" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 sm:text-xs" placeholder="***********" />
                </div>

                <Link to="/signin" className="block mt-3 text-xs font-medium text-pink-500 justify-self-center">Forgot Password</Link>
                
                <div className="form-group flex items-center mt-3">
                    <input type="checkbox" id="remember-me"className="form-control mr-2" />
                    <label for="remember-me">Remember Me</label>
                    
                </div>
               
                </form>
                 <div className="form-group">
                    
                 <button className='px-4 py-2 mt-3 bg-pink-500 rounded-full text-white'>Sign In</button>
                     </div>
                     <span className='text-xs mt-4'>Don't have an account? <Link to={"/signup"} className='text-pink-500'>Create free account</Link></span>
        </div>
     );
}
 
export default Signinform;