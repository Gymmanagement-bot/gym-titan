'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Fit Start',
      badge: '🥉',
      subtitle: 'Small Gyms',
      description: 'For Small / starting gyms',
      monthlyOriginalPrice: '1,999',
      monthlyPrice: '1,499',
      yearlyOriginalPrice: '23,988',
      yearlyPrice: '20,990',
      discount: '25',
      period: 'month',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      features: [
        'Admin: 1',
        'Members: 100',
        'Staff: 2',
        'Trainers: 2',
        // 'Branches: 1',
        'Member Management',
        'Membership Plans',
        'Membership Expiry Tracking',
        // 'Attendance Management',
        'Payment & Fee Management',
        'Member Search',
        'Basic Dashboard',
        'Basic Reports',
        // 'WhatsApp Contact/Reminder',
        'Workout Plans',
        // 'Member Progress Tracking',
        'Expense Management',
        'Revenue Reports',
        // 'Attendance Reports',
        'Payment History',
        'Due Payment Tracking',
        'Automated Membership Expiry Reminders',
        'Data Export',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'secondary',
    },
    {
      name: 'Fit Plus',
      badge: '🥈',
      subtitle: 'Growing Gyms',
      description: 'For Medium-size gyms - Recommended',
      monthlyOriginalPrice: '4,099',
      monthlyPrice: '3,399',
      yearlyOriginalPrice: '49,188',
      yearlyPrice: '40,990',
      discount: '18',
      period: 'month',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      color: 'from-orange-600 to-orange-500',
      popular: true,
      // featuresNote: 'All  features +',
      features: [
        'Admin: 1',
        'Members: 300',
        'Staff: 3',
        'Trainers: 4',
        // 'Branches: 2',
        'Member Management',
        'Membership Plans',
        'Membership Expiry Tracking',
        'Attendance Management',
        'Payment & Fee Management',
        'Member Search',
        'Advanced Dashboard',
        'Advanced Reports',
        'WhatsApp Contact/Reminder',
        'Staff Role & Permissions',
        'Trainer Management',
        'Workout Plans',
        'Member Progress Tracking',
        'Expense Management',
        'Revenue Reports',
        // 'Attendance Reports',
        'Payment History',
        'Due Payment Tracking',
        'Automated Membership Expiry Reminders',
        'Data Export',
        // 'Branch-wise Management',
        'Advanced Analytics',
        'Revenue & Expense Analytics',
        'Trainer Performance',
        'Member Performance',
        'Role-based Access Control',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'primary',
    },
    {
      name: 'Fit Max',
      badge: '🥇',
      subtitle: 'Large Gyms / Fitness Centers',
      description: 'For Large gyms and professional fitness centers',
      monthlyOriginalPrice: '6,999',
      monthlyPrice: '5,499',
      yearlyOriginalPrice: '83,988',
      yearlyPrice: '69,990',
      discount: '21.4',
      period: 'month',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      color: 'from-sky-500 to-cyan-500',
      popular: false,
      // featuresNote: 'Professional ke tamam features +',
      features: [
        'Admin: 1',
        'Members: 400',
        'Staff: 5',
        'Trainers: 7',
        // 'Branches: 5',
        'Member Management',
        'Membership Plans',
        'Membership Expiry Tracking',
        // 'Attendance Management',
        'Payment & Fee Management',
        'Member Search',
        'Advanced Dashboard',
        'Advanced Reports',
        'WhatsApp Contact/Reminder',
        'Staff Role & Permissions',
        'Trainer Management',
        'Workout Plans',
        'Member Progress Tracking',
        'Expense Management',
        'Revenue Reports',
        'Attendance Reports',
        'Payment History',
        'Due Payment Tracking',
        'Automated Membership Expiry Reminders',
        'Data Export',
        // 'Branch-wise Management',
        'Advanced Analytics',
        'Revenue & Expense Analytics',
        'Trainer Performance',
        'Member Performance',
        'Role-based Access Control',
        'Custom Reports',
        'Priority Support',
        'Backup & Recovery',
        'API / Integration Support',
        // 'Custom Branding',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'secondary',
    },
  ];

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 7-day free trial for all plans. No credit card required. You can explore all features and see how Gym Titan fits your business.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and online wallets. All payments are processed securely.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees. We also provide free data migration and onboarding support to help you get started quickly.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription anytime. There are no long-term contracts or cancellation fees. Your data will be available for export.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Save up to 20% when you choose annual billing. Contact our sales team for custom pricing for multiple years.',
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
              <span className={styles.badgeText}>SIMPLE PRICING</span>
            </div>

            <h1 className={styles.heading}>
              <span style={{ color: 'white' }}>Choose the </span>
              <span className={styles.headingGradient}>Perfect Plan</span>
              <span style={{ color: 'white' }}> for Your Gym</span>
            </h1>

            <p className={styles.description}>
              Transparent pricing with no hidden fees. Start with a 14-day free trial.
              No credit card required.
            </p>

            {/* Billing Toggle */}
            <div className={styles.billingToggle}>
              <button
                className={`${styles.toggleButton} ${billingPeriod === 'monthly' ? styles.activeToggle : ''}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`${styles.toggleButton} ${billingPeriod === 'yearly' ? styles.activeToggle : ''}`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly
                <span className={styles.saveBadge}>2 Months Free</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.pricingGrid}>
            {plans.map((plan, idx) => (
              <div key={idx} className={styles.pricingCard}>
                {plan.discount && (
                  <div className={styles.discountBadge}>-{plan.discount}% OFF</div>
                )}

                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}

                <div className={styles.planHeader}>
                  <div
                    className={styles.planIcon}
                    style={{
                      background: `linear-gradient(135deg, ${plan.color === 'from-orange-600 to-orange-500'
                        ? '#ea580c, #f97316'
                        : plan.color === 'from-cyan-500 to-blue-500'
                          ? '#06b6d4, #3b82f6'
                          : '#0ea5e9, #06b6d4'
                        })`,
                    }}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{plan.badge}</span>
                  </div>
                  <h3 className={styles.planName}>
                    {plan.name}
                    {plan.subtitle && <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#f7f7f7', display: 'block', marginTop: '0.25rem' }}> {plan.subtitle}</span>}
                  </h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                </div>

                <div className={styles.priceContainer}>
                  {(billingPeriod === 'monthly' ? plan.monthlyOriginalPrice : plan.yearlyOriginalPrice) && (
                    <>
                      <div className={styles.earlyBirdBadge}>
                        <svg className={styles.earlyBirdIcon} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                        </svg>
                        <span className={styles.earlyBirdText}>Early Bird</span>
                      </div>
                      <div className={styles.originalPrice}>
                        <span style={{ fontSize: '0.875rem' }}>Rs </span>
                        {billingPeriod === 'monthly' ? plan.monthlyOriginalPrice : plan.yearlyOriginalPrice}
                      </div>
                    </>
                  )}
                  <div className={styles.priceAmount}>
                    <span className={styles.currency}>Rs</span>
                    {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </div>
                  <div className={styles.pricePeriod}>/{billingPeriod === 'monthly' ? 'month' : 'year'}</div>
                  {billingPeriod === 'yearly' && (
                    <div className={styles.freeBonusBadge}>
                      <svg className={styles.giftIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                      <span>2 months free included</span>
                    </div>
                  )}
                  {(billingPeriod === 'monthly' ? plan.monthlyOriginalPrice : plan.yearlyOriginalPrice) && (
                    <div className={styles.limitedOffer}>Limited time offer — price will increase soon</div>
                  )}
                </div>

                {plan.featuresNote && (
                  <div style={{
                    padding: '0.625rem 0.875rem',
                    background: 'rgba(249, 115, 22, 0.1)',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem',
                    border: '1px solid rgba(249, 115, 22, 0.3)'
                  }}>
                    <span style={{
                      color: '#fb923c',
                      fontSize: '0.8125rem',
                      fontWeight: '600',
                      fontStyle: 'italic'
                    }}>{plan.featuresNote}</span>
                  </div>
                )}

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <svg
                        className={styles.checkIcon}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`${styles.ctaButton} ${plan.buttonStyle === 'primary'
                    ? styles.primaryButton
                    : styles.secondaryButton
                    }`}
                >
                  {plan.buttonText}
                </Link>

                <div
                  className={styles.glowEffect}
                  style={{
                    background: `linear-gradient(135deg, ${plan.color === 'from-orange-600 to-orange-500'
                      ? '#ea580c, #f97316'
                      : plan.color === 'from-cyan-500 to-blue-500'
                        ? '#06b6d4, #3b82f6'
                        : '#0ea5e9, #06b6d4'
                      })`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.textCenter} style={{ marginBottom: '3rem' }}>
            <div className={styles.badge}>
              <div className={styles.badgeDot}></div>
              <span className={styles.badgeText}>FAQ</span>
            </div>

            <h2 className={styles.heading} style={{ fontSize: '2.5rem' }}>
              <span style={{ color: 'white' }}>Frequently Asked </span>
              <span className={styles.headingGradient}>Questions</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
