import React, { useState } from 'react';
import TimeSlotCard from '../../Components/TimeSlotCard.jsx';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const initialSchedule = days.map(day => ({
  day,
  available: true,
  expanded: true,
  slots: day === 'Tuesday' ? [{ id: 1, start: '09:00', end: '17:00' }] : []
}));

const DoctorAvailablity = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  return (
    <div className='grid gap-5 px-10 py-10'>
      
      {/* Page Header */}
      <div className='grid gap-2 border-gray-200 border-b pb-2'>
        <h1 className='text-4xl font-semibold'>Availability</h1>
        <p className='text-md text-gray-500'>Set your working hours and appointment slots</p>
      </div>

      {/* Time Slot Section */}
      <div className='shadow-md border-gray-200 border rounded-xl bg-gray-50'>
        <TimeSlotCard schedule={schedule} setSchedule={setSchedule} />
      </div>
    </div>
  );
};

export default DoctorAvailablity;
