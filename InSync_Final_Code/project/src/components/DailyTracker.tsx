import React, { useState } from 'react';
import { Activity, Utensils, Brain, Moon, Check, X } from 'lucide-react';

interface TrackerProps {
  recommendedWorkout: string;
  recommendedNutrition: string;
  recommendedSleep: string;
}

const DailyTracker: React.FC<TrackerProps> = ({ 
  recommendedWorkout, 
  recommendedNutrition,
  recommendedSleep 
}) => {
  const [mood, setMood] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [completedWorkout, setCompletedWorkout] = useState('');
  const [completedNutrition, setCompletedNutrition] = useState('');
  const [completedSleep, setCompletedSleep] = useState('');
  const moods = ['😔', '😕', '😐', '🙂', '😊'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mood & Energy Tracking */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">Track Your Mood & Energy</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mood</label>
            <div className="flex justify-between items-center">
              {moods.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setMood(index)}
                  className={`text-2xl p-2 rounded-full transition-all ${
                    mood === index ? 'bg-rose-100 scale-110' : 'hover:bg-gray-100'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Energy Level</label>
            <input
              type="range"
              min="0"
              max="100"
              value={energy}
              onChange={(e) => setEnergy(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
            <div className="text-center text-sm font-medium text-gray-700 mt-2">
              {energy}%
            </div>
          </div>
        </div>
      </div>

      {/* Activity Tracking */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">Track Your Activities</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Today's Workout</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">{recommendedWorkout}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCompletedWorkout(recommendedWorkout)}
                  className={`p-2 rounded-full ${
                    completedWorkout ? 'bg-green-100 text-green-600' : 'bg-gray-200'
                  }`}
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCompletedWorkout('')}
                  className={`p-2 rounded-full ${
                    !completedWorkout ? 'bg-red-100 text-red-600' : 'bg-gray-200'
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Today's Nutrition</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">{recommendedNutrition}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCompletedNutrition(recommendedNutrition)}
                  className={`p-2 rounded-full ${
                    completedNutrition ? 'bg-green-100 text-green-600' : 'bg-gray-200'
                  }`}
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCompletedNutrition('')}
                  className={`p-2 rounded-full ${
                    !completedNutrition ? 'bg-red-100 text-red-600' : 'bg-gray-200'
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sleep Goal</label>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">{recommendedSleep}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCompletedSleep(recommendedSleep)}
                  className={`p-2 rounded-full ${
                    completedSleep ? 'bg-green-100 text-green-600' : 'bg-gray-200'
                  }`}
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCompletedSleep('')}
                  className={`p-2 rounded-full ${
                    !completedSleep ? 'bg-red-100 text-red-600' : 'bg-gray-200'
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTracker;