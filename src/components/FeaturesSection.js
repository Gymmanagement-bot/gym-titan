'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: '💪',
      title: 'Strength Training',
      description: 'Build muscle and increase your power with expert-designed programs.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '🏃',
      title: 'Cardio Fitness',
      description: 'Boost your endurance and cardiovascular health with dynamic workouts.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🧘',
      title: 'Yoga & Recovery',
      description: 'Enhance flexibility and mental wellness through guided sessions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🥊',
      title: 'Combat Training',
      description: 'Learn self-defense and build confidence with martial arts.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: '🍎',
      title: 'Nutrition Plans',
      description: 'Get personalized meal plans to fuel your fitness journey.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your achievements with advanced analytics and metrics.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">OUR SERVICES</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Everything You Need to </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            From cutting-edge equipment to personalized coaching, we provide comprehensive
            solutions for your fitness goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Card Background with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 group-hover:scale-105"></div>
              
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>

              {/* Card Content */}
              <div className="relative p-8 rounded-2xl backdrop-blur-sm">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-4xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <span className="animate-bounce-slow">{feature.icon}</span>
                  </div>
                  
                  {/* Animated Dots */}
                  <div className="absolute -top-2 -right-2 flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping delay-150"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="text-sm font-semibold mr-2">Learn More</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                       style={{
                         maskImage: 'linear-gradient(transparent, transparent, transparent, black)',
                         WebkitMaskImage: 'linear-gradient(transparent, transparent, transparent, black)',
                       }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Explore All Features</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
