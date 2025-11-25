import React from 'react'
import { RiTimeLine } from "@remixicon/react";
import { Link } from 'react-router-dom';

const RequestPendingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
        
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
            <RiTimeLine className="text-yellow-500" size={40} />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Approval Pending</h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Your doctor profile has been submitted successfully.  
          Once the admin approves your account, you will be able to access your dashboard.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-700 font-medium">
            ⏳ Please wait while your request is being reviewed.
          </p>
        </div>
        <div className='mt-10'>
             <Link to={"/"} className='bg-blue-600 rounded-lg text-white px-3 py-2 font-bold'>
                Go To Home
             </Link>
        </div>
      </div>
    </div>
  )
}

export default RequestPendingPage