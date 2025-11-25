import React, { useState } from "react";
import DoctorProfileCard from "../../Components/DoctorProfileCard";
import { allDoctors } from "../../constant";
import { Link, useParams } from "react-router-dom";

export const demo = [
  { id: 1, start_time: "09:00 AM", end_time: "09:30 AM", booked: false },
  { id: 2, start_time: "10:00 AM", end_time: "10:30 AM", booked: false },
  { id: 3, start_time: "11:00 AM", end_time: "11:30 AM", booked: true },
  { id: 4, start_time: "02:00 PM", end_time: "02:30 PM", booked: false },
  { id: 5, start_time: "03:00 PM", end_time: "03:30 PM", booked: false },
  { id: 6, start_time: "05:00 PM", end_time: "05:30 PM", booked: true },
];

const BookAppointment = () => {
  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState(demo);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [patientName, setPatientName] = useState("");
  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");

  let doctor = allDoctors.find((val) => val.id === Number(id));

  return (
    <div className="px-10 py-8 max-w-4xl mx-auto">

      {/* Doctor Card */}
      <DoctorProfileCard doctor={doctor} />

      {/* DATE PICKER */}
      <div className="mt-6">
        <label className="font-medium">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border mt-2 rounded-lg"
        />
      </div>

      {/* SLOTS */}
      <div className="mt-6">
        <label className="font-medium">Available Slots</label>

        <div className="grid grid-cols-3 gap-3 mt-3">
          {slots.length === 0 && selectedDate && (
            <p className="col-span-3 text-gray-500 text-sm">
              No slots available for this date.
            </p>
          )}

          {slots.map((slot) => (
            <button
              key={slot.id}
              disabled={slot.booked}
              onClick={() => setSelectedSlot(slot)}
              className={`p-3 border rounded-lg text-sm transition-all
                ${slot.booked ? "bg-gray-300 cursor-not-allowed" : "hover:bg-blue-100"} 
                ${
                  selectedSlot?.id === slot.id
                    ? "bg-blue-600 text-white"
                    : ""
                }
              `}
            >
              {slot.start_time}
            </button>
          ))}
        </div>
      </div>

      {/* USER DETAILS */}
      <div className="mt-10 space-y-4">
        <div>
          <label className="font-medium">Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full p-3 border mt-1 rounded-lg"
            placeholder="Enter patient name"
          />
        </div>

        <div>
          <label className="font-medium">Disease</label>
          <input
            type="text"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            className="w-full p-3 border mt-1 rounded-lg"
            placeholder="ex: fever, headache"
          />
        </div>

        <div>
          <label className="font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border mt-1 rounded-lg"
            rows="4"
            placeholder="Additional details..."
          ></textarea>
        </div>
      </div>

      {/* BOOK BUTTON */}
      <div className="mt-6 flex justify-end">
        <Link to={`confirm`} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm hover:bg-blue-700">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
