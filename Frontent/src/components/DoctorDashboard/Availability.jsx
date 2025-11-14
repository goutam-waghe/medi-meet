import React, { useState } from "react";
import { RiTimeLine, RiAddFill, RiDeleteBin2Fill } from "@remixicon/react";
import CurrentAvailability from "./CurrentAvailability";
import SlotForm from "./SlotForm";

const Availability = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col gap-5 p-8">
      <div className="flex gap-2 items-center ">
        <div>
          <RiTimeLine className="w-10 h-10" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">Availability</h1>
          <p className="text-sm">
            set your daily Availability for patient Appointments.
          </p>
        </div>
      </div>
      <div className="">
{showForm ? (
        <CurrentAvailability showForm={showForm} setShowForm={setShowForm}/>
      ) : (
         <SlotForm showForm={showForm} setShowForm={setShowForm}/>
      )}
      </div>
      
    </div>
  );
};

export default Availability;
