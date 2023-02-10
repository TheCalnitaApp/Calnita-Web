
import React, { Component } from 'react';
import Sidebar from '../AdminSideBar/Sidebar';
import SettingsCard from '../primitive/SettingsCard';


const Settingsbody = () => {
    return ( 
        <div>
            <React.Fragment>
        <div className='flex-col flex w-[75vw] absolute  h-max left-[256px]'>
        <Sidebar />
          
       <div className='relative top-[15vh]'>
        <SettingsCard />
       </div>
       
   </div>
   </React.Fragment>
        </div>
     );
}
 
export default Settingsbody;