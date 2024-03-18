import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="bg-loginBg bg-left-bottom bg-no-repeat py-[64px]">
      <div className="container ">
        <div className="w-[410px] mx-auto  p-8 shadow-card">
          <div className=" border-b-4 flex justify-around border-argent rounded-sm pb-2 mb-5  ">
            <NavLink to="/users/login" className=" text-aswadBlack font-bold ">
              Kirish
            </NavLink>
            <NavLink to="/users/register" className="text-argent  font-bold">
              Ro’yxatdan o’tish
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
