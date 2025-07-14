import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data (weight in kg over 30 days)
const weightData = [
  { day: 1, weight: 85.0 },
  { day: 5, weight: 84.2 },
  { day: 10, weight: 83.5 },
  { day: 15, weight: 82.8 },
  { day: 20, weight: 82.0 },
  { day: 25, weight: 81.3 },
  { day: 30, weight: 80.5 }
];

export default function WeightLossTracker() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
          <h1 className="text-3xl font-bold">Personal Weight Loss Tracker</h1>
          <p className="mt-2">30-Day Progress Overview</p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-b">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-gray-500">Starting Weight</h3>
            <p className="text-2xl font-bold">85.0 kg</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-gray-500">Current Weight</h3>
            <p className="text-2xl font-bold">80.5 kg</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-gray-500">Total Lost</h3>
            <p className="text-2xl font-bold text-green-600">4.5 kg</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Daily Progress</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weightData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis domain={[78, 86]} />
                <Tooltip 
                  formatter={(value) => [`${value} kg`, 'Weight']}
                  labelFormatter={(day) => `Day ${day}`}
                />
                <Bar 
                  dataKey="weight" 
                  name="Weight"
                  fill="#4fd1c5" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Notes Section */}
        <div className="p-6 bg-yellow-50">
          <h2 className="text-xl font-semibold mb-2">Monthly Insights</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Consistent 0.15kg/day average loss</li>
            <li>Best progress between Day 15-20 (-0.8kg)</li>
            <li>Target for next month: 78kg</li>
          </ul>
        </div>
      </div>
    </div>
  );
}