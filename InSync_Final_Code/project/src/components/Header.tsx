import React from 'react';
import { Bell, User } from 'lucide-react';

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
        </button>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <User className="h-6 w-6" />
          <span>Profile</span>
        </button>
      </div>
    </header>
  );
}

export default Header;