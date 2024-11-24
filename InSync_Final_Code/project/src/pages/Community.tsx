import React from 'react';
import { MessageSquare, Users, Heart, Share2 } from 'lucide-react';

function Community() {
  const posts = [
    {
      id: 1,
      author: "Vaishnavi Rathi",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      content: "Just completed my first workout during my follicular phase and feeling amazing! The energy boost is real 💪",
      likes: 24,
      comments: 8,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Samyucktha Ganesapandian",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
      content: "Looking for workout buddies in the Mohali area! Let's support each other through our fitness journeys 🏃‍♀️",
      likes: 15,
      comments: 12,
      time: "4 hours ago"
    },
    {
      id: 3,
      author: "Nandana Mandal",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
      content: "Sharing my favorite high-protein recipes for the luteal phase. Check out my blog post!",
      likes: 42,
      comments: 16,
      time: "6 hours ago"
    }
  ];

  const groups = [
    { name: "Beginners Support", members: 1243 },
    { name: "PCOS Warriors", members: 856 },
    { name: "Nutrition & Recipes", members: 2105 },
    { name: "Workout Motivation", members: 1678 }
  ];

  return (
    <div className="space-y-6">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6 text-rose-500" />
            <div>
              <p className="text-sm text-gray-500">Active Members</p>
              <p className="text-2xl font-semibold">12,458</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-6 w-6 text-rose-500" />
            <div>
              <p className="text-sm text-gray-500">Daily Posts</p>
              <p className="text-2xl font-semibold">342</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3">
            <Heart className="h-6 w-6 text-rose-500" />
            <div>
              <p className="text-sm text-gray-500">Support Given</p>
              <p className="text-2xl font-semibold">8.5K</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feed */}
        <div className="md:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex space-x-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Your avatar"
                className="h-10 w-10 rounded-full"
              />
              <button className="flex-1 text-left px-4 py-2 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100">
                Share your thoughts...
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-rose-500">
                  <Heart className="h-5 w-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-rose-500">
                  <MessageSquare className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-rose-500">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Groups */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Popular Groups</h2>
            <div className="space-y-4">
              {groups.map((group) => (
                <div key={group.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{group.name}</p>
                    <p className="text-sm text-gray-500">{group.members} members</p>
                  </div>
                  <button className="px-4 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-medium hover:bg-rose-100">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;