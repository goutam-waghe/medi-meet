import React from 'react'
import { useNavigate } from 'react-router-dom';
const doctor = {
  doctor: {
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    experience: 8,
  },
  selectedDate: "2025-11-28",
  selectedSlot: {
    start_time: "10:00 AM",
    end_time: "10:30 AM",
  },
  patientName: "Rohan Singh",
  disease: "Skin Allergy",
  description: "Redness and itching for 3 days",
};


const BookingConformation = () => {
    
    
  return (
    <div className="px-10 py-8 max-w-3xl mx-auto">

      <h2 className="text-2xl font-semibold mb-6">Confirm Appointment</h2>

      {/* Doctor Info */}
      <div className="border p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium">Doctor Details</h3>
        <p className="text-gray-700"><b>Name:</b> {doctor.doctor.name}</p>
        <p className="text-gray-700"><b>Specialization:</b> {doctor.doctor.specialization}</p>
        <p className="text-gray-700"><b>Experience:</b> {doctor.doctor.experience} years</p>
      </div>

      {/* Appointment Info */}
      <div className="border p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium">Appointment Information</h3>
        <p><b>Date:</b> {doctor.selectedDate}</p>
        <p>
          <b>Time:</b> {doctor.selectedSlot?.start_time} — {doctor.selectedSlot?.end_time}
        </p>
      </div>

      {/* Patient Info */}
      <div className="border p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium">Patient Details</h3>
        <p><b>Name:</b> {doctor.patientName}</p>
        <p><b>Disease:</b> {doctor.disease}</p>
        <p><b>Description:</b> {doctor.description || "Not provided"}</p>
      </div>

      {/* Payment */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/payment")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default BookingConformation