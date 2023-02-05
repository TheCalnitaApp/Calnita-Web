import React, { Component } from 'react'
import Sidebar from '../AdminSideBar/Sidebar';
import Allproductscard from '../primitive/Allproductscard';
import Productbar from '../primitive/Productbar';

const Productsbody = () => {
    return (  
        <React.Fragment>
             <div className='flex-col flex w-[75vw] absolute h-max left-[256px]'>
               <Sidebar />
               
            <div className='flex flex-col relative top-[19vh] justify-center items-center '>
              <Productbar />
              <Allproductscard />
            </div>
            
        </div>
        </React.Fragment>
    );
}
 
export default Productsbody;