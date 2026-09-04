'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small gyms starting their digital journey',
      price: '999',
      period: '/month',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      features: [
        'Up to 100 members',
        'Basic member management',
        'Payment tracking',
        '2 staff accounts',
        'SMS notifications (100/month)',
        'Attendance tracking',
        'Basic reports',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'secondary',
    },
    {
      name: 'Professional',
      description: 'Most popular choice for growing fitness businesses',
      price: '1,999',
      period: '/month',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      color: 'from-orange-600 to-orange-500',
      popular: true,
      features: [
        'Up to 500 members',
        'Complete member management',
        'Multiple payment methods',
        '10 staff accounts',
        'Unlimited SMS & WhatsApp',
        'Biometric attendance',
        'Advanced analytics & reports',
        'Role-based access control',
        'Expense management',
        'Mobile app access',
        'Priority support',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'primary',
    },
    {
      name: 'Enterprise',
      description: 'For large gyms and fitness chains with multiple branches',
      price: '4,999',
      period: '/month',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      color: 'from-sky-500 to-cyan-500',
      popular: false,
      features: [
        'Unlimited members',
        'Multi-branch management',
        'All payment integrations',
        'Unlimited staff accounts',
        'Unlimited communications',
        'Custom integrations',
        'White-label mobile apps',
        'Dedicated account manager',
        'Custom reports & dashboards',
        'API access',
        'Training & onboarding',
        '24/7 priority support',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'secondary',
    },
  ];

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required. You can explore all features and see how Gym Titan fits your business.',
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.pricingGrid}>
            {plans.map((plan, idx) => (
              <div key={idx} className={styles.pricingCard}>
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}

                <div className={styles.planHeader}>
                  <div
                    className={styles.planIcon}
                    style={{
                      background: `linear-gradient(135deg, ${
                        plan.color === 'from-orange-600 to-orange-500'
                          ? '#ea580c, #f97316'
                          : plan.color === 'from-cyan-500 to-blue-500'
                          ? '#06b6d4, #3b82f6'
                          : '#0ea5e9, #06b6d4'
                      })`,
                    }}
                  >
                    <svg
                      style={{ width: '2rem', height: '2rem', color: 'white' }}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d={plan.icon} />
                    </svg>
                  </div>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDescription}>{plan.description}</p>
                </div>

                <div className={styles.priceContainer}>
                  <div className={styles.priceAmount}>
                    <span className={styles.currency}>₹</span>
                    {plan.price}
                  </div>
                  <div className={styles.pricePeriod}>{plan.period}</div>
                </div>

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
                  href="#contact"
                  className={`${styles.ctaButton} ${
                    plan.buttonStyle === 'primary'
                      ? styles.primaryButton
                      : styles.secondaryButton
                  }`}
                >
                  {plan.buttonText}
                </Link>

                <div
                  className={styles.glowEffect}
                  style={{
                    background: `linear-gradient(135deg, ${
                      plan.color === 'from-orange-600 to-orange-500'
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
