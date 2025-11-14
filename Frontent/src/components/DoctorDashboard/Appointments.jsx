import React, { useState } from "react";
import { RiCalendar2Line } from "@remixicon/react";
import { appointments } from "../../data.js";
import AppoinmentsCard from "./AppoinmentsCard.jsx";

const Appointments = () => {
  
  
  return (
    <div className="p-8">
      <div className="flex gap-4 items-center">
        <div>
          <RiCalendar2Line />
        </div>
        <h1>Upcomming Events</h1>
      </div>
      {
        appointments.length > 0 ?<><div
        className="flex flex-col gap-5 my-10 max-h-96 overflow-y-auto
  scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray
  hover:scrollbar-thumb-purple-400 scrollbar-thumb-rounded-full
  scroll-smooth dark:scrollbar-thumb-purple-500"
      >
        {appointments.map((val) => (
          <AppoinmentsCard />
        ))}
      </div></>  
      :<>
      <div className="flex flex-col items-center justify-center text-gray-400 py-20">
      <div className="bg-gray-800/60 rounded-full p-4 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-purple-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-medium">No Upcoming Events</h2>
      <p className="text-sm text-gray-500 mt-1">You don’t have any scheduled appointments yet.</p>
    </div></>
      }
      
    </div>
  );
};

export default Appointments;
