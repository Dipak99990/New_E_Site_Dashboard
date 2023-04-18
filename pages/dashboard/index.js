import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import DashboardPage from "@/components/pages/dashboard";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "@/components/DropdownLinks";
const Dashboard = () => {
  const [ShowSidebar, setShowSidebar] = useState(true);
  const { data: session } = useSession();
  const handlelogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
       
        <div className="flex-1">
         
          <DashboardPage />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
Dashboard.auth = true;
