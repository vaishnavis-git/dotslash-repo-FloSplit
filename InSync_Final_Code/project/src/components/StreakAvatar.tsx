import React from 'react';
import { Trophy, Calendar, Flame } from 'lucide-react';

interface StreakAvatarProps {
  streak: number;
  totalDays: number;
  level: number;
}

const StreakAvatar: React.FC<StreakAvatarProps> = ({ streak, totalDays, level }) => {
  const getAvatarFrame = () => {
    if (level >= 10) return 'border-purple-500 shadow-purple-500/50';
    if (level >= 5) return 'border-rose-500 shadow-rose-500/50';
    return 'border-blue-500 shadow-blue-500/50';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center space-x-4">
        <div className={`relative rounded-full border-4 ${getAvatarFrame()} shadow-lg p-1`}>
          <img
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${level}`}
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
            {level}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">{streak} Day Streak!</span>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{totalDays} Total Days</span>
            </div>
            <div className="flex items-center">
              <Trophy className="h-4 w-4 mr-1" />
              <span>Level {level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="text-sm text-gray-600">Next reward in: 3 days</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-rose-500 h-2 rounded-full"
            style={{ width: `${(streak % 7) * 14.28}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StreakAvatar;