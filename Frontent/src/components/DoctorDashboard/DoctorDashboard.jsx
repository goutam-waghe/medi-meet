import React from "react";
import { RiStethoscopeLine, RiArrowLeftBoxFill } from "@remixicon/react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BackToHome from "../commans/BackToHome";
const DoctorDashboard = () => {
  return (
    <div className="flex text-white flex-col py-10 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 gap-7">
      <BackToHome/>
      <div className="flex gap-2 items-center text-4xl font-black">
        {" "}
        <div>
          <RiStethoscopeLine className="w-10 h-10" />
        </div>{" "}
        <h1>Doctor Dashboard</h1>
      </div>
      <div className="flex gap-4">
        <div className="bg-gray-600/20 w-[350px] text-md px-4 py-10 flex gap-4 flex-col rounded-xl self-start">
          <div>
            <NavLink
              to="earnings"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-600/40 border-l-4 border-blue-500"
                    : "hover:bg-gray-700/40"
                }`
              }
            >
              Earnings
            </NavLink>
          </div>
          <div>
            <NavLink
              to="appointments"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-600/40 border-l-4 border-blue-500"
                    : "hover:bg-gray-700/40"
                }`
              }
            >
              Appointments
            </NavLink>
          </div>
          <div>
            <NavLink
              to="availability"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-600/40 border-l-4 border-blue-500"
                    : "hover:bg-gray-700/40"
                }`
              }
            >
              Availablity
            </NavLink>
          </div>
        </div>
        <div className="bg-gray-600/20  rounded-xl w-full h-[500px]">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
