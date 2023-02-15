import React, { Component } from 'react';
import Signinform from '../../primitive/Signinform';
import CalnitaLogo  from '../../assets/CalnitaLogo.svg';
import herologo  from '../../assets/herologo.svg';
const Signin = () => {
    return ( 
        <div className='grid grid-cols-2 h-screen w-screen absolute'>
             <div className='flex flex-col h-screen justify-between '>
                <div>
                    <img src={CalnitaLogo} alt="" className="w-40 h-10 m-2 ml-10"/>
                </div>
                

                <div className='w-[40vw] mt-24 ml-12 relative'>
                    <h1 className='text-[3.75rem] font-hero leading-tight'>Where <span className='text-pink-600'>beauty brands</span>  and <span className='text-pink-500'>customers</span>  come together</h1>
                    <p className='text-md text-gray-400'>The ultimate destination for beauty brands to sell, engage and better understand their customers</p>
                </div>
                <div className='bottom-0 left-0 relative'>
                    <img src={herologo} alt=""className='h-[48vh]' />
                </div>
            </div>
            <Signinform />

        </div>
     );
}
 
export default Signin;