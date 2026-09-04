'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '1000+', label: 'Gyms Using' },
    { number: '50K+', label: 'Members Managed' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      {/* Floating Orange Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">
                #1 Gym Management Software
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Complete Gym Management
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent animate-gradient">
                For Your Entire Team
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-gray-400 max-w-2xl transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Powerful role-based system where Admin controls everything, Receptionist enrolls members, Cashier handles payments - all from one platform. Manage packages, generate receipts, and track every operation seamlessly.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start 14-Day Free Trial</span>
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

              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Animated Workout Figure */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div
              className="relative w-full aspect-square max-w-lg mx-auto"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Energy Particles */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Main Figure Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-80">
                  {/* Animated Workout Person */}
                  <svg
                    viewBox="0 0 200 300"
                    className="w-full h-full"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(255, 107, 0, 0.4))' }}
                  >
                    {/* Head */}
                    <circle
                      cx="100"
                      cy="40"
                      r="20"
                      fill="url(#headGradient)"
                      className="animate-head-bob"
                    />
                    
                    {/* Body */}
                    <path
                      d="M 100 60 L 100 140"
                      stroke="url(#bodyGradient)"
                      strokeWidth="16"
                      strokeLinecap="round"
                      className="animate-body-flex"
                    />
                    
                    {/* Left Arm - Upper */}
                    <path
                      d="M 100 80 Q 60 90 40 100"
                      stroke="url(#armGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-left-arm-up"
                    />
                    
                    {/* Left Arm - Lower */}
                    <path
                      d="M 40 100 L 30 80"
                      stroke="url(#armGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-left-forearm"
                    />
                    
                    {/* Right Arm - Upper */}
                    <path
                      d="M 100 80 Q 140 90 160 100"
                      stroke="url(#armGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-right-arm-up"
                    />
                    
                    {/* Right Arm - Lower */}
                    <path
                      d="M 160 100 L 170 80"
                      stroke="url(#armGradient)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-right-forearm"
                    />
                    
                    {/* Dumbbell Bar */}
                    <rect
                      x="15"
                      y="75"
                      width="170"
                      height="8"
                      rx="4"
                      fill="url(#dumbbellGradient)"
                      className="animate-dumbbell-lift"
                    />
                    
                    {/* Left Dumbbell Weight */}
                    <g className="animate-dumbbell-lift">
                      <rect x="5" y="65" width="20" height="28" rx="3" fill="#4a5568" />
                      <rect x="8" y="68" width="14" height="22" rx="2" fill="#2d3748" />
                      <line x1="5" y1="79" x2="25" y2="79" stroke="#ff6b00" strokeWidth="2" />
                    </g>
                    
                    {/* Right Dumbbell Weight */}
                    <g className="animate-dumbbell-lift">
                      <rect x="175" y="65" width="20" height="28" rx="3" fill="#4a5568" />
                      <rect x="178" y="68" width="14" height="22" rx="2" fill="#2d3748" />
                      <line x1="175" y1="79" x2="195" y2="79" stroke="#ff6b00" strokeWidth="2" />
                    </g>
                    
                    {/* Left Leg */}
                    <path
                      d="M 100 140 L 80 200 L 75 240"
                      stroke="url(#legGradient)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-leg-stance"
                    />
                    
                    {/* Right Leg */}
                    <path
                      d="M 100 140 L 120 200 L 125 240"
                      stroke="url(#legGradient)"
                      strokeWidth="14"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-leg-stance"
                    />
                    
                    {/* Shoes */}
                    <ellipse cx="75" cy="242" rx="12" ry="6" fill="#ff6b00" className="animate-leg-stance" />
                    <ellipse cx="125" cy="242" rx="12" ry="6" fill="#ff6b00" className="animate-leg-stance" />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      
                      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                      
                      <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      
                      <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      
                      <linearGradient id="dumbbellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6b00" />
                        <stop offset="50%" stopColor="#ff8533" />
                        <stop offset="100%" stopColor="#ff6b00" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Strength Lines Effect */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 w-1 h-16 bg-gradient-to-t from-transparent via-orange-500/60 to-transparent animate-strength-burst"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                          animationDelay: `${i * 0.15}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Motivational Icons Orbiting */}
              <div className="absolute inset-0 animate-spin-slow">
                {['💪', '🔥', '⚡', '🏆'].map((icon, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-14 h-14 -ml-7 -mt-7"
                    style={{
                      transform: `rotate(${i * 90}deg) translateY(-200px)`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center text-3xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-full backdrop-blur-sm border-2 border-orange-500/40 shadow-lg shadow-orange-500/30"
                      style={{
                        transform: `rotate(-${i * 90}deg)`,
                        animation: 'bounce 2s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      {icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Circular Progress Rings */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="rgba(255, 107, 0, 0.1)"
                  strokeWidth="2"
                  className="animate-spin-slow"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  fill="none"
                  stroke="rgba(255, 107, 0, 0.05)"
                  strokeWidth="1"
                  className="animate-spin-reverse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
