'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorksSection() {
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

  const steps = [
    {
      number: '01',
      title: 'Setup Admin Account',
      description: 'Sign up and become the main admin. Get full control of your gym management system with complete access.',
      color: 'from-orange-600 to-orange-500',
      duration: '5 Minutes',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      number: '02',
      title: 'Create Staff Roles',
      description: 'Add your team - Receptionist for front desk, Cashier for payments, Manager for oversight. Set custom permissions.',
      color: 'from-cyan-500 to-blue-500',
      duration: '15 Minutes',
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      number: '03',
      title: 'Configure Packages & Payments',
      description: 'Create membership packages (Monthly/Quarterly/Yearly), set pricing, and connect payment methods.',
      color: 'from-sky-500 to-cyan-500',
      duration: '20 Minutes',
      iconPath: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
    },
    {
      number: '04',
      title: 'Start Operations!',
      description: 'Receptionist enrolls members, Cashier processes payments & prints receipts, Admin monitors everything in real-time.',
      color: 'from-orange-600 to-orange-500',
      duration: 'Instant',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">HOW IT WORKS</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Get Started in </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              4 Easy Steps
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            From signup to going live - we make it simple and quick to transform your gym management.
          </p>
        </div>

        {/* Steps Grid - Clean without connecting line */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {/* Card */}
                <div className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 p-8 h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d={step.iconPath} />
                      </svg>
                    </div>

                    {/* Duration Badge */}
                    <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${step.color} text-white`}>
                      ⏱️ {step.duration}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator - Between cards only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center shadow-lg animate-pulse">
                        <svg
                          className="w-5 h-5 text-white"
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
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-orange-600/20 to-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
            <div className="text-5xl mb-2">🎉</div>
            <h3 className="text-2xl font-bold text-white">
              Ready to Digitize Your Gym?
            </h3>
            <p className="text-gray-400 max-w-md">
              Join 1000+ gym owners who simplified their operations with Gym Titan
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Start Your Free Trial</span>
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
      </div>
    </section>
  );
}
