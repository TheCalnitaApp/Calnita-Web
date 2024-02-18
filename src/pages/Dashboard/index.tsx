import React from "react";
import Dashboardbody from "../../components/content/Dashboardbody";
import ContainerLayout from "../../components/layout/Container";

import Loader from "../../components/layout/loader";
import { useSession } from "next-auth/react";

const Dashboard = () => {

  return (
        <ContainerLayout name="DASHBOARD">
          <Dashboardbody />
        </ContainerLayout>
    
  );
};

export default Dashboard;
