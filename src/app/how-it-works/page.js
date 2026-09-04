'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Setup',
      description: 'Get started in minutes with our simple onboarding process. No technical knowledge required.',
      features: [
        'Create your gym account in under 2 minutes',
        'Add your gym details, logo, and branding',
        'Our team helps you migrate existing member data',
        'Free setup assistance via call or WhatsApp',
      ],
      color: 'from-orange-600 to-orange-500',
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
    },
    {
      number: '2',
      title: 'Create Custom Roles',
      description: 'Set up your team with role-based permissions tailored to your gym operations.',
      features: [
        'Admin: Full control over all gym operations',
        'Receptionist: Handle walk-ins, registrations, and inquiries',
        'Cashier: Process payments, print receipts, manage billing',
        'Manager: Oversee operations, view reports and analytics',
        'Trainer: Manage client schedules and workout plans',
        'Create unlimited custom roles with specific permissions',
      ],
      color: 'from-cyan-500 to-blue-500',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
      number: '3',
      title: 'Manage Members & Operations',
      description: 'Streamline daily operations with powerful member management and automation.',
      features: [
        'Add new members with complete profile information',
        'Create custom membership packages and pricing plans',
        'Automated payment reminders via SMS and WhatsApp',
        'Track attendance with biometric or RFID integration',
        'Manage member renewals and expiry notifications',
        'Generate invoices and receipts automatically',
      ],
      color: 'from-sky-500 to-cyan-500',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    },
    {
      number: '4',
      title: 'Track Growth & Analytics',
      description: 'Make data-driven decisions with comprehensive reports and real-time insights.',
      features: [
        'Real-time dashboard with key metrics and KPIs',
        'Revenue tracking and payment history',
        'Member retention and churn analysis',
        'Popular package and peak hours reports',
        'Staff performance tracking',
        'Export reports in PDF or Excel format',
      ],
      color: 'from-orange-500 to-orange-600',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
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
              <span className={styles.badgeText}>STEP BY STEP GUIDE</span>
            </div>

            <h1 className={styles.heading}>
              <span style={{ color: 'white' }}>How </span>
              <span className={styles.headingGradient}>Gym Titan</span>
              <span style={{ color: 'white' }}> Works</span>
            </h1>

            <p className={styles.description}>
              Get your gym up and running in 4 simple steps. From setup to advanced analytics,
              we make gym management effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.stepsContainer}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepWrapper}>
                <div className={styles.stepCard}>
                  <div
                    className={styles.stepNumber}
                    style={{
                      background: `linear-gradient(135deg, ${
                        step.color === 'from-orange-600 to-orange-500'
                          ? '#ea580c, #f97316'
                          : step.color === 'from-cyan-500 to-blue-500'
                          ? '#06b6d4, #3b82f6'
                          : step.color === 'from-sky-500 to-cyan-500'
                          ? '#0ea5e9, #06b6d4'
                          : '#f97316, #ea580c'
                      })`,
                    }}
                  >
                    {step.number}
                  </div>

                  <div className={styles.stepContent}>
                    <div
                      className={styles.stepIcon}
                      style={{
                        background: `linear-gradient(135deg, ${
                          step.color === 'from-orange-600 to-orange-500'
                            ? '#ea580c, #f97316'
                            : step.color === 'from-cyan-500 to-blue-500'
                            ? '#06b6d4, #3b82f6'
                            : step.color === 'from-sky-500 to-cyan-500'
                            ? '#0ea5e9, #06b6d4'
                            : '#f97316, #ea580c'
                        })`,
                      }}
                    >
                      <svg
                        style={{ width: '1.5rem', height: '1.5rem', color: 'white' }}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d={step.icon} />
                      </svg>
                    </div>

                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>

                    <ul className={styles.featureList}>
                      {step.features.map((feature, fIdx) => (
                        <li key={fIdx} className={styles.featureItem}>
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
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={styles.glowEffect}
                    style={{
                      background: `linear-gradient(135deg, ${
                        step.color === 'from-orange-600 to-orange-500'
                          ? '#ea580c, #f97316'
                          : step.color === 'from-cyan-500 to-blue-500'
                          ? '#06b6d4, #3b82f6'
                          : step.color === 'from-sky-500 to-cyan-500'
                          ? '#0ea5e9, #06b6d4'
                          : '#f97316, #ea580c'
                      })`,
                    }}
                  ></div>
                </div>
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
              <span style={{ color: 'white' }}>Ready to Get Started?</span>
            </h2>
            <p className={styles.description} style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Join 1000+ gym owners who trust Gym Titan to manage their business
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
