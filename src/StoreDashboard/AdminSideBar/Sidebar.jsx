import React, { Component } from 'react'
import { customersIcon, dashboardIcon, logoutIcon, messagesIcon, ordersIcon, reviewsIcon, paymentIcon, settingsIcon, productsIcon } from '../assets/icons';
import SidebarButton from '../Components/sidebarButtons';
const Sidebar = () => {

	
    return ( 
        
	<div class="flex flex-col items-center justify-between  w-48 fixed  h-[90vh] bottom-0 left-0 overflow-hidden text-gray-700 bg-white">
		
		<div class="w-full px-2">
			<div class="flex flex-col items-center w-full mt-3 ">
				
				<SidebarButton iconName={ dashboardIcon } title="Dashboard" targetLink="/dashboard"></SidebarButton>
				<SidebarButton iconName={ productsIcon } title="Products" targetLink="/products"></SidebarButton>
				<SidebarButton iconName={ ordersIcon } title="Orders" targetLink='/orders'></SidebarButton>
				<SidebarButton iconName={ messagesIcon } title="Messages" targetLink="/messages"></SidebarButton>
				<SidebarButton iconName={ reviewsIcon } title="Reviews" targetLink="/reviews"></SidebarButton>
				<SidebarButton iconName={ paymentIcon } title="Payments" targetLink="/payments"></SidebarButton>
				<SidebarButton iconName={ customersIcon } title="Customers" targetLink="/customers"></SidebarButton>
				
				
			</div>
			
				
			
		</div>
		 <div class="flex flex-col items-center w-full mt-3 px-2" >
		<SidebarButton iconName={ settingsIcon } title="Settings"></SidebarButton>
				<SidebarButton iconName={ logoutIcon } title="Logout"></SidebarButton>
		</div> 
				
	</div>
	
     );
}
 
export default Sidebar;