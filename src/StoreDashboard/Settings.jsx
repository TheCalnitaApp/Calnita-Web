import React, { Component } from 'react'
import Settingsbody from './PageContent/Settingsbody';
import Navbar from './AdminSideBar/Navbar';

const Settings = () => {
    return ( 
        <div className=' w-[100%] h-[150vh] block bg-gray-100 '>
        <Settingsbody />
        <Navbar />
    </div>
     );
}
 
export default Settings;