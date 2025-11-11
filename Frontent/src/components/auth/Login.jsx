import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userData  ,doctorData , adminData } from "../../data";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate()


  function submitHandler(e)
  {
    e.preventDefault()

    if(userData.role = "user")
      navigation("/user/dashboard")
    else if (userData.role = "admin")
    navigation("/admin/dashboard")
  else if (userData.role = "doctor")
     navigation("/admin/dashboard")

  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="flex flex-col md:flex-row w-full md:w-[70%] lg:w-[60%] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-3">Welcome Back 👋</h2>
          <p className="text-center text-sm text-blue-100">
            Log in to your MediMeet account and continue your healthcare
            journey.
          </p>
        </div>

        <div className="flex w-full md:w-1/2 justify-center items-center p-8 md:p-10">
          <form onSubmit={submitHandler} className="w-full flex flex-col gap-5">
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">
              Login
            </h1>

            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Your Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="bg-gray-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Enter Your Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
              <Link
                to={"/forgot-password"}
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Login
            </button>

            {/* Footer Links */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Don’t have an account?{" "}
              <Link
                to={"/register"}
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
