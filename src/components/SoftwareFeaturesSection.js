'use client';

import { useEffect, useRef, useState } from 'react';

export default function SoftwareFeaturesSection() {
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
      title: 'Role-Based Access Control',
      description: 'Create unlimited staff roles - Admin, Receptionist, Cashier, Manager. Each role has specific permissions and access levels.',
      benefits: ['Custom role creation', 'Permission management', 'Multi-user login', 'Activity tracking'],
      color: 'from-orange-600 to-orange-500',
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      title: 'Front Desk Operations',
      description: 'Receptionists handle walk-ins, member registrations, inquiries, and tour bookings from a dedicated dashboard.',
      benefits: ['Member enrollment', 'Visitor management', 'Inquiry tracking', 'Tour scheduling'],
      color: 'from-cyan-500 to-blue-500',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      title: 'Payment & Billing',
      description: 'Process cash and online payments, generate instant receipts, track dues, and manage payment history.',
      benefits: ['Cash & online payments', 'Auto receipt generation', 'Due tracking', 'Payment history'],
      color: 'from-orange-600 to-orange-500',
      iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Member Management',
      description: 'Complete member profiles with photos, documents, packages, attendance logs, and payment records.',
      benefits: ['Digital member cards', 'Document storage', 'Package assignment', 'Complete history'],
      color: 'from-sky-500 to-cyan-500',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      title: 'Package & Plans',
      description: 'Create flexible membership packages - monthly, quarterly, yearly. Set custom pricing and validity periods.',
      benefits: ['Custom packages', 'Flexible pricing', 'Validity management', 'Package upgrades'],
      color: 'from-blue-500 to-cyan-500',
      iconPath: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
    },
    {
      title: 'Reports & Analytics',
      description: 'Real-time dashboards for revenue, member growth, attendance trends, and staff performance.',
      benefits: ['Revenue reports', 'Member analytics', 'Staff performance', 'Custom reports'],
      color: 'from-orange-600 to-orange-500',
      iconPath: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">POWERFUL FEATURES</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Everything You Need to </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Run Your Gym
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            From member onboarding to payments and analytics - manage every aspect of your gym business from one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 p-8">
                {/* Hover Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={feature.iconPath} />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <svg
                          className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
