import React from 'react'

const DoctorProfileCard = ({doctor}) => {
  return (
<div className="w-full bg-white shadow-md rounded-xl p-6  border-gray-300 border">
  <div className="flex flex-col md:flex-row gap-6 items-start">

    {/* Doctor Image */}
    <img
      src={doctor.image}
      alt={doctor.name}
      className="w-32 h-32 md:w-36 md:h-36 rounded-xl object-cover mx-auto md:mx-0"
    />

    <div className="flex-1 w-full">
      {/* Name */}
      <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        {doctor.name}
      </h2>

      {/* Specialization */}
      <p className="text-sky-500 text-lg md:text-xl font-semibold mt-1 text-center md:text-left">
        {doctor.specialization}
      </p>

      {/* Details Row */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mt-4 text-gray-700">

        <div className="flex items-center gap-2">
          ⭐ <span className="font-semibold">{doctor.rating}</span>
          <span className="text-gray-500">({doctor.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Experience:</span> {doctor.experience} years
        </div>

        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold text-xl">$</span>
          <span className="font-semibold">₹{doctor.fees}</span>
        </div>

        <div className="flex items-center gap-2">
          📍 <span className="font-semibold">{doctor.location}</span>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <button className="bg-sky-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-600 w-full sm:w-auto">
          Book Appointment
        </button>

        <button className="border px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 w-full sm:w-auto">
          Contact
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DoctorProfileCard