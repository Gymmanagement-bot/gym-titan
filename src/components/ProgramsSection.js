'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const programs = [
    {
      title: 'Muscle Building',
      duration: '12 Weeks',
      level: 'Intermediate',
      sessions: '4-5/week',
      description: 'Intensive hypertrophy program designed to maximize muscle growth.',
      features: [
        'Progressive overload training',
        'Compound & isolation exercises',
        'Nutrition guidance included',
        'Weekly progress tracking',
      ],
      image: '🏋️',
      color: 'from-red-600 to-orange-500',
      borderColor: 'border-red-500/30',
      hoverBorder: 'group-hover:border-red-500',
    },
    {
      title: 'Fat Loss Transform',
      duration: '8 Weeks',
      level: 'All Levels',
      sessions: '5-6/week',
      description: 'High-intensity program combining cardio and resistance training.',
      features: [
        'HIIT & circuit training',
        'Metabolic conditioning',
        'Custom meal plans',
        'Body composition analysis',
      ],
      image: '🔥',
      color: 'from-orange-600 to-yellow-500',
      borderColor: 'border-orange-500/30',
      hoverBorder: 'group-hover:border-orange-500',
    },
    {
      title: 'Athletic Performance',
      duration: '16 Weeks',
      level: 'Advanced',
      sessions: '6/week',
      description: 'Elite training for athletes seeking peak performance.',
      features: [
        'Sport-specific exercises',
        'Agility & speed training',
        'Recovery protocols',
        'Performance testing',
      ],
      image: '⚡',
      color: 'from-blue-600 to-cyan-500',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'group-hover:border-blue-500',
    },
    {
      title: 'Beginner Foundation',
      duration: '6 Weeks',
      level: 'Beginner',
      sessions: '3-4/week',
      description: 'Perfect introduction to fitness with fundamental movements.',
      features: [
        'Form & technique focus',
        'Full-body workouts',
        'Habit formation coaching',
        'Personalized guidance',
      ],
      image: '🌟',
      color: 'from-green-600 to-emerald-500',
      borderColor: 'border-green-500/30',
      hoverBorder: 'group-hover:border-green-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">TRAINING PROGRAMS</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Choose Your </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Scientifically designed programs tailored to your fitness level and goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              {/* Card Container */}
              <div
                className={`relative h-full bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border ${program.borderColor} ${program.hoverBorder} transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:shadow-2xl`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${program.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon & Level Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 transition-all duration-500`}
                    >
                      {program.image}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${program.color} text-white`}>
                      {program.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {program.title}
                  </h3>

                  {/* Duration & Sessions */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>{program.sessions}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${program.color} text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <span>Get Started</span>
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
                  </button>
                </div>

                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-orange-600/20 to-orange-500/10 border border-orange-500/30 backdrop-blur-sm transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { number: '50+', label: 'Training Programs', icon: '📋' },
            { number: '95%', label: 'Success Rate', icon: '🎯' },
            { number: '10k+', label: 'Completed Sessions', icon: '✅' },
            { number: '24/7', label: 'Support Access', icon: '💬' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
