import React, { Component, useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';



const SidebarButton = ({title, iconName, numOfNotif, targetLink}) => {
    const navigate = useNavigate();
    


    return (
        <Link to={targetLink} class=" flex items-center  w-full h-12 px-3 mt-2 active:bg-pink-500 active:text-white rounded hover:bg-gray-200">
					<div className='flex flex-row'>
                        {iconName}
                        
					<span class="ml-3 mt-1 text-xs font-medium">{title}</span>
                    </div>
                    <div className= 'ml-8 flex items-center justify-center rounded-full bg-red-600 w-3 h-3 text-white text-sm'>
                        <p>{numOfNotif}</p>
                    </div>
                    
				</Link>
      );
}
 
export default SidebarButton;