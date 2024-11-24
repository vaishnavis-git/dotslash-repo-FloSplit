import React from 'react';
import { Calendar, Activity, Utensils, Brain, Heart } from 'lucide-react';

const workoutsByPhase = {
  menstrual: ['Gentle yoga', 'Walking', 'Light stretching'],
  follicular: ['HIIT', 'Strength training', 'Running'],
  ovulation: ['Power yoga', 'Boxing', 'Dance cardio'],
  luteal: ['Pilates', 'Swimming', 'Low-impact cardio']
};

const nutritionByPhase = {
  menstrual: ['Iron-rich foods', 'Warm soups', 'Dark chocolate'],
  follicular: ['Lean proteins', 'Leafy greens', 'Fermented foods'],
  ovulation: ['Complex carbs', 'Antioxidants', 'Healthy fats'],
  luteal: ['Magnesium-rich foods', 'Omega-3s', 'Calming teas']
};

function WeeklyView() {
  const days = [
    { 
      name: 'Monday',
      phase: 'follicular',
      workout: workoutsByPhase.follicular[0],
      nutrition: nutritionByPhase.follicular[0],
      energy: 'High'
    },
    {
      name: 'Tuesday',
      phase: 'follicular',
      workout: workoutsByPhase.follicular[1],
      nutrition: nutritionByPhase.follicular[1],
      energy: 'High'
    },
    {
      name: 'Wednesday',
      phase: 'follicular',
      workout: workoutsByPhase.follicular[2],
      nutrition: nutritionByPhase.follicular[2],
      energy: 'Moderate'
    },
    {
      name: 'Thursday',
      phase: 'ovulation',
      workout: workoutsByPhase.ovulation[0],
      nutrition: nutritionByPhase.ovulation[0],
      energy: 'Peak'
    },
    {
      name: 'Friday',
      phase: 'ovulation',
      workout: workoutsByPhase.ovulation[1],
      nutrition: nutritionByPhase.ovulation[1],
      energy: 'High'
    },
    {
      name: 'Saturday',
      phase: 'ovulation',
      workout: workoutsByPhase.ovulation[2],
      nutrition: nutritionByPhase.ovulation[2],
      energy: 'Moderate'
    },
    {
      name: 'Sunday',
      phase: 'luteal',
      workout: workoutsByPhase.luteal[0],
      nutrition: nutritionByPhase.luteal[0],
      energy: 'Moderate'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Weekly Schedule</h2>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-gray-500">March 11-17, 2024</span>
          </div>
        </div>

        <div className="space-y-6">
          {days.map((day, index) => (
            <div key={day.name} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">{day.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  index === 0 ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {index === 0 ? 'Today' : day.phase}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Activity className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <p className="font-medium">Workout</p>
                    <p className="text-sm text-gray-600">{day.workout}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Utensils className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Nutrition Focus</p>
                    <p className="text-sm text-gray-600">{day.nutrition}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <p className="font-medium">Energy Level</p>
                    <p className="text-sm text-gray-600">{day.energy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyView;