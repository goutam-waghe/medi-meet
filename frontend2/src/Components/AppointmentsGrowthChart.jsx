import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AppointmentsGrowthChart() {
  const data = [
    { month: 'Jan', appointments: 12 },
    { month: 'Feb', appointments: 19 },
    { month: 'Mar', appointments: 15 },
    { month: 'Apr', appointments: 22 },
    { month: 'May', appointments: 18 },
    { month: 'Jun', appointments: 28 }
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Appointments Growth
        </h2>
        <p className="text-gray-500 text-sm">Last 6 months</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af"
            style={{ fontSize: '14px' }}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '14px' }}
            domain={[0, 28]}
            ticks={[0, 7, 14, 21, 28]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            labelStyle={{ color: '#374151', fontWeight: 'bold' }}
          />
          <Line 
            type="monotone" 
            dataKey="appointments" 
            stroke="#06b6d4" 
            strokeWidth={3}
            dot={{ fill: '#06b6d4', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}