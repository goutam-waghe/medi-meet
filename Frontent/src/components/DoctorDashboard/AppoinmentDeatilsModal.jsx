import React, { useState } from "react";
import { RiUserLine, RiCalendar2Line, RiVideoLine, RiEdit2Line } from "@remixicon/react";

const AppointmentDetailsModal = ({ isOpen, onClose, appointment }) => {
  if (!isOpen) return null;
  
  const [notes, setNotes] = useState(appointment?.notes || "");
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Modal Box */}
      <div className="bg-[#111827] text-white rounded-2xl w-full max-w-lg shadow-lg border border-gray-700 animate-fadeIn p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Appointment Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Manage your upcoming appointment
        </p>

        {/* Patient Info */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <RiUserLine className="text-teal-400 w-5 h-5" />
            <div>
              <p className="font-medium">{appointment?.patientName}</p>
              <p className="text-gray-400 text-sm">{appointment?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <RiCalendar2Line className="text-teal-400 w-5 h-5" />
            <div>
              <p className="font-medium">{appointment?.date}</p>
              <p className="text-gray-400 text-sm">{appointment?.time}</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-5">
          <p className="text-sm text-gray-400 mb-2">Status</p>
          <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-md text-sm font-medium">
            {appointment?.status || "SCHEDULED"}
          </span>
        </div>

        {/* Video Consultation */}
        <div className="bg-green-500/10 border border-green-600 rounded-xl p-3 mb-6 flex items-center gap-3">
          <RiVideoLine className="text-green-400 w-5 h-5" />
          <p className="text-sm text-gray-200">
            Video call will be available 30 minutes before appointment
          </p>
        </div>

        {/* Doctor Notes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-400">Doctor Notes</p>
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm"
            >
              <RiEdit2Line className="w-4 h-4" />
              {editMode ? "Save" : "Add"}
            </button>
          </div>

          {editMode ? (
            <textarea
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-sm focus:outline-none focus:border-teal-500"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write notes here..."
            />
          ) : (
            <div className="bg-gray-800 border border-gray-700 rounded-md p-3 text-gray-400 text-sm">
              {notes || "No notes added yet"}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
            Mark Complete
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">
            Cancel Appointment
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsModal;
