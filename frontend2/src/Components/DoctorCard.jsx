import React from 'react'
import { RiStarFill  , RiMap2Fill} from '@remixicon/react'
import { Link } from 'react-router-dom'

const DoctorCard = ({
    name, 
  specialization, 
  experience, 
  fee, 
  rating, 
  reviewCount, 
  location, 
  imageUrl 
}) => {
  return (
   <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-48 h-48 object-cover rounded-lg"
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="text-cyan-500 font-medium">{specialization}</p>
            </div>
            <div className="flex items-center gap-1">
              <RiStarFill className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-gray-900">{rating}</span>
              <span className="text-gray-500 text-sm">({reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-600 text-sm mb-3">
            <span>Experience: {experience} years</span>
            <span className="flex items-center gap-1">
              ₹{fee}/consultation
            </span>
            <span className="flex items-center gap-1">
              <RiMap2Fill className="w-4 h-4" />
              {location}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to={"/doctor/prfile"} className="flex-1 px-6 py-2.5 border-2 border-cyan-500 text-cyan-500 rounded-lg font-medium hover:bg-cyan-50 transition-colors">
            View Profile
          </Link>
          <button className="flex-1 px-6 py-2.5 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard