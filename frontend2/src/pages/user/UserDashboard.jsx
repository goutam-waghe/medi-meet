import React, { useState } from "react";
import FindDoctors from "./FindDoctors";
import UserDashboardMyBooking from "../../Components/UserDashboardMyBooking";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("doctors");
  return (
    <div className="px-10 py-10">
      <div className="grid gap-2 px-2 py-5">
        <h1 className="text-4xl font-black">My Dashboard</h1>
        <p className="text-md">Manage your appointments and find doctors </p>
      </div>
      <div className="flex justify-center ">
        <div className="bg-white rounded-xl p-1 w-full md:w-[50%] flex  shadow-sm">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "bookings"
                ? "bg-gray-100 text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            
            My Bookings
          </button>
          <button
            onClick={() => setActiveTab("doctors")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              activeTab === "doctors"
                ? "bg-gray-100 text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            
            Find Doctors
          </button>
        </div>
      </div>

      <div>
        
        {
          activeTab === "doctors"? <FindDoctors/> : <UserDashboardMyBooking/>
        }
      </div> 
    </div>
  );
};

export default UserDashboard;
