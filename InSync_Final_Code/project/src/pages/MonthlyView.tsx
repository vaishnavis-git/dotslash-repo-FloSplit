import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, Activity, Brain, Heart } from 'lucide-react';

const mockEnergyData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  energy: Math.floor(Math.random() * 40) + 60,
  mood: Math.floor(Math.random() * 30) + 60,
  sleep: Math.floor(Math.random() * 20) + 70,
}));

const workoutData = [
  { name: 'HIIT', sessions: 8 },
  { name: 'Yoga', sessions: 12 },
  { name: 'Strength', sessions: 6 },
  { name: 'Cardio', sessions: 10 },
  { name: 'Rest', sessions: 4 },
];

function MonthlyView() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Monthly Overview</h2>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500">March 2024</span>
          </div>
        </div>

        {/* Energy, Mood, and Sleep Trends */}
        <div className="h-[300px] mb-6">
          <h3 className="text-md font-medium mb-4">Daily Wellness Metrics</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockEnergyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="energy" stroke="#F43F5E" name="Energy" />
              <Line type="monotone" dataKey="mood" stroke="#8B5CF6" name="Mood" />
              <Line type="monotone" dataKey="sleep" stroke="#3B82F6" name="Sleep" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Workout Distribution */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-md font-medium mb-4">Workout Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#F43F5E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Monthly Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="h-5 w-5 text-rose-500" />
            <h3 className="font-medium">Exercise Insights</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Most active during Follicular phase</li>
            <li>• 85% workout completion rate</li>
            <li>• Best performance: HIIT sessions</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="h-5 w-5 text-purple-500" />
            <h3 className="font-medium">Mood Patterns</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Peak mood during Ovulation</li>
            <li>• Consistent morning energy</li>
            <li>• Improved sleep quality</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-rose-500" />
            <h3 className="font-medium">Cycle Health</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Regular 28-day cycle</li>
            <li>• Consistent ovulation</li>
            <li>• Balanced hormone patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MonthlyView;