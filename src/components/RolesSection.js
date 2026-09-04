'use client';

import { useEffect, useRef, useState } from 'react';

export default function RolesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
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

  const roles = [
    {
      title: 'Admin (Gym Owner)',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      description: 'Complete system control and oversight',
      responsibilities: [
        'Create and manage staff roles (Receptionist, Cashier, Manager)',
        'Set permissions and access levels for each role',
        'Create membership packages and pricing',
        'View all reports and analytics',
        'Manage gym settings and configuration',
        'Monitor staff activity and performance',
      ],
      color: 'from-orange-600 to-orange-500',
    },
    {
      title: 'Receptionist',
      icon: 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
      description: 'Front desk operations and member services',
      responsibilities: [
        'Welcome walk-ins and handle inquiries',
        'Register new members with complete details',
        'Schedule gym tours and trial sessions',
        'Update member information and photos',
        'Assign membership packages to members',
        'Handle member queries and support',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Cashier',
      icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
      description: 'Payment processing and receipt generation',
      responsibilities: [
        'Accept cash and online payments from members',
        'Process membership fee payments',
        'Generate and print instant receipts',
        'Mark payments as paid in the system',
        'Track pending dues and follow-ups',
        'Maintain daily cash register',
      ],
      color: 'from-sky-500 to-cyan-500',
    },
    {
      title: 'Manager',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      description: 'Operations oversight and reporting',
      responsibilities: [
        'Monitor daily operations and staff activities',
        'Review revenue and payment reports',
        'Check member attendance patterns',
        'Handle escalated member complaints',
        'Supervise staff performance',
        'Generate management reports for owner',
      ],
      color: 'from-orange-600 to-orange-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="roles"
      className="relative py-24 bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
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
            <span className="text-orange-400 text-sm font-medium">ROLE-BASED SYSTEM</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Every Team Member </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Has a Role
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Create unlimited custom roles beyond these examples. Assign specific responsibilities to your team with granular permissions and access control.
          </p>
        </div>

        {/* Role Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setActiveRole(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeRole === index
                  ? `bg-gradient-to-r ${role.color} text-white shadow-lg scale-105`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {role.title}
            </button>
          ))}
        </div>

        {/* Active Role Content - Horizontal Timeline Design */}
        <div className="relative max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeRole === index
                  ? 'opacity-100 scale-100 relative'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Modern Card Design */}
              <div className="relative bg-gradient-to-br from-[#1a1a2e]/60 to-[#0a0a0f]/60 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden">
                {/* Subtle Glow Effect - Reduced */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${role.color} rounded-3xl blur-xl opacity-5`}></div>

                {/* Top Section - Icon & Title */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  {/* Large Icon */}
                  <div
                    className={`flex-shrink-0 w-28 h-28 rounded-3xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-all duration-500`}
                  >
                    <svg className="w-14 h-14 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={role.icon} />
                    </svg>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-4xl font-bold text-white mb-3">
                      {role.title}
                    </h3>
                    <p className="text-xl text-gray-400">
                      {role.description}
                    </p>
                  </div>
                </div>

                {/* Responsibilities Grid */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                    <span className={`w-1 h-6 bg-gradient-to-b ${role.color} rounded-full mr-3`}></span>
                    Key Responsibilities
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {role.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                      >
                        {/* Number Badge */}
                        <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                          {idx + 1}
                        </div>

                        {/* Content */}
                        <div className="flex items-start space-x-3 ml-2">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {resp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Elements - Reduced opacity */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-5 blur-2xl rounded-full`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${role.color} opacity-5 blur-2xl rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Highlight */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', 
                  title: 'Secure Role Login', 
                  text: 'Each role has unique credentials and session management' 
                },
                { 
                  icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', 
                  title: 'Granular Permissions', 
                  text: 'Control exactly what each role can view, edit, or delete' 
                },
                { 
                  icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', 
                  title: 'Mobile & Desktop Access', 
                  text: 'Manage from anywhere with responsive web and mobile apps' 
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
