import React from "react";
import {
  RiUser2Line,
  RiVerifiedBadgeLine,
  RiAlertLine,
  RiBarChart2Line,
  RiMoneyCnyBoxFill,
} from "@remixicon/react";

const AdminDashboard = () => {
  return (
    <div className="px-20 py-10">
      <div className="grid gap-2 p-2">
        <h1 className="text-4xl">Admin Dashboard</h1>
        <p className="text-md">Platform overview and analytics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <RiUser2Line className="text-blue-600" size={22} />
            </div>
            <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-md">
              +5%
            </span>
          </div>

          <h2 className="text-gray-500 font-medium">Total Users</h2>
          <p className="text-4xl font-bold mt-1">992</p>
          <p className="text-gray-500 text-sm mt-1">
            Patients: 986 | Doctors: 6
          </p>
        </div>

        {/* Verified Doctors */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border  border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <RiVerifiedBadgeLine className="text-green-600" size={22} />
            </div>
            <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-md">
              +8%
            </span>
          </div>

          <h2 className="text-gray-500 font-medium">Verified Doctors</h2>
          <p className="text-4xl font-bold mt-1">6</p>
          <p className="text-gray-500 text-sm mt-1">Pending: 0</p>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
              <RiAlertLine className="text-yellow-600" size={22} />
            </div>
            <span className="text-yellow-600 text-sm font-semibold bg-yellow-100 px-2 py-1 rounded-md">
              0%
            </span>
          </div>

          <h2 className="text-gray-500 font-medium">Pending Approvals</h2>
          <p className="text-4xl font-bold mt-1">0</p>
          <p className="text-gray-500 text-sm mt-1">Awaiting verification</p>
        </div>

        {/* Total Appointments */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <RiBarChart2Line className="text-blue-600" size={22} />
            </div>
            <span className="text-green-600 text-sm font-semibold bg-green-100 px-2 py-1 rounded-md">
              +12%
            </span>
          </div>

          <h2 className="text-gray-500 font-medium">Total Appointments</h2>
          <p className="text-4xl font-bold mt-1">0</p>
          <p className="text-gray-500 text-sm mt-1">All time</p>
        </div>

      
      </div>
    </div>
  );
};

export default AdminDashboard;
