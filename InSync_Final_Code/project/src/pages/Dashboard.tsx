import React from 'react';
import { Activity, Utensils, Brain, TrendingUp, Moon, Droplet, Sun, Leaf } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DailyTracker from '../components/DailyTracker';

const mockData = [
  { day: 'Mon', energy: 80, mood: 75, sleep: 85 },
  { day: 'Tue', energy: 85, mood: 80, sleep: 80 },
  { day: 'Wed', energy: 75, mood: 70, sleep: 75 },
  { day: 'Thu', energy: 90, mood: 85, sleep: 90 },
  { day: 'Fri', energy: 85, mood: 80, sleep: 85 },
  { day: 'Sat', energy: 95, mood: 90, sleep: 88 },
  { day: 'Sun', energy: 88, mood: 85, sleep: 82 },
];

const cyclePhases = {
  menstrual: {
    color: 'from-red-500 to-red-600',
    icon: Droplet,
    recommendations: {
      exercise: 'Focus on gentle movement like yoga, walking, and light stretching.',
      nutrition: 'Emphasize iron-rich foods and warm, nourishing meals.',
      mood: 'Practice self-care and rest when needed.',
      sleep: 'Aim for 8-9 hours of sleep'
    }
  },
  follicular: {
    color: 'from-green-500 to-green-600',
    icon: Leaf,
    recommendations: {
      exercise: 'Great time for high-intensity workouts and trying new activities.',
      nutrition: 'Focus on lean proteins and fermented foods.',
      mood: 'Channel rising energy into new projects and challenges.',
      sleep: 'Regular 7-8 hours is sufficient'
    }
  },
  ovulation: {
    color: 'from-yellow-500 to-yellow-600',
    icon: Sun,
    recommendations: {
      exercise: 'Peak energy for challenging workouts and strength training.',
      nutrition: 'Emphasize complex carbs and antioxidant-rich foods.',
      mood: 'Leverage high confidence and social energy.',
      sleep: '7-8 hours with consistent schedule'
    }
  },
  luteal: {
    color: 'from-purple-500 to-purple-600',
    icon: Moon,
    recommendations: {
      exercise: 'Transition to moderate intensity and mindful movement.',
      nutrition: 'Include magnesium-rich foods and healthy fats.',
      mood: 'Focus on completing tasks and winding down.',
      sleep: 'Extra rest may be needed, aim for 8-9 hours'
    }
  }
};

function Dashboard() {
  // For demo purposes, assuming follicular phase
  const currentPhase = cyclePhases.follicular;

  return (
    <div className="space-y-6">
      {/* Cycle Phase Banner */}
      <div className={`bg-gradient-to-r ${currentPhase.color} rounded-xl shadow-sm p-6 text-white`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <currentPhase.icon className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Follicular Phase - Day 7</h2>
            </div>
            <p className="text-green-50">Your energy is rising! This is a great time for starting new projects and high-intensity workouts.</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-sm">Next Phase: Ovulation</p>
            <p className="text-xs text-green-50">In 5 days</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: 'Today\'s Workout', icon: Activity, value: 'HIIT Training', color: 'bg-blue-500' },
          { title: 'Nutrition Focus', icon: Utensils, value: 'Protein & Greens', color: 'bg-green-500' },
          { title: 'Energy Level', icon: Brain, value: 'High', color: 'bg-purple-500' },
          { title: 'Cycle Day', icon: TrendingUp, value: 'Day 7', color: 'bg-rose-500' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Tracker */}
      <DailyTracker
        recommendedWorkout="30min HIIT Training"
        recommendedNutrition="High protein, leafy greens"
        recommendedSleep="7-8 hours"
      />

      {/* Charts */}
      <div className="relative bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/10" />
        <div className="relative p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Tracking</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
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
        </div>
      </div>

      {/* Phase-specific Recommendations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Exercise</h3>
          </div>
          <p className="text-gray-600">{currentPhase.recommendations.exercise}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Utensils className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Nutrition</h3>
          </div>
          <p className="text-gray-600">{currentPhase.recommendations.nutrition}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Mood</h3>
          </div>
          <p className="text-gray-600">{currentPhase.recommendations.mood}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Moon className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold">Sleep</h3>
          </div>
          <p className="text-gray-600">{currentPhase.recommendations.sleep}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;