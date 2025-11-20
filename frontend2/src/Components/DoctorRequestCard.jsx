import React from "react";
import { RiCheckLine, RiCloseLine, RiFileTextLine } from "@remixicon/react";

const DoctorRequestCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 flex gap-6">
      {/* Doctor Image */}
      <img
        src={doctor.photo || "https://via.placeholder.com/80"}
        alt={doctor.name}
        className="w-20 h-20 rounded-xl object-cover"
      />

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{doctor.name}</h2>

          <span className="text-orange-600 bg-orange-100 px-3 py-1 rounded-md text-sm font-medium">
            Pending
          </span>
        </div>

        {/* Info */}
        <p className="text-gray-600 mt-1">{doctor.specialization}</p>
        <p className="text-gray-500 text-sm">
          Experience: {doctor.experience} years
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-3 mt-4">
          <div>
            <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-blue-600 hover:bg-blue-50">
              <RiFileTextLine size={18} />
              View Documents
            </button>
          </div>

          <div className="flex gap-5 items-center">
            <button
            onClick={() => onApprove(doctor.id)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            <RiCheckLine size={18} />
            Approve
          </button>

          {/* Reject Button */}
          <button
            onClick={() => onReject(doctor.id)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <RiCloseLine size={18} />
            Reject
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DoctorRequestCard;
