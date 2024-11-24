import React from 'react';
import { BookOpen, Play, Award } from 'lucide-react';

function Education() {
  const articles = [
    {
      title: "Understanding Your Menstrual Cycle",
      category: "Hormonal Health",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Nutrition for Each Cycle Phase",
      category: "Nutrition",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Optimizing Workouts for Your Cycle",
      category: "Fitness",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Featured Course */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl shadow-sm p-8 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Featured Course</h2>
            <h3 className="text-3xl font-bold mb-4">Mastering Cycle Syncing</h3>
            <p className="text-rose-100 mb-6">Learn how to optimize your lifestyle according to your menstrual cycle phases.</p>
            <button className="bg-white text-rose-500 px-6 py-2 rounded-full font-medium hover:bg-rose-50">
              Start Learning
            </button>
          </div>
          <div className="hidden md:block">
            <Play className="h-16 w-16" />
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm text-rose-500 font-medium">{article.category}</span>
              <h3 className="font-semibold mt-2 group-hover:text-rose-500">{article.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{article.readTime}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Learning Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-5 w-5 text-rose-500" />
            <h2 className="text-lg font-semibold">Learning Paths</h2>
          </div>
          <div className="space-y-4">
            {['Beginner\'s Guide', 'Nutrition Mastery', 'Fitness Fundamentals'].map((path, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-rose-50 cursor-pointer">
                <span>{path}</span>
                <Award className="h-5 w-5 text-rose-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Play className="h-5 w-5 text-rose-500" />
            <h2 className="text-lg font-semibold">Video Tutorials</h2>
          </div>
          <div className="space-y-4">
            {['Understanding Your Body', 'Workout Techniques', 'Meal Planning'].map((video, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-rose-50 cursor-pointer">
                <span>{video}</span>
                <Play className="h-5 w-5 text-rose-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;