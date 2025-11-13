import { RiAddFill, RiDeleteBin2Fill, RiTimeLine } from '@remixicon/react'
import React from 'react'
import DoctorSlots from './DoctorSlots'
import { doctorSlots } from '../../data.js'

const CurrentAvailability = ({ showForm ,setShowForm}) => {
  return (
   <div className="flex flex-col gap-5 ">
          <h1 className="text-xl">Current Availability</h1>
          <div className="flex flex-col gap-5">
            {doctorSlots.map((value , index) => {
              return <DoctorSlots key={index} startTime={value.startTime} endTime={value.endTime} status={value.status}/>
            })}
            
            <div
              className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-500 rounded p-2 cursor-pointer"
              onClick={() => setShowForm(!showForm)}
            >
              {" "}
              <div>
                <RiAddFill />
              </div>{" "}
              <h1 className="text-lg">set time Slot</h1>
            </div>
          </div>
        </div>
  )
}

export default CurrentAvailability