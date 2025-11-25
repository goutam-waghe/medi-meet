import React, { useState } from "react";
import {
  RiCalendar2Line,
  RiCloseLargeFill,
  RiHome2Line,
  RiMenu2Fill,
  RiMoneyCnyBoxLine,
  RiProfileLine,
  RiTimeLine,
} from "@remixicon/react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../../redux/slice/userSlice.js"



const UserLayout = () => {
  const {user} = useSelector(state => state.user)
  const [OpenSideBar, SetOpenSideBar] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function logoutHandler()
  {
    dispatch(logout())
    navigate("/login")
  }
  return (
    <div className="flex h-screen relative overflow-hidden">

      {/* Sidebar */}
      <div
        className={`
      top-0 left-0 h-screen shadow-md z-20 
      bg-white text-black
      w-[280px] 
      transform transition-transform duration-300
      ${OpenSideBar ? "translate-x-0 absolute md:relative" : "-translate-x-full fixed "}
    `}
      >
        {/* Toggle Button */}
        <div
          onClick={() => SetOpenSideBar(!OpenSideBar)}
          className="bg-blue-600 p-2 rounded-xl inline-block fixed top-6 right-[-50px] z-30"
        >
          {OpenSideBar ? (
            <RiCloseLargeFill className="text-white" />
          ) : (
            <RiMenu2Fill className="text-white" />
          )}
        </div>

        {/* Sidebar Content */}
        <div className="p-6 text-black ">
          <div className="text-2xl font-semibold mb-5">MediMeet</div>

          <div className="mb-4 pb-2 border-b-1 border-gray-300">
            <p className="text-sm opacity-70">Logged in as</p>
            <h1 className="text-xl font-bold text-blue-600">{user.name}</h1>
            <div className="text-sm opacity-80 px-2 py-1 bg-green-300 rounded inline-block">Patient</div>
          </div>

          <div className="grid gap-6 text-black">
            <NavLink
            end
            to={"/user-dashboard"}
              className={({ isActive }) =>
                `p-3 rounded-md transition-all flex gap-3 items-center ${
                  isActive
                    ? " bg-blue-500 text-white"
                    : "text-black hover:bg-blue-100"
                }`
              } 
            >
              <RiHome2Line /> <span>Discover doctor</span>
            </NavLink>
            <NavLink
            end
            to={"/user-dashboard/mybookings"}
              className={({ isActive }) =>
                `p-3 rounded-md transition-all flex gap-3 items-center ${
                  isActive
                    ? " bg-blue-500 text-white"
                    : "text-black hover:bg-blue-100"
                }`
              }
            >
              <RiTimeLine /> <span>My Bookings</span>
            </NavLink>

           

            <NavLink
            end
            to={"/user-dashboard/profile"}
              className={({ isActive }) =>
                `p-3 rounded-md transition-all flex gap-3 items-center ${
                  isActive
                    ? " bg-blue-500 text-white"
                    : "text-black hover:bg-blue-100"
                }`
              }
            >
              <RiProfileLine /> <span>Profile</span>
            </NavLink>
          </div>

          <div onClick={logoutHandler} className="mt-10 p-2 text-center text-red-500 cursor-pointer">
            Logout
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="w-full  overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
