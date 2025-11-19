import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftFill } from "@remixicon/react";
import BackToHome from "../../Components/BackToHome";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // Add your API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
     <BackToHome/>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Otp
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
