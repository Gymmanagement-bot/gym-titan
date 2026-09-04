'use client';

import { useEffect, useRef, useState } from 'react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const galleryItems = [
    {
      title: 'Strength Zone',
      description: 'Premium equipment for maximum gains',
      icon: '🏋️',
      category: 'Equipment',
      color: 'from-red-600 to-orange-500',
    },
    {
      title: 'Cardio Arena',
      description: 'State-of-the-art cardio machines',
      icon: '🏃',
      category: 'Cardio',
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Group Classes',
      description: 'High-energy group training sessions',
      icon: '🤸',
      category: 'Classes',
      color: 'from-purple-600 to-pink-500',
    },
    {
      title: 'Boxing Ring',
      description: 'Professional combat training area',
      icon: '🥊',
      category: 'Combat',
      color: 'from-yellow-600 to-orange-500',
    },
    {
      title: 'Yoga Studio',
      description: 'Peaceful space for mind and body',
      icon: '🧘',
      category: 'Wellness',
      color: 'from-green-600 to-emerald-500',
    },
    {
      title: 'Recovery Zone',
      description: 'Sauna, steam room & massage',
      icon: '💆',
      category: 'Recovery',
      color: 'from-indigo-600 to-purple-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">OUR FACILITIES</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Where Champions </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Are Made
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Explore our world-class facilities designed to elevate your fitness journey.
          </p>
        </div>

        {/* Gallery Grid - Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Large Featured Item */}
          <div
            className={`md:col-span-2 md:row-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div
              className="group relative h-full min-h-[400px] bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${galleryItems[0].color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end">
                {/* Background Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-10 group-hover:scale-110 transition-transform duration-500">
                  {galleryItems[0].icon}
                </div>

                {/* Category Badge */}
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r ${galleryItems[0].color} text-white text-sm font-bold shadow-lg`}>
                  {galleryItems[0].category}
                </div>

                {/* Animated Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {hoveredIndex === 0 && [...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-500 rounded-full animate-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                  <div className={`w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br ${galleryItems[0].color} flex items-center justify-center text-5xl shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                    {galleryItems[0].icon}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {galleryItems[0].title}
                  </h3>
                  <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {galleryItems[0].description}
                  </p>
                  
                  {/* View Button */}
                  <button className={`mt-6 px-6 py-3 rounded-lg bg-gradient-to-r ${galleryItems[0].color} text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 opacity-0 group-hover:opacity-100`}>
                    <span>Explore</span>
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
              </div>
            </div>
          </div>

          {/* Smaller Grid Items */}
          {galleryItems.slice(1).map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div
                className="group relative h-full min-h-[190px] bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Background Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>

                  {/* Category Badge */}
                  <div className={`self-start px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold`}>
                    {item.category}
                  </div>

                  {/* Title & Icon */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Animated Sparkles */}
                  {hoveredIndex === index + 1 && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-orange-500 rounded-full animate-sparkle"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlights */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            {
              icon: '🏗️',
              title: '50,000 sq ft',
              description: 'Spacious training area',
              color: 'from-orange-600 to-red-500',
            },
            {
              icon: '⚙️',
              title: 'Latest Equipment',
              description: 'Top-tier machines & tools',
              color: 'from-blue-600 to-cyan-500',
            },
            {
              icon: '🧼',
              title: 'Spotless Clean',
              description: 'Sanitized every hour',
              color: 'from-green-600 to-emerald-500',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
              <div className="text-center">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Schedule a Tour</span>
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
