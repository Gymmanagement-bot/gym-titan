'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function FeaturesPage() {
  const features = [
    {
      title: 'Member Management',
      description: 'Complete member lifecycle management with automated workflows and smart tracking.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'from-orange-600 to-orange-500',
      items: [
        'Add unlimited members with complete profiles',
        'Photo upload and ID card generation',
        'Track attendance with biometric integration',
        'Member status tracking (Active, Expired, Frozen)',
        'Quick search and filter members',
        'Bulk import members from Excel',
      ],
    },
    {
      title: 'Payment & Billing',
      description: 'Streamline payment collection with automated invoicing and multiple payment options.',
      icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'from-cyan-500 to-blue-500',
      items: [
        'Accept cash, card, UPI, and online payments',
        'Automated payment reminders via SMS & WhatsApp',
        'Generate invoices and receipts instantly',
        'Track pending payments and dues',
        'Payment history and transaction logs',
        'Refund and adjustment management',
      ],
    },
    {
      title: 'Membership Packages',
      description: 'Create flexible membership plans tailored to your gym business model.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      color: 'from-sky-500 to-cyan-500',
      items: [
        'Create unlimited custom packages',
        'Set duration (monthly, quarterly, yearly)',
        'Flexible pricing with discounts',
        'Add services (Personal Training, Classes, etc.)',
        'Package upgrade and downgrade options',
        'Trial period management',
      ],
    },
    {
      title: 'Role-Based Access Control',
      description: 'Secure multi-user system with customizable permissions for your team.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'from-orange-500 to-orange-600',
      items: [
        'Create unlimited custom roles',
        'Admin: Full system control',
        'Receptionist: Member registration & inquiries',
        'Cashier: Payment processing',
        'Manager: Reports and analytics',
        'Trainer: Client management',
      ],
    },
    {
      title: 'Automated Reminders',
      description: 'Never miss renewals with smart automated communication system.',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      color: 'from-cyan-500 to-blue-500',
      items: [
        'Membership expiry reminders',
        'Payment due notifications',
        'Birthday wishes automation',
        'SMS and WhatsApp integration',
        'Custom message templates',
        'Schedule reminders in advance',
      ],
    },
    {
      title: 'Reports & Analytics',
      description: 'Make data-driven decisions with comprehensive business insights.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: 'from-sky-500 to-cyan-500',
      items: [
        'Real-time revenue dashboard',
        'Member retention and churn analysis',
        'Package popularity reports',
        'Peak hours and attendance trends',
        'Staff performance tracking',
        'Export reports to PDF/Excel',
      ],
    },
    {
      title: 'Attendance Tracking',
      description: 'Monitor member visits with multiple attendance marking options.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      color: 'from-orange-600 to-orange-500',
      items: [
        'Biometric fingerprint integration',
        'RFID card scanning support',
        'Mobile app check-in',
        'Manual attendance marking',
        'Attendance history and logs',
        'Visitor tracking and management',
      ],
    },
    {
      title: 'Staff Management',
      description: 'Manage your team efficiently with attendance and performance tracking.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'from-cyan-500 to-blue-500',
      items: [
        'Add staff with role assignments',
        'Track staff attendance',
        'Salary and payment management',
        'Performance monitoring',
        'Task and shift assignment',
        'Access control and permissions',
      ],
    },
    {
      title: 'Expense Management',
      description: 'Track gym expenses and manage your budget effectively.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'from-sky-500 to-cyan-500',
      items: [
        'Record all expenses with categories',
        'Equipment and maintenance tracking',
        'Utility bills management',
        'Vendor and supplier records',
        'Monthly expense reports',
        'Profit and loss statements',
      ],
    },
    {
      title: 'WhatsApp & SMS Integration',
      description: 'Stay connected with members through automated messaging.',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'from-orange-500 to-orange-600',
      items: [
        'Send automated renewal reminders',
        'Payment confirmation messages',
        'Birthday and festival greetings',
        'Promotional offers and updates',
        'Bulk messaging to members',
        'Template-based messaging',
      ],
    },
    {
      title: 'Mobile App Access',
      description: 'Manage your gym on-the-go with dedicated mobile applications.',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      color: 'from-cyan-500 to-blue-500',
      items: [
        'iOS and Android apps available',
        'Member app for workout tracking',
        'Staff app for attendance marking',
        'Real-time sync across devices',
        'Offline mode support',
        'Push notifications',
      ],
    },
    {
      title: 'Data Security & Backup',
      description: 'Enterprise-grade security with automatic data backups.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      color: 'from-sky-500 to-cyan-500',
      items: [
        'Daily automatic backups',
        'Encrypted data storage',
        'Secure cloud infrastructure',
        'Role-based access security',
        'Activity logs and audit trails',
        '99.9% uptime guarantee',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.backgroundGlow}>
          <div className={styles.orangeGlow}></div>
          <div className={styles.cyanGlow}></div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textCenter}>
            <div className={styles.badge}>
              <div className={styles.badgeDot}></div>
              <span className={styles.badgeText}>POWERFUL FEATURES</span>
            </div>

            <h1 className={styles.heading}>
              <span style={{ color: 'white' }}>Everything You Need to </span>
              <span className={styles.headingGradient}>Manage Your Gym</span>
            </h1>

            <p className={styles.description}>
              From member management to analytics, Gym Titan provides all the tools you need
              to run a successful fitness business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <div
                    className={styles.featureIcon}
                    style={{
                      background: `linear-gradient(135deg, ${
                        feature.color === 'from-orange-600 to-orange-500'
                          ? '#ea580c, #f97316'
                          : feature.color === 'from-cyan-500 to-blue-500'
                          ? '#06b6d4, #3b82f6'
                          : feature.color === 'from-sky-500 to-cyan-500'
                          ? '#0ea5e9, #06b6d4'
                          : '#f97316, #ea580c'
                      })`,
                    }}
                  >
                    <svg
                      style={{ width: '1.75rem', height: '1.75rem', color: 'white' }}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>

                <p className={styles.featureDescription}>{feature.description}</p>

                <ul className={styles.featureList}>
                  {feature.items.map((item, itemIdx) => (
                    <li key={itemIdx} className={styles.featureItem}>
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: '#f97316' }}
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={styles.glowEffect}
                  style={{
                    background: `linear-gradient(135deg, ${
                      feature.color === 'from-orange-600 to-orange-500'
                        ? '#ea580c, #f97316'
                        : feature.color === 'from-cyan-500 to-blue-500'
                        ? '#06b6d4, #3b82f6'
                        : feature.color === 'from-sky-500 to-cyan-500'
                        ? '#0ea5e9, #06b6d4'
                        : '#f97316, #ea580c'
                    })`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.backgroundGlow}>
          <div className={styles.orangeGlow} style={{ top: '50%', left: 0 }}></div>
          <div className={styles.cyanGlow} style={{ top: '50%', right: 0 }}></div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textCenter}>
            <h2 className={styles.heading} style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'white' }}>Ready to Experience All Features?</span>
            </h2>
            <p className={styles.description} style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Start your free trial and see how Gym Titan can transform your gym management
            </p>
            <Link href="/#pricing" className={styles.ctaButton}>
              <span>Start Free Trial</span>
              <svg
                className={styles.arrowIcon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
