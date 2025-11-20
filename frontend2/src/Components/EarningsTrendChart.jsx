import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function EarningsTrendChart() {
  const data = [
    { month: 'Jan', earnings: 6000 },
    { month: 'Feb', earnings: 9500 },
    { month: 'Mar', earnings: 7200 },
    { month: 'Apr', earnings: 11000 },
    { month: 'May', earnings: 8800 },
    { month: 'Jun', earnings: 13500 }
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Earnings Trend
        </h2>
        <p className="text-gray-500 text-sm">Last 6 months</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="#9ca3af"
            style={{ fontSize: '14px' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af"
            style={{ fontSize: '14px' }}
            domain={[0, 14000]}
            ticks={[0, 3500, 7000, 10500, 14000]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px'
            }}
            labelStyle={{ color: '#374151', fontWeight: 'bold' }}
            formatter={(value) => `₹${value}`}
          />
          <Bar 
            dataKey="earnings" 
            fill="#6366f1"
            radius={[8, 8, 0, 0]}
            maxBarSize={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}