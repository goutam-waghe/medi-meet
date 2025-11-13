import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/Home_Pages/HomePage.jsx";

import Signup from "./components/auth/Singup.jsx";
import Login from "./components/auth/Login.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import VefifyOtp from "./components/auth/VefifyOtp.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import UserDashboard from "./components/userDashboard/UserDashboard.jsx";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard.jsx";
import AdminDashboard from "./components/adminDashboard/AdminDashboard.jsx";
import Role from "./components/auth/Role.jsx";
import DoctorForm from "./components/DoctorDashboard/DoctorForm.jsx";
import Earning from "./components/DoctorDashboard/Earning.jsx";
import Appointments from "./components/DoctorDashboard/Appointments.jsx";
import Availability from "./components/DoctorDashboard/Availability.jsx";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-reset-otp" element={<VefifyOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/join-as" element={<Role />} />

            {/* user  */}
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/join-as" element={<Role />} />

            {/* doctor */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard />}>
              <Route index element={<Earning />} />
              <Route path="earnings" element={<Earning/>} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="availability" element={<Availability />} />
            </Route>
            <Route path="/doctor/info" element={<DoctorForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
