import React, { use } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  function dashboardHandler() {
    if (user.role == "user") {
      navigate("/user-dashboard");
    } else if (user.role == "doctor") {
      navigate("/doctor-dashboard");
    } else if (user.role == "admin") {
      navigate("/admin-dashboard");
    }
  }

  // let isauth = false
  return (
    <div className="bg-white shadow-md py-4 px-10 flex justify-between items-center fixed w-full z-10">
      <div className="text-2xl font-bold text-blue-600">
        <Link to={"/"}>MediMeet.</Link>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to={"/"} className="hover:text-blue-600">
          Home
        </Link>
        <Link to={"/doctors"} className="hover:text-blue-600">
          Doctors
        </Link>
        <Link to={"/categories"} className="hover:text-blue-600">
          Categories
        </Link>
      </div>
      {user ? (
        <div>
          <button
            onClick={dashboardHandler}
            className="text-md bg-blue-600 hover:bg-blue-500 px-3 py-2 font-black rounded-md text-white"
          >
            Go the Dashboard
          </button>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <Link
            to={"/login"}
            className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Login{" "}
          </Link>
          <Link
            to={"/register"}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sing Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
