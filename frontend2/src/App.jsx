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
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import PlatformEarnings from "./pages/admin/PlatformEarnings";
import PlatformAppoiment from "./pages/admin/PlatformAppoiment";
import DoctorRequets from "./pages/admin/DoctorRequets";
import UserLayout from "./pages/user/UserLayout";
import UserDashboard from "./pages/user/UserDashboard";
import UserMyProfile from "./pages/user/UserMyProfile";
import FindDoctors from "./pages/user/FindDoctors";
import MyBookings from "./pages/user/MyBookings";
import BookAppointment from "./pages/user/BookAppointment";
import BookingConformation from "./pages/user/BookingConformation";
import { Toaster } from "react-hot-toast";
import {useSelector} from "react-redux"
import ProtectedRoute from "./Components/ProtectedRoute";
import RequestPendingPage from "./pages/doctor/RequestPendingPage";
import DoctorDetailForm from "./pages/doctor/DoctorDeatailForm";
// import DoctorsDetailForm from "./pages/doctor/DoctorsDeatailForm";


function App() {
  const { user } = useSelector(state => state.user)
  
  return (
    <>
    
 <Toaster position="top-right" /> 
      <BrowserRouter>
        <Routes>
          {/* public routes */}
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
          <Route path="/doctor/:id/profile" element={<DoctorProfile />} />
          <Route path="/request-to-admin" element={<RequestPendingPage/>}/>
          <Route path="/doctor-details-form" element={<DoctorDetailForm/>}/>
          


          <Route path="/admin-dashboard" element={<ProtectedRoute  allowedRoles={['admin']}><AdminLayout/></ProtectedRoute>}>
          
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="doctor-Requests" element={<DoctorRequets />} />
            <Route path="earnings" element={<PlatformEarnings />} />
            <Route path="appointments" element={<PlatformAppoiment />} />
          </Route>
          

            <Route path="/doctor-dashboard" element={<ProtectedRoute  allowedRoles={['doctor']}><DoctorLayout /></ProtectedRoute> }>
            <Route index element={<DoctorDashboard />} />
            <Route path="availablity" element={<DoctorAvailablity />} />
            <Route path="profile" element={<DoctorMyProfile />} />
            <Route path="earnings" element={<DoctorEarning />} />
            <Route path="appointments" element={<DoctorAppoinments />} />
            

          </Route>

          <Route path="/user-dashboard" element={ <ProtectedRoute  allowedRoles={['user']}><UserLayout  /></ProtectedRoute> }>
            <Route index element={<UserDashboard />} />
            <Route path="request-to-admin" element={<RequestPendingPage/>}/>
            <Route path="profile" element={<UserMyProfile />} />
            <Route path="mybookings" element={<MyBookings />} />
            <Route path="doctor/:id/profile" element={<DoctorProfile />} />
            <Route path="doctor/:id/appointment" element={<BookAppointment />} />
            <Route path="doctor/:id/appointment/confirm" element={<BookingConformation />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
