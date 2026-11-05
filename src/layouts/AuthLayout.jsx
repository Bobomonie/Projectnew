import React from "react";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-300 mx-auto grid lg:grid-cols-2 gap-20 p-5 h-screen">


      <div>
        <Outlet />
      </div>


      <div className="flex flex-col justify-center items-center bg-blue-700 rounded-2xl shadow relative p-5 overflow-hidden">
        <div className="grow"></div>

        <Link
          to={"/dashboard"}
          className=" rounded-2xl text-sm px-3 py-0.5 bg-white/10 text-white flex justify-center items-center"
        >
          Continue without sign in
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
