'use client';

import { useEffect, useRef, useState } from 'react';

export default function BenefitsSection() {
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

  const benefits = [
    {
      title: 'Save 15+ Hours Weekly',
      description: 'Automate repetitive tasks and focus on growing your business.',
      stat: '15hrs',
      color: 'from-orange-600 to-orange-500',
    },
    {
      title: 'Increase Revenue by 40%',
      description: 'Better retention, automated renewals, and reduced payment delays.',
      stat: '+40%',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Reduce Member Churn',
      description: 'Engagement tools and timely reminders keep members active.',
      stat: '-25%',
      color: 'from-orange-600 to-orange-500',
    },
    {
      title: 'Zero Payment Hassles',
      description: 'Automated billing eliminates manual follow-ups and errors.',
      stat: '100%',
      color: 'from-sky-500 to-cyan-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">WHY GYM OWNERS LOVE US</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Stop Wasting Time on </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Manual Work
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Gym Titan eliminates administrative burden so you can focus on what matters - your members and business growth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 p-6 overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative text-center">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500`}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      {index === 0 && <path d="M13 10V3L4 14h7v7l9-11h-7z" />}
                      {index === 1 && <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {index === 2 && <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                      {index === 3 && <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    </svg>
                  </div>

                  {/* Stat */}
                  <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Gym Titan */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl border border-red-500/30 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-2xl mr-4">
                  ❌
                </div>
                <h3 className="text-2xl font-bold text-white">Without Gym Titan</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Manual attendance registers',
                  'Excel sheets for member data',
                  'Chasing payments manually',
                  'Missing renewal opportunities',
                  'No real-time insights',
                  'Limited member engagement',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Gym Titan */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 rounded-2xl border border-green-500/30 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl mr-4">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-white">With Gym Titan</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Automated biometric tracking',
                  'Centralized cloud database',
                  'Auto-payment collection',
                  'Smart renewal reminders',
                  'Live business analytics',
                  'Member app & notifications',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
