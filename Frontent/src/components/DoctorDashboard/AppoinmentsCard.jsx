import { RiCalendar2Line, RiTimeLine, RiUser2Line } from "@remixicon/react";
import React, { useState } from "react";
import AppointmentDetailsModal from "./AppoinmentDeatilsModal";
import { appointments } from "../../data.js";

const AppoinmentsCard = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", date: "" });

  
  return (
    <>
    <div className="flex justify-between border border-gray-800 p-2 rounded-xl">
      <div className="flex gap-10">
        <RiUser2Line className="w-10 h-10 mt-2" />
        <div className="flex flex-col gap-2">
          <div className="">
            <h3 className="text-lg">Ajay Chouhan</h3>
            <p className="text-sm">ajaychouhan@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center text-sm">
              <div>
                <RiTimeLine className="w-5 h-5" />
              </div>
              <div>May 29 , 2025 at 11:00AM</div>
            </div>
            <div className="flex gap-3 items-center text-sm">
              <div>
                <RiCalendar2Line className="w-5 h-5" />
              </div>
              <div>11:30AM to 12:00PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end gap-3">
        <button className="bg-blue-600 hover:bg-blue-500 rounded p-2 cursor-pointer">
          Complete
        </button>
        <button onClick={() => setIsOpen(true)} className="bg-gray-600 hover:bg-gray-500 rounded p-2 cursor-pointer">
          View Deatils
        </button>
      </div>
    </div>

     {/* overflow */}
     <AppointmentDetailsModal   isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        appointment={appointments[0]} />
     
    </>
  );
};

export default AppoinmentsCard;
