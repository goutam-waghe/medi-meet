import React, { useEffect, useState } from "react";
import { cities } from "../../constant.js";
import BackToHome from "../../Components/BackToHome.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearState, registerUser } from "../../redux/slice/userSlice.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    city: "",
    role: "user",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user, success } = useSelector((state) => state.user);
  console.log(user, loading, error, success);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRole = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    console.log("Form Submitted:", formData);
  };
  // 🔥 Show toast when error happens
  useEffect(() => {
    if (error) toast.error(error?.detail);
  }, [error]);

  // 🔥 Show toast when register success
  useEffect(() => {
    if (success) {
      toast.success("Registered successfully!");
      setTimeout(() => navigate("/login"), 1500);
      dispatch(clearState());
    }
  }, [success, navigate , dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-10 relative">
      <BackToHome />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              placeholder="9876543210"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">City</label>
            <select
              value={formData.city}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              {cities.map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm">I am a</label>
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => handleRole("user")}
                className={`flex-1 py-2 rounded-lg border ${
                  formData.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Patient
              </button>
              <button
                type="button"
                onClick={() => handleRole("doctor")}
                className={`flex-1 py-2 rounded-lg border ${
                  formData.role === "doctor"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Doctor
              </button>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
