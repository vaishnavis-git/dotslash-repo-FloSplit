import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Brain, Sparkles } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-semibold text-gray-900">InSync</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-rose-500">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-rose-500">How it works</a>
              <Link to="/onboarding" className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-rose-50 to-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Be InSync With<br />
            <span className="text-rose-500">Your Body's Rhythm</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
            Everyone knows about Bro Splits and PPL routines. But ladies, why follow exercise programs designed for men's bodies? It's time for a change.
          </p>
          <Link to="/onboarding" className="inline-flex items-center bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            Start Your Journey
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Problem & Solution Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-rose-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-rose-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Problem</h2>
              <p className="text-gray-600 leading-relaxed">
                Ever wondered why some days you're unstoppable—lifting heavy, pushing hard—and other days, everything feels like a struggle? That's because most exercise research relies on male subjects. Following these programs leaves many women feeling drained, demotivated, or even injured.
              </p>
            </div>

            {/* Solution Card */}
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-rose-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-rose-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Solution</h2>
              <p className="text-gray-600 leading-relaxed">
                InSync adapts to your body's natural rhythm, helping you move with your energy levels rather than against them. From high-intensity workouts when you're feeling powerful to restorative activities when you need recovery, every recommendation is tailored to your body's current needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose InSync?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Adaptive Training",
                description: "Workouts that adapt to your body's natural energy levels for optimal results."
              },
              {
                icon: Brain,
                title: "Holistic Wellness",
                description: "Personalized nutrition and recovery recommendations that evolve with you."
              },
              {
                icon: Sparkles,
                title: "Smart Insights",
                description: "Track patterns and get data-driven recommendations for your unique body."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 transform hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-rose-100 text-rose-500 mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-rose-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Become the Expert of Your Own Body</h2>
          <p className="text-xl mb-8 text-rose-100 max-w-3xl mx-auto">
            Every workout, meal, and mood log brings you closer to a healthier, more balanced version of yourself. Start your journey with InSync today and embrace a wellness routine designed with you, for you.
          </p>
          <Link to="/onboarding" className="inline-flex items-center bg-white text-rose-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            Begin Your Journey
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;