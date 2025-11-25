import { Suspense, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackToHome from "../../Components/BackToHome";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  fetchDoctorDetail,
  loginUser,
} from "../../redux/slice/userSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, loading, success, doctor } = useSelector(
    (state) => state.user
  );

  console.log(user, error, loading, success);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // dispatch login action or API call here
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (error) toast.error(error?.detail);
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success("Login successfully!");

      if (user.role === "doctor") {
        dispatch(fetchDoctorDetail());
      } else if (user.role === "user") {
        navigate("/user-dashboard");
      } else if (user.role === "admin") {
        navigate("/admin-dashboard");
      }

      dispatch(clearState());
    }
  }, [success]);

  useEffect(() => {
    if (user?.role === "doctor") {
      if (doctor) {
        navigate("/doctor-dashboard");
      } else if (doctor === null) {
        navigate("/doctor-details-form");
      }
    }
  }, [doctor, user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 relative">
      <BackToHome />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-600 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember -- Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Remember me
            </label>
            <Link
              to={"/forgot-password"}
              className="text-blue-600 font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-5 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-blue-600 font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
