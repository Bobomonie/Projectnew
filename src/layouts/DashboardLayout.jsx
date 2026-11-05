import Sidebar from "@/components/common/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-300 mx-auto grid lg:grid-cols-10  h-screen">
      <div className="col-span-2 py-5">
        <Sidebar />
      </div>
      <div className="col-span-8 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
