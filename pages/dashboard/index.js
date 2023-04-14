import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import DashboardPage from "@/components/pages/dashboard";
const Dashboard = () => {
  const [ShowSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
        <div className="flex justify-between">
          <Sidebar ShowSidebar={ShowSidebar} />{" "}
        </div>
        <div className="flex-1">
          <nav className="bg-green-700 text-green-100 px-4 py-3">
            <div className="flex justify-between">
              <div className="flex gap-8">
                <div>
                  <button
                    onClick={() => setShowSidebar(!ShowSidebar)}
                    className="fixed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div>New Sharma Furniture Udhyoug</div>
              </div>

              <div>Profile</div>
            </div>
          </nav>
          <DashboardPage />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
Dashboard.auth=true
