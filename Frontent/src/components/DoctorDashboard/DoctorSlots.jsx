import { RiDeleteBin2Fill, RiTimeLine } from '@remixicon/react'
import React from 'react'

const DoctorSlots = ({startTime , endTime , status}) => {
  return (
    <div className="flex justify-between items-center border border-gray-700 p-4 rounded">
              <div className="flex items-center gap-5">
                <div>
                  <RiTimeLine />
                </div>
                <div>
                  <h3 className="text-lg">{startTime} to {endTime}</h3>
                  <p className="text-sm">{status}</p>
                </div>
              </div>
              <div className="cursor-pointer hover:text-red-500 ">
                <RiDeleteBin2Fill/>
              </div>
            </div>
  )
}

export default DoctorSlots