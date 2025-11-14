import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo-single.png";

const Header = () => {
  let auth = false;
  return (
    <header className="flex justify-between w-full border-white border-b-[0.1px] px-6 py-2">
      <div className="w-10">
        <Link to={"/"}>
          <img src={logo} alt="logo Image" />
        </Link>
      </div>
      <div className="flex gap-5 items-center text-sm text-white">
        {auth ? (
          <>
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
            <div className="">
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </>
        ) : (
         <>
         {
          
         }
         </>
        )}
      </div>
    </header>
  );
};

export default Header;
