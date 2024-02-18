import React, { useState } from "react";
import { Modal } from "flowbite-react";

import SidebarButton from "../organisms/sidebarButtons";


import LogoutModal from "../Modals/logoutmodal";
import { signOut } from "next-auth/react";
import SidebarDropdown from "../organisms/sidebarDropdown";
import {  customersIcon,
  dashboardIcon,
  logoutIcon,
  messagesIcon,
  ordersIcon,
  paymentIcon,
  productsIcon,
  reviewsIcon,
  analysisIcon,
  settingsIcon,
  AddProductIcon, } from "../../assets/icons";

const Sidebar = () => {
  const [logoutModal, setLogoutModal] = useState<string | undefined>();
  const props = { logoutModal, setLogoutModal };

  const KillSessionFxn = () => {
    signOut({
      callbackUrl: "/", //
    });
  };
  return (
    <div className="relative layoutSidebar flex flex-col col-auto w-[14vw] overflow-hidden text-gray-700 bg-white">
      <div className=" border-b-2 w-full h-[8vh] border-gray-100 item-center flex justify-center p-3">
        <img src="/sidebarlogo.svg" alt="logo" />
      </div>

      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-8 gap-4 ">
          <SidebarButton
            icon={dashboardIcon}
            title="Dashboard"
            targetLink="/Dashboard"
          ></SidebarButton>
          
          <SidebarButton
            icon={analysisIcon}
            title="Analytics"
            targetLink="/Analytics"
          ></SidebarButton>
          <SidebarButton
            icon={ordersIcon}
            title="Orders"
            targetLink="/Orders"
          ></SidebarButton>
          {/* <SidebarButton
            icon={messagesIcon}
            title="Messages"
            targetLink="/Messages"
          ></SidebarButton> */}
          <SidebarDropdown
            icon={productsIcon}
            title="Products"
            targetLink="/Products"
            dropdownText={["Add Product"]}
            dropdownIcon={[AddProductIcon]}
            droppdownLinks={["/Products/add-product"]}
          ></SidebarDropdown>
          <SidebarButton
            icon={reviewsIcon}
            title="Reviews"
            targetLink="/Reviews"
            
          ></SidebarButton>
          <SidebarButton
            icon={paymentIcon}
            title="Payments"
            targetLink="/Payments"
          ></SidebarButton>
          <SidebarButton
            icon={customersIcon}
            title="Customers"
            targetLink="/Customers"
          ></SidebarButton>
        </div>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center w-full mb-3 px-2">
        <SidebarButton
          icon={settingsIcon}
          title="Settings"
          targetLink="/Settings"
        ></SidebarButton>
        <div
          onClick={() => props.setLogoutModal("default")}
          className=" flex items-center  w-4/5 h-12 px-3 mt-2 active:bg-mainPink active:text-white rounded-2xl hover:bg-gray-200"
        >
          <div className="flex flex-row w-3/4 gap-3 items-center ">
            {logoutIcon}

            <span className="text-[18px] font-light">Logout</span>
          </div>
        </div>
        <Modal
          show={props.logoutModal === "default"}
          onClose={() => props.setLogoutModal(undefined)}
        >
          <LogoutModal
            closeFxn={() => props.setLogoutModal(undefined)}
            logoutFxn={KillSessionFxn}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
