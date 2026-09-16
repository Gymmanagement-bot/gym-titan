'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SoftwareFeaturesSection from '@/components/SoftwareFeaturesSection';
import RolesSection from '@/components/RolesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SoftwarePricingSection from '@/components/SoftwarePricingSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    
    // Wait for rocket transformation and fire to show (2 seconds)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 2000);

    // Reset after complete animation (5 seconds)
    setTimeout(() => {
      setIsLaunching(false);
    }, 5000);
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData />
      
      <main className="min-h-screen relative" itemScope itemType="https://schema.org/WebPage">
        <Navbar />
        <HeroSection />
        <SoftwareFeaturesSection />
        <RolesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        {/* <SoftwarePricingSection /> */}
        <Footer />

      {/* Rocket Scroll to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all ${
          showScrollTop && !isLaunching
            ? 'opacity-100 duration-500'
            : showScrollTop && isLaunching
            ? 'opacity-0 -translate-y-[150vh] duration-[3000ms] ease-in delay-[1600ms]'
            : 'opacity-0 duration-500'
        }`}
      >
        <button
          onClick={scrollToTop}
          disabled={isLaunching}
          className={`group relative w-16 h-16 transition-all ${
            showScrollTop && !isLaunching ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
            isLaunching 
              ? 'bg-orange-500/80 scale-150 animate-pulse-fast' 
              : 'bg-orange-500/40 group-hover:bg-orange-500/60'
          }`}></div>

          {/* Main rocket container */}
          <div className={`relative w-full h-full transition-all duration-700 ${
            isLaunching ? 'animate-rocket-shake' : ''
          }`}>
            
            {/* Arrow (transforms to rocket) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
              isLaunching ? 'opacity-0 scale-0 rotate-180' : 'opacity-100 scale-100 rotate-0'
            }`}>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:shadow-orange-500/70 transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-white transform group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>

            {/* Rocket (appears on click) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-300 ease-out ${
              isLaunching ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
            }`}>
              <div className="relative inline-block">
                {/* Rocket SVG */}
                <svg viewBox="0 0 64 72" className="w-14 h-16 block" style={{ filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.6))' }}>
                  {/* Rocket Body */}
                  <path
                    d="M32 8 L38 28 L38 45 L26 45 L26 28 Z"
                    fill="url(#rocketGradient)"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                  />
                  
                  {/* Rocket Nose Cone */}
                  <path
                    d="M32 8 L38 20 L26 20 Z"
                    fill="#fbbf24"
                  />
                  
                  {/* Rocket Window */}
                  <circle cx="32" cy="26" r="4" fill="#93c5fd" opacity="0.8" />
                  <circle cx="32" cy="26" r="3" fill="#dbeafe" />
                  
                  {/* Left Wing */}
                  <path
                    d="M26 35 L20 45 L26 45 Z"
                    fill="#ef4444"
                  />
                  
                  {/* Right Wing */}
                  <path
                    d="M38 35 L44 45 L38 45 Z"
                    fill="#ef4444"
                  />
                  
                  {/* Rocket Base */}
                  <rect x="26" y="44" width="12" height="3" rx="1" fill="#7c2d12" />
                  
                  {/* Fire integrated into SVG */}
                  {isLaunching && (
                    <g className="animate-fire-appear" style={{ transformOrigin: '32px 47px' }}>
                      {/* Main flames starting from rocket base (y=47) */}
                      <ellipse cx="32" cy="58" rx="5" ry="8" fill="#ff6b00" opacity="0.8" className="animate-fire-grow">
                        <animate attributeName="ry" values="8;10;8" dur="0.2s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="32" cy="57" rx="3.5" ry="6" fill="#ff8c00" opacity="0.9" className="animate-fire-grow-delayed">
                        <animate attributeName="ry" values="6;7;6" dur="0.2s" begin="0.1s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="32" cy="56" rx="2" ry="4" fill="#ffd700" opacity="1">
                        <animate attributeName="ry" values="4;5;4" dur="0.15s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="32" cy="54" rx="1" ry="2" fill="#ffff99" opacity="1" />
                      
                      {/* Side flames */}
                      <ellipse cx="28" cy="54" rx="2.5" ry="5" fill="#ff6b00" opacity="0.6" transform="rotate(-15 28 54)">
                        <animate attributeName="ry" values="5;6;5" dur="0.25s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx="36" cy="54" rx="2.5" ry="5" fill="#ff6b00" opacity="0.6" transform="rotate(15 36 54)">
                        <animate attributeName="ry" values="5;6;5" dur="0.25s" begin="0.125s" repeatCount="indefinite" />
                      </ellipse>
                    </g>
                  )}
                  
                  <defs>
                    <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Additional HTML fire effects */}
                {isLaunching && (
                  <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none animate-fire-appear" style={{ top: 'calc(100% - 12px)', width: '48px' }}>
                    {/* Smoke particles */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-8 left-1/2 w-3 h-3 bg-gray-400/30 rounded-full blur-md animate-smoke-rise"
                        style={{
                          animationDelay: `${i * 0.25}s`,
                          left: `${50 + (Math.random() - 0.5) * 40}%`,
                        }}
                      ></div>
                    ))}

                    {/* Spark particles */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`spark-${i}`}
                        className="absolute top-1 left-1/2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-spark"
                        style={{
                          animationDelay: `${i * 0.15}s`,
                          transform: `translate(-50%, 0) rotate(${i * 60}deg) translateY(0)`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pulsing ring */}
          <div className={`absolute inset-0 border-2 rounded-full transition-all ${
            isLaunching 
              ? 'border-orange-400/60 animate-ping-fast' 
              : 'border-orange-500/30 animate-ping-slow'
          }`}></div>
        </button>
      </div>
      </main>
    </>
  );
}
