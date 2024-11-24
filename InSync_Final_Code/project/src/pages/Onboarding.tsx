import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Apple, Brain, Calendar, Clock, Target, Heart } from 'lucide-react';

function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    fitnessLevel: '',
    dietPreference: '',
    commitmentHours: '',
    conditions: [],
    goals: [],
    cycleLength: '28',
    periodLength: '5',
    lastPeriod: ''
  });

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Here you would typically submit the data to your backend
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((number) => (
            <div key={number} className="flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step >= number ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {number}
              </div>
              {number < 5 && (
                <div className={`w-16 h-1 ${
                  step > number ? 'bg-rose-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Fitness & Time Commitment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Level</label>
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleInputChange({ target: { name: 'fitnessLevel', value: level }})}
                      className={`flex items-center w-full p-4 mb-2 border rounded-lg hover:border-rose-500 hover:bg-rose-50 ${
                        formData.fitnessLevel === level ? 'border-rose-500 bg-rose-50' : ''
                      }`}
                    >
                      <Activity className="h-5 w-5 text-rose-500 mr-3" />
                      {level}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Time Commitment</label>
                  <select
                    name="commitmentHours"
                    value={formData.commitmentHours}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  >
                    <option value="">Select hours per week</option>
                    <option value="1-2">1-2 hours</option>
                    <option value="3-4">3-4 hours</option>
                    <option value="5-6">5-6 hours</option>
                    <option value="7+">7+ hours</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Health Conditions</h2>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Select any conditions that apply:</p>
                {[
                  'PCOS',
                  'Endometriosis',
                  'Thyroid Issues',
                  'Irregular Cycles',
                  'None'
                ].map((condition) => (
                  <button
                    key={condition}
                    onClick={() => handleMultiSelect('conditions', condition)}
                    className={`flex items-center w-full p-4 border rounded-lg hover:border-rose-500 hover:bg-rose-50 ${
                      formData.conditions.includes(condition) ? 'border-rose-500 bg-rose-50' : ''
                    }`}
                  >
                    <Heart className="h-5 w-5 text-rose-500 mr-3" />
                    {condition}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Goals</h2>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">Select all that apply:</p>
                {[
                  'Better Sleep',
                  'Energy Boost',
                  'Weight Loss',
                  'Strength Building',
                  'Flexibility',
                  'Stress Management',
                  'Hormone Balance',
                  'Regular Cycles'
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleMultiSelect('goals', goal)}
                    className={`flex items-center w-full p-4 border rounded-lg hover:border-rose-500 hover:bg-rose-50 ${
                      formData.goals.includes(goal) ? 'border-rose-500 bg-rose-50' : ''
                    }`}
                  >
                    <Target className="h-5 w-5 text-rose-500 mr-3" />
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Cycle Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Period Start Date</label>
                  <input
                    type="date"
                    name="lastPeriod"
                    value={formData.lastPeriod}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Average Cycle Length</label>
                  <select
                    name="cycleLength"
                    value={formData.cycleLength}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={25 + i}>
                        {25 + i} days
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Average Period Length</label>
                  <select
                    name="periodLength"
                    value={formData.periodLength}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  >
                    {[...Array(7)].map((_, i) => (
                      <option key={i} value={3 + i}>
                        {3 + i} days
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={handleNext}
              className="w-full bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors"
            >
              {step === 5 ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;