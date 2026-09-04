'use client';

import { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner - Fitness First Gym, Mumbai',
      rating: 5,
      text: 'Gym Titan transformed how I run my gym. Automated payments saved me 20+ hours monthly and reduced payment delays by 90%. Best investment for my business!',
      achievement: 'Revenue +35%',
      color: 'from-orange-600 to-orange-500',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      name: 'Priya Sharma',
      role: 'Owner - PowerFit Studio, Delhi',
      rating: 5,
      text: 'Managing 3 branches was a nightmare until Gym Titan. Now I can track everything from one dashboard. Member renewals increased by 40% with automated reminders!',
      achievement: '3 Branches Managed',
      color: 'from-cyan-500 to-blue-500',
      iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      name: 'Arjun Mehta',
      role: 'Owner - Iron Paradise, Bangalore',
      rating: 5,
      text: 'The analytics feature is a game-changer! I can see exactly which packages work best and when members are most active. Made data-driven decisions that doubled my profit.',
      achievement: 'Profit Doubled',
      color: 'from-sky-500 to-cyan-500',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      name: 'Neha Gupta',
      role: 'Owner - FitZone Gym, Pune',
      rating: 5,
      text: 'Setting up was so easy! The team helped migrate all my data in just 2 days. Members love the app for booking classes and tracking their progress. Highly recommend!',
      achievement: 'Setup in 2 Days',
      color: 'from-orange-600 to-orange-500',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      name: 'Vikram Singh',
      role: 'Owner - Muscle Factory, Hyderabad',
      rating: 5,
      text: 'I was skeptical about software, but Gym Titan proved me wrong. The WhatsApp reminders alone recovered 50+ lapsed memberships. Support team is incredibly helpful!',
      achievement: '+50 Renewals',
      color: 'from-blue-500 to-cyan-500',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Floating Quote Marks */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl text-orange-500">"</div>
        <div className="absolute bottom-20 right-10 text-9xl text-orange-500 rotate-180">"</div>
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
            <span className="text-orange-400 text-sm font-medium">SUCCESS STORIES</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Trusted by </span>
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              1000+ Gym Owners
            </span>
          </h2>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            See how gym owners across India are growing their business with Gym Titan.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12 overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-30`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Stars Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-8 h-8 text-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-medium">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mb-4 shadow-lg animate-bounce-slow`}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d={testimonial.iconPath} />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm mb-3">
                          {testimonial.role}
                        </div>
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.color} text-white text-sm font-bold shadow-lg`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{testimonial.achievement}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer for absolute positioned cards */}
          <div className="h-[500px] md:h-[450px]"></div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots - Moved Outside Card Container */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 z-30 ${
                index === activeIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-600 to-orange-400'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              } rounded-full`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { 
              value: '4.9/5', 
              label: 'Average Rating',
              iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
            },
            { 
              value: '1,000+', 
              label: 'Gyms Using',
              iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
            },
            { 
              value: '98%', 
              label: 'Would Recommend',
              iconPath: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5',
            },
            { 
              value: '40%', 
              label: 'Avg Revenue Growth',
              iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d={stat.iconPath} />
                  </svg>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
