import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wavinghand from '../../StoreDashboard/assets/wavinghand.png';


const Signupform = () => {
    return ( 
        <div className='flex flex-col h-screen justify-center items-center'>
           
        
            <form className='w-[30vw] h-fit'>
                <span className='text-xl mb-3 font-bold'>Join us today <img src={wavinghand} alt="" className='inline-block w-6'/> </span>
                <div className="form-group">
                    <label for="brand-name"className='block mt-3 text-xs font-bold text-gray-900' >Brand Name</label>
                    <input type="text" id="brand-name" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full  sm:text-xs" placeholder="What is your brand name?" />
                </div>
                <div className="form-group">
                    <label for="email-address" className='block mt-3 text-xs font-bold text-gray-900'>Email Address</label>
                    <input type="text" id="email-address" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full sm:text-xs" placeholder="Your brand's email" />
                </div>
                <div className="form-group">
                    <label for="password" className='block mt-3 text-xs font-bold text-gray-900'>Password</label>
                    <input type="text"  id="password" className="form-control block w-full p-2 text-gray-900 border border-gray-300 rounded-full sm:text-xs" placeholder="***********" />
                </div>
                <div className="form-group flex items-center">
                    <input type="checkbox" id="remember-me" className="form-control mr-2" />
                    <label for="remember-me">Remember</label>
                    
                </div>
                <span className='text-xs'>Have an account? <Link to={"/signin"} className='text-pink-500'>Sign In</Link></span>
                
                </form>
                <div className="form-group">
                    
                    <button className='px-4 py-2 mt-3 bg-pink-500 rounded-full text-white'>Create Account</button>
                     </div>

                        

                     <span className='text-xs mt-4'>By Clicking Create account you agree with our <a href="" className='text-pink-500'> Terms and <br />
                     Conditions</a> and <a href="" className='text-pink-500'>Privacy Policy</a> </span>

                     
        </div>
     );
}
 
export default Signupform;