'use client';

import { useEffect, useRef, useState } from 'react';

export default function PricingSection() {
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
      icon: '🌱',
      monthlyPrice: 29,
      annualPrice: 290,
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker room access',
        'Mobile app access',
        '2 guest passes per month',
      ],
      color: 'from-green-600 to-emerald-500',
      popular: false,
    },
    {
      name: 'Pro',
      icon: '⚡',
      monthlyPrice: 59,
      annualPrice: 590,
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Starter',
        'Unlimited group classes',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Priority booking',
        'Sauna & steam room',
        '5 guest passes per month',
      ],
      color: 'from-orange-600 to-orange-500',
      popular: true,
    },
    {
      name: 'Elite',
      icon: '👑',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'Ultimate experience with premium perks',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Custom meal planning',
        'Recovery & massage therapy',
        '24/7 gym access',
        'Private locker',
        'Unlimited guest passes',
        'VIP lounge access',
      ],
      color: 'from-purple-600 to-pink-500',
      popular: false,
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
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
            <span className="text-orange-400 text-sm font-medium">MEMBERSHIP PLANS</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Invest in Your </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Future
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Choose the perfect plan that fits your goals and lifestyle.
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
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div
                className={`group relative h-full bg-gradient-to-b from-white/5 to-white/0 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  plan.popular
                    ? 'border-orange-500/50 hover:border-orange-500 scale-105 shadow-2xl shadow-orange-500/20'
                    : 'border-white/10 hover:border-orange-500/30 hover:scale-105'
                }`}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                  >
                    {plan.icon}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

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
                        Save ${plan.monthlyPrice * 12 - plan.annualPrice} per year!
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${plan.color} rounded-full p-1`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path d="M5 13l4 4L19 7" />
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
                    {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                  </button>
                </div>

                {/* Animated Particles */}
                {plan.popular && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-500 rounded-full animate-sparkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-600/20 to-emerald-500/20 border border-green-500/30 rounded-full">
            <div className="text-3xl">✅</div>
            <div className="text-left">
              <div className="text-white font-bold">30-Day Money Back Guarantee</div>
              <div className="text-sm text-gray-400">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
