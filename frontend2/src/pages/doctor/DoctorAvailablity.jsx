import React from 'react'
import TimeSlotCard from '../../Components/TimeSlotCard.jsx';

const demoAvailability = [
  {
    day: "Monday",
    available: true,
    slots: [
      { id: "1", startTime: "09:00", endTime: "12:00" },
      { id: "2", startTime: "14:00", endTime: "17:00" }
    ]
  },
  {
    day: "Tuesday",
    available: true,
    slots: [
      { id: "1", startTime: "10:00", endTime: "13:00" },
      { id: "2", startTime: "15:00", endTime: "18:00" }
    ]
  },
  {
    day: "Wednesday",
    available: true,
    slots: [
      { id: "1", startTime: "09:30", endTime: "12:30" }
    ]
  },
  {
    day: "Thursday",
    available: true,
    slots: [
      { id: "1", startTime: "09:00", endTime: "11:00" },
      { id: "2", startTime: "13:00", endTime: "16:00" }
    ]
  },
  {
    day: "Friday",
    available: true,
    slots: [
      { id: "1", startTime: "10:00", endTime: "14:00" }
    ]
  },
  {
    day: "Saturday",
    available: true,
    slots: [
      { id: "1", startTime: "09:00", endTime: "12:00" }
    ]
  },
  {
    day: "Sunday",
    available: false,
    slots: []
  }
];


const DoctorAvailablity = () => {
  return (
    <div>
      {demoAvailability.map(() => <TimeSlotCard availability={demoAvailability}/>)}
    </div>
  )
}

export default DoctorAvailablity