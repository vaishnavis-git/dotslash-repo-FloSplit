import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, LayoutDashboard, Calendar, BarChart2, BookOpen, Users, Settings } from 'lucide-react';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Weekly View', to: '/weekly', icon: Calendar },
  { name: 'Monthly View', to: '/monthly', icon: BarChart2 },
  { name: 'Education Hub', to: '/education', icon: BookOpen },
  { name: 'Community', to: '/community', icon: Users },
  { name: 'Settings', to: '/settings', icon: Settings },
];

function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Heart className="h-8 w-8 text-rose-500" />
        <span className="ml-2 text-xl font-semibold text-gray-900">InSync</span>
      </div>
      <nav className="mt-6 px-3">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1',
                isActive
                  ? 'bg-rose-50 text-rose-500'
                  : 'text-gray-700 hover:bg-gray-50'
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;