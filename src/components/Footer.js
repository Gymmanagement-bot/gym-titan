'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate particles only on client side
  const particles = useMemo(() => {
    if (!isMounted) return [];
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
    }));
  }, [isMounted]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Roles & Permissions', href: '#roles' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Blog', href: '#blog' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'System Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refund' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    },
    {
      name: 'Twitter',
      href: '#',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z M6.5 6.5a2 2 0 00-2 2v9a2 2 0 002 2h11a2 2 0 002-2v-9a2 2 0 00-2-2h-11z',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
    },
    {
      name: 'YouTube',
      href: '#',
      icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#05050a] border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Moving Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-slide"
            style={{
              top: `${20 * i + 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '10s',
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 group mb-6">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/img/gym-logo.png"
                  alt="Gym Titan Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_10px_rgba(255,107,0,0.3)]"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                GYM TITAN
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Complete gym management solution with role-based access for your entire team. Manage members, payments, and operations seamlessly.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Subscribe to Updates</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1000+', label: 'Active Gyms', icon: '🏢' },
              { number: '50K+', label: 'Members Managed', icon: '👥' },
              { number: '99.9%', label: 'Uptime', icon: '⚡' },
              { number: '24/7', label: 'Support', icon: '💬' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4">
            {/* Copyright & Credits */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Gym Titan. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Built with ❤️ for gym owners</span>
            </div>

            {/* Powered by Codeverza */}
            <div className="flex items-center space-x-2 group">
              <span className="text-gray-500 text-sm">Powered by</span>
              <a
                href="https://codeverza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600/10 to-orange-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Codeverza
                </span>
                <svg
                  className="w-4 h-4 text-orange-500 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="text-gray-400">
                Made in 🇵🇰 Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </footer>
  );
}
