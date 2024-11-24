import React from 'react';
import { Bell, Lock, User, Smartphone, Moon, Globe } from 'lucide-react';

function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>
        
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
              alt="Profile"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h3 className="font-medium">Vaishnavi Rathi</h3>
              <p className="text-sm text-gray-500">vaishnavi.rathi@plakshed.edu.in</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium hover:bg-rose-100">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Settings List */}
        <div className="divide-y divide-gray-200">
          {[
            {
              icon: Bell,
              title: 'Notifications',
              description: 'Manage your notification preferences',
              action: (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
              )
            },
            {
              icon: Lock,
              title: 'Privacy',
              description: 'Control your privacy settings',
              action: (
                <button className="text-gray-500 hover:text-gray-700">
                  Manage
                </button>
              )
            },
            {
              icon: Smartphone,
              title: 'Connected Devices',
              description: 'Manage your connected devices and apps',
              action: (
                <button className="text-gray-500 hover:text-gray-700">
                  View All
                </button>
              )
            },
            {
              icon: Moon,
              title: 'Dark Mode',
              description: 'Toggle dark mode appearance',
              action: (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-rose-500 focus:ring-rose-500 border-gray-300 rounded"
                  />
                </div>
              )
            },
            {
              icon: Globe,
              title: 'Language',
              description: 'Change your preferred language',
              action: (
                <select className="form-select text-sm text-gray-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              )
            }
          ].map((setting, index) => (
            <div key={index} className="p-6 flex items-center">
              <setting.icon className="h-5 w-5 text-gray-400" />
              <div className="ml-4">
                <p className="font-medium">{setting.title}</p>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
              <div className="ml-auto">{setting.action}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;