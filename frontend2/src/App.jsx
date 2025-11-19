import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyOtp from "./pages/auth/VerifyOtp";
import Home from "./pages/user/Home";
import Doctors from "./pages/user/Doctors";
import Categories from "./pages/user/Categories";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFailed from "./pages/payment/PaymentFailed";
import DoctorProfile from "./pages/user/DoctorProfile";
import DoctorLayout from "./pages/doctor/DoctorLayout";
import DoctorAvailablity from "./pages/doctor/DoctorAvailablity";
import DoctorMyProfile from "./pages/doctor/DoctorMyProfile";
import DoctorEarning from "./pages/doctor/DoctorEarning";
import DoctorAppoinments from "./pages/doctor/DoctorAppoinments";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-fail" element={<PaymentFailed />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />

          <Route path="/doctor-dashboard" element={<DoctorLayout />}>
            <Route index element={<DoctorDashboard />} />
            <Route path="availablity" element={<DoctorAvailablity />} />
            <Route path="profile" element={<DoctorMyProfile />} />
            <Route path="earning" element={<DoctorEarning />} />
            <Route path="appointment" element={<DoctorAppoinments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
