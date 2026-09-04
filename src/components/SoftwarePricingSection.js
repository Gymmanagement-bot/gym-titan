'use client';

import { useEffect, useRef, useState } from 'react';

export default function SoftwarePricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
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

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      annualPrice: 490,
      description: 'Perfect for small gyms and fitness studios',
      members: 'Up to 100 Members',
      features: [
        'Member management',
        'Attendance tracking',
        'Basic payment processing',
        'Email notifications',
        'Mobile app access',
        'Basic reports',
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'Most popular for growing fitness businesses',
      members: 'Up to 500 Members',
      features: [
        'Everything in Starter',
        'Biometric integration',
        'Auto-recurring payments',
        'SMS & WhatsApp alerts',
        'Advanced analytics',
        'Staff management',
        'Custom branding',
        'API access',
      ],
      color: 'from-orange-600 to-orange-500',
      popular: true,
      iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      annualPrice: 1990,
      description: 'For large gyms and multi-location chains',
      members: 'Unlimited Members',
      features: [
        'Everything in Professional',
        'Multi-branch support',
        'Priority support 24/7',
        'Custom integrations',
        'Dedicated account manager',
        'White-label solution',
        'Advanced security',
        'Custom features',
      ],
      color: 'from-sky-500 to-cyan-500',
      popular: false,
      iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-24 bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
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
            <span className="text-orange-400 text-sm font-medium">SIMPLE PRICING</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Choose Your </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            No hidden fees. No setup charges. Start with 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div
            className={`inline-flex items-center space-x-4 p-1 bg-white/5 border border-white/10 rounded-full transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${plan.popular ? 'md:-mt-8' : ''}`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`group relative h-full bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'border-orange-500/50 hover:border-orange-500 scale-105 shadow-2xl shadow-orange-500/20'
                    : 'border-white/10 hover:border-orange-500/30 hover:scale-105'
                }`}
              >
                {/* Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={plan.iconPath} />
                    </svg>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Member Limit */}
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${plan.color} text-white`}>
                      {plan.members}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-400 mt-2">
                        Save ${plan.monthlyPrice * 12 - plan.annualPrice}/year
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white`
                        : 'bg-white/5 text-white border-2 border-white/10 hover:border-orange-500'
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { icon: '✅', text: '14-Day Free Trial' },
            { icon: '🔒', text: 'No Credit Card Required' },
            { icon: '📞', text: 'Free Onboarding' },
            { icon: '💯', text: '30-Day Money Back' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 p-4 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm text-gray-300 font-semibold">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
