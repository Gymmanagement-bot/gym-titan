'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">ABOUT US</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
                Gym Titan
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Empowering gym owners across India with intelligent management solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef} className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 text-sm font-medium">OUR STORY</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why We Built <span className="text-orange-500">Gym Titan</span>
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Running a gym is challenging. Between managing memberships, tracking payments, 
                  handling walk-ins, and overseeing staff, gym owners were drowning in paperwork 
                  and manual processes.
                </p>
                <p>
                  We saw gym owners spending <span className="text-orange-400 font-semibold">20+ hours weekly</span> on 
                  administrative tasks that could be automated. Payment tracking was chaotic, member 
                  data was scattered across notebooks, and revenue insights were non-existent.
                </p>
                <p className="text-white font-medium text-lg">
                  That's why we created Gym Titan — to give gym owners their time back and help 
                  them focus on what matters: growing their business and serving their members.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '1000+', label: 'Gyms Powered', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                  { number: '50K+', label: 'Members Managed', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                  { number: '₹10Cr+', label: 'Revenue Tracked', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { number: '98%', label: 'Satisfaction Rate', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="relative group"
                  >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d={stat.icon} />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">WHY GYM TITAN</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why We're <span className="text-orange-500">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Built by Gym Owners, For Gym Owners',
                description: 'We understand your pain points because we have been there. Every feature solves a real problem faced by gym owners daily.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                color: 'from-orange-600 to-orange-500',
              },
              {
                title: 'Powerful Yet Simple',
                description: 'Advanced features packaged in an intuitive interface. No technical knowledge required — if you can use WhatsApp, you can use Gym Titan.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Dedicated Support Team',
                description: 'We do not just sell software — we partner with you. Our support team is available via call, WhatsApp, and email to help you succeed.',
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                color: 'from-sky-500 to-cyan-500',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}>
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by Codeverza Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">DEVELOPED BY</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powered by <span className="text-orange-500">Codeverza</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Gym Titan is proudly developed by Codeverza — a team of passionate developers 
            dedicated to creating innovative software solutions that drive business growth.
          </p>

          <div className="flex flex-col items-center space-y-8">
            {/* Codeverza Logo */}
            <Link 
              href="https://codeverza.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="relative w-48 h-48 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/img/codeverza-logo.png"
                  alt="Codeverza Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(255,107,0,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </Link>

            {/* CTA */}
            <Link
              href="https://codeverza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
            >
              <span>Visit Codeverza</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-orange-500">Gym?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 1000+ gym owners who trust Gym Titan to manage their business
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
