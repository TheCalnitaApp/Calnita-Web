import React, { Component } from 'react';
import Statrow from '../primitive/Statrow';
import Sellprod from '../primitive/Sellingprodrow';
import Reviewrow from '../primitive/Reviewrow';
import Sidebar from '../AdminSideBar/Sidebar';
import Navbar from '../AdminSideBar/Navbar';
const Dashboardbody = () => {
    return ( 
        <React.Fragment>
             <div className='flex-col flex w-[75vw] absolute   h-max left-[256px]'>
                <Sidebar />
               
            <div className='relative top-[15vh]'>
               <Statrow />
           <Sellprod />
           <Reviewrow /> 
            </div>
            
        </div>
        </React.Fragment>
       
     );
}
 
export default Dashboardbody;