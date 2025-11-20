import React from "react";
import DoctorRequestCard from "../../Components/DoctorRequestCard";

const doctor = {
  id: 1,
  name: "Dr. Smit Patel",
  specialization: "Dermatologist",
  experience: 4,
  photo:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
};
const DoctorRequets = () => {
  return (
    <div className=" px-20 py-10 grid gap-4">
      <div className="grid gap-4">
        <h2>Doctor Requests</h2>
        <p>Manage and approve doctor registrations </p>
      </div>

      <div>
        
      </div>

      <div className="grid gap-5">
        <DoctorRequestCard doctor={doctor} />
        <DoctorRequestCard doctor={doctor} />
        <DoctorRequestCard doctor={doctor} />
        <DoctorRequestCard doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorRequets;
