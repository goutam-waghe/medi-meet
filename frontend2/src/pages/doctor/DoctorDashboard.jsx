import { RiCalendar2Fill, RiCalendar2Line, RiCheckboxCircleFill, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiTimeFill, RiTimeLine } from '@remixicon/react'
import React from 'react'
import AppointmentsGrowthChart from '../../Components/AppointmentsGrowthChart'
import EarningsTrendChart from '../../Components/EarningsTrendChart'


const DoctorDashboard = () => {
  const appointments = []
  return (
    <div className='grid gap-5 p-20 py-5'>
      <div className=''>
        <h2 className='text-4xl font-bold'>MEDIMEET</h2>
        <p className='text-md'>welcome back , find best doctor for your stay helthy</p>
      </div>
      {/* EARNING */}
      <div className=''>
       <div className="grid grid-cols-1 gap-5  my-6 md:grid-cols-2">
          {/* Today's Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <RiCalendar2Line className="w-6 h-6 text-blue-600" />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                +12%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Today's Appointments</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">0</div>
            <p className="text-gray-500 text-sm">Total: 0 appointments</p>
          </div>

          {/* Total Earnings */}
          <div className="bg-white  rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RiMoneyDollarCircleLine className="w-6 h-6 text-green-600" />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                +8%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Earnings</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">₹0</div>
            <p className="text-gray-500 text-sm">From completed appointments</p>
          </div>

          {/* Pending Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <RiTimeLine className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded">
                Action needed
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Pending Appointments</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">0</div>
            <p className="text-gray-500 text-sm">Awaiting confirmation</p>
          </div>

          {/* Verification Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <RiCheckboxCircleLine className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Verification Status</h3>
            <div className="text-4xl font-bold text-green-600 mb-1">Verified</div>
            <p className="text-gray-500 text-sm">Account verified</p>
          </div>
        </div>
      </div>
      {/* CHART */}
      <div>
      <AppointmentsGrowthChart/>

      </div>
     
      <div>
<EarningsTrendChart/>
      </div>

      {/* view all appoiments  */}
     <div className='p-5 shadow-md'>
       <div className='flex justify-between items-center'>
        <div className='grid gap-2'>
          <h2 className='text-lg font-bold'>Today's Appointments</h2>
          <p className='text-md'>You have 0 appointments</p>
        </div>
        <div className='bg-blue-600 rounded-xl text-white px-3 py-2'> View all</div>
</div>
        {
          appointments.length > 0 ? <></> : <>
          <div className='flex  h-80 flex-col justify-center items-center'>
            <RiCalendar2Line/>
            <p>No appoinments Available</p>
          </div>
          </>
        }


      
     </div>







    </div>
  )
}

export default DoctorDashboard