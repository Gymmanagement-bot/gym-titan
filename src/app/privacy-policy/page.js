'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'info-collection', title: 'Information We Collect', icon: '📊' },
    { id: 'info-usage', title: 'How We Use Your Info', icon: '🔧' },
    { id: 'info-sharing', title: 'Information Sharing', icon: '🤝' },
    { id: 'data-security', title: 'Data Security', icon: '🔒' },
    { id: 'your-rights', title: 'Your Rights', icon: '⚖️' },
    { id: 'cookies', title: 'Cookies & Tracking', icon: '🍪' },
    { id: 'data-retention', title: 'Data Retention', icon: '💾' },
    { id: 'children', title: "Children's Privacy", icon: '👶' },
    { id: 'international', title: 'International Transfers', icon: '🌍' },
    { id: 'changes', title: 'Policy Changes', icon: '📝' },
    { id: 'contact', title: 'Contact Us', icon: '📧' },
    { id: 'gdpr', title: 'GDPR Compliance', icon: '🇪🇺' },
    { id: 'ccpa', title: 'CCPA Rights', icon: '🇺🇸' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            {/* Animated Background Elements */}
            <div className={styles.heroParticle} style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
            <div className={styles.heroParticle} style={{ left: '85%', top: '15%', animationDelay: '1s' }}></div>
            <div className={styles.heroParticle} style={{ left: '20%', top: '80%', animationDelay: '2s' }}></div>
            <div className={styles.heroParticle} style={{ left: '90%', top: '70%', animationDelay: '1.5s' }}></div>

            <div className={styles.lockIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="5" y="11" width="14" height="10" rx="2" strokeWidth="2"/>
                <path d="M12 15v2" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <h2 className={styles.heroTitle}>
              <span className={styles.titleGradient}>Privacy</span> Policy
            </h2>
            <p className={styles.heroSubtitle}>
              Your privacy matters. Learn how we protect and handle your data.
            </p>
            <div className={styles.lastUpdated}>
              <span className={styles.updateIcon}>🕐</span>
              Last Updated: September 16, 2026
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className={styles.quickNav}>
          <h3 className={styles.quickNavTitle}>Quick Jump To:</h3>
          <div className={styles.navGrid}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={styles.navCard}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(section.id);
                }}
              >
                <span className={styles.navIcon}>{section.icon}</span>
                <span className={styles.navText}>{section.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Introduction */}
          <div className={styles.introSection}>
            <div className={styles.introBadge}>
              <span className={styles.badgeIcon}>🛡️</span>
              Our Commitment
            </div>
            <p className={styles.introText}>
              At <strong>Gym Titan</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our gym management software and services. 
              <strong>Gym Titan is designed exclusively for gym owners and fitness facility operators</strong> to manage their gym operations and member data.
            </p>
          </div>

          {/* Section 1 */}
          <section id="info-collection" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📊</span>
              <h3 className={styles.sectionTitle}>1. Information We Collect</h3>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                <span className={styles.bulletPoint}>▸</span>
                1.1 Information You Provide
              </h3>
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>🏢</div>
                  <div className={styles.cardTitle}>Business Information</div>
                  <p className={styles.cardText}>Gym name, business address, license number, owner details, and billing information</p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>👤</div>
                  <div className={styles.cardTitle}>Account Information</div>
                  <p className={styles.cardText}>Name, email address, phone number, password for gym owner/operator accounts</p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>💳</div>
                  <div className={styles.cardTitle}>Payment Information</div>
                  <p className={styles.cardText}>Credit card details, billing address (securely processed through third-party processors)</p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>💬</div>
                  <div className={styles.cardTitle}>Communication Data</div>
                  <p className={styles.cardText}>Messages, feedback, and support correspondence with our team</p>
                </div>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                <span className={styles.bulletPoint}>▸</span>
                1.2 Automatically Collected Information
              </h3>
              <ul className={styles.list}>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent, and interaction patterns</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Cookies and Tracking:</strong> Session data, preferences, and analytics information</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                <span className={styles.bulletPoint}>▸</span>
                1.3 Gym Member Data (Stored on Your Behalf)
              </h3>
              <ul className={styles.list}>
                <li><strong>Member Information:</strong> Data about your gym members that you input and manage (names, contact details, membership plans)</li>
                <li><strong>Attendance Records:</strong> Member check-in/check-out times and gym visit frequency</li>
                <li><strong>Payment History:</strong> Member subscription payments, billing history managed through your gym account</li>
                <li><strong>Workout Data:</strong> Training sessions and progress tracking data you record for your members</li>
              </ul>
              
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>⚠️</div>
                <p className={styles.highlightText}>
                  <strong>Important:</strong> You (the gym owner) are the data controller for your members&apos; information. We act as a data processor, storing and processing this data on your behalf according to your instructions. You are responsible for obtaining proper consent from your members and complying with applicable privacy laws.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="info-usage" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔧</span>
              <h3 className={styles.sectionTitle}>2. How We Use Your Information</h3>
            </div>
            
            <div className={styles.usageGrid}>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>⚙️</div>
                <h4>Service Delivery</h4>
                <p>Provide, maintain, and improve our gym management software platform</p>
              </div>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>👥</div>
                <h4>Account Management</h4>
                <p>Create and manage gym owner accounts, process payments, handle subscriptions</p>
              </div>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>📱</div>
                <h4>Communication</h4>
                <p>Send service updates, newsletters, and respond to gym owner inquiries</p>
              </div>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>📈</div>
                <h4>Analytics</h4>
                <p>Understand platform usage patterns and improve gym management features</p>
              </div>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>🔐</div>
                <h4>Security</h4>
                <p>Detect fraud, prevent abuse, and ensure platform security for all gym businesses</p>
              </div>
              <div className={styles.usageCard}>
                <div className={styles.usageIcon}>⚖️</div>
                <h4>Legal Compliance</h4>
                <p>Comply with legal obligations and enforce our terms of service</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="info-sharing" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🤝</span>
              <h3 className={styles.sectionTitle}>3. Information Sharing and Disclosure</h3>
            </div>

            <div className={styles.highlightBox}>
              <div className={styles.highlightIcon}>🚫</div>
              <p className={styles.highlightText}>
                <strong>We do not sell your personal information to third parties.</strong>
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>We may share your information with:</h3>
            <ul className={styles.list}>
              <li><strong>Your Gym Staff:</strong> Authorized staff members you add to your gym account with appropriate role-based access</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, email delivery, hosting, and analytics</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            
            <div className={styles.infoBox}>
              <strong>Member Data:</strong> We do not access, use, or share your gym members&apos; data except as necessary to provide the service or as required by law. You control and own your member data.
            </div>
          </section>

          {/* Section 4 */}
          <section id="data-security" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔒</span>
              <h3 className={styles.sectionTitle}>4. Data Security</h3>
            </div>

            <p className={styles.text}>
              We implement industry-standard security measures to protect your information:
            </p>

            <div className={styles.securityGrid}>
              <div className={styles.securityCard}>
                <div className={styles.securityIconWrapper}>
                  <span>🔐</span>
                </div>
                <h4>Encryption</h4>
                <p>Data encrypted in transit and at rest (SSL/TLS)</p>
              </div>
              <div className={styles.securityCard}>
                <div className={styles.securityIconWrapper}>
                  <span>🔑</span>
                </div>
                <h4>Authentication</h4>
                <p>Secure password hashing and authentication protocols</p>
              </div>
              <div className={styles.securityCard}>
                <div className={styles.securityIconWrapper}>
                  <span>🛡️</span>
                </div>
                <h4>Security Audits</h4>
                <p>Regular security audits and vulnerability assessments</p>
              </div>
              <div className={styles.securityCard}>
                <div className={styles.securityIconWrapper}>
                  <span>👮</span>
                </div>
                <h4>Access Controls</h4>
                <p>Strict access controls and employee training</p>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <strong>⚠️ Important:</strong> While we strive to protect your information, no method of transmission over the internet is 100% secure.
            </div>
          </section>

          {/* Section 5 */}
          <section id="your-rights" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚖️</span>
              <h3 className={styles.sectionTitle}>5. Your Rights and Choices</h3>
            </div>

            <div className={styles.rightsGrid}>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>1</div>
                <h4>Access</h4>
                <p>Request a copy of your personal information</p>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>2</div>
                <h4>Correction</h4>
                <p>Update or correct inaccurate information</p>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>3</div>
                <h4>Deletion</h4>
                <p>Request deletion of your personal data</p>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>4</div>
                <h4>Opt-Out</h4>
                <p>Unsubscribe from marketing communications</p>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>5</div>
                <h4>Data Portability</h4>
                <p>Receive your data in machine-readable format</p>
              </div>
              <div className={styles.rightCard}>
                <div className={styles.rightNumber}>6</div>
                <h4>Restrict Processing</h4>
                <p>Limit how we use your information</p>
              </div>
            </div>

            <div className={styles.contactPrompt}>
              <p>To exercise these rights, contact us at:</p>
              <a href="mailto:gymtitan@codeverza.com" className={styles.emailLink}>
                <span className={styles.emailIcon}>📧</span>
                gymtitan@codeverza.com
              </a>
            </div>
          </section>

          {/* Section 6 */}
          <section id="cookies" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🍪</span>
              <h3 className={styles.sectionTitle}>6. Cookies and Tracking Technologies</h3>
            </div>

            <p className={styles.text}>
              We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.
            </p>

            <div className={styles.cookieTypes}>
              <div className={styles.cookieCard}>
                <div className={styles.cookieBadge}>Essential</div>
                <h4>Essential Cookies</h4>
                <p>Required for basic functionality and security</p>
              </div>
              <div className={styles.cookieCard}>
                <div className={styles.cookieBadge}>Analytics</div>
                <h4>Analytics Cookies</h4>
                <p>Help us understand how users interact with our platform</p>
              </div>
              <div className={styles.cookieCard}>
                <div className={styles.cookieBadge}>Marketing</div>
                <h4>Marketing Cookies</h4>
                <p>Used for targeted advertising (with your consent)</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="data-retention" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💾</span>
              <h3 className={styles.sectionTitle}>7. Data Retention</h3>
            </div>
            <p className={styles.text}>
              We retain your gym business information and member data for as long as your account is active and as necessary to provide our services and comply with legal obligations. 
              When you close your gym account, we will retain the data for <strong>30 days</strong> to allow you to export your data, after which it will be permanently deleted, 
              except where we are required to retain it for legal, tax, or regulatory purposes.
            </p>
          </section>

          {/* Section 8 */}
          <section id="children" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>👶</span>
              <h3 className={styles.sectionTitle}>8. Children&apos;s Privacy</h3>
            </div>
            <p className={styles.text}>
              Our services are not intended for individuals under the age of <strong>16</strong>. We do not knowingly collect personal information 
              from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section id="international" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🌍</span>
              <h3 className={styles.sectionTitle}>9. International Data Transfers</h3>
            </div>
            <p className={styles.text}>
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy 
              and applicable data protection laws.
            </p>
          </section>

          {/* Section 10 */}
          <section id="changes" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📝</span>
              <h3 className={styles.sectionTitle}>10. Changes to This Privacy Policy</h3>
            </div>
            <p className={styles.text}>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
              new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy 
              periodically.
            </p>
          </section>

          {/* Section 11 */}
          <section id="contact" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📧</span>
              <h3 className={styles.sectionTitle}>11. Contact Us</h3>
            </div>
            
            <p className={styles.text}>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>

            <div className={styles.contactBox}>
              {/* <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>📧</div>
                <div>
                  <div className={styles.contactLabel}>Privacy Email</div>
                  <a href="mailto:privacy@gymtitan.com" className={styles.contactLink}>privacy@gymtitan.com</a>
                </div>
              </div> */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>💬</div>
                <div>
                  <div className={styles.contactLabel}>Support</div>
                  <a href="mailto:gymtitan@codeverza.com" className={styles.contactLink}>gymtitan@codeverza.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>📍</div>
                <div>
                  <div className={styles.contactLabel}>Address</div>
                  <p className={styles.contactText}>Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="gdpr" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🇪🇺</span>
              <h3 className={styles.sectionTitle}>12. GDPR Compliance (For EU Users)</h3>
            </div>

            <p className={styles.text}>
              If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
            </p>

            <ul className={styles.list}>
              <li>Right to object to processing of your personal data</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
              <li>Right to withdraw consent at any time</li>
            </ul>

            <div className={styles.infoBox}>
              <strong>Lawful basis for processing:</strong> consent, contractual necessity, legal obligations, and legitimate interests.
            </div>
          </section>

          {/* Section 13 */}
          <section id="ccpa" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🇺🇸</span>
              <h3 className={styles.sectionTitle}>13. California Privacy Rights (CCPA)</h3>
            </div>

            <p className={styles.text}>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
            </p>

            <ul className={styles.list}>
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to deletion of personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
          </section>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Questions About Your Privacy?</h3>
              <p className={styles.ctaText}>
                Our team is here to help. Reach out anytime with questions or concerns.
              </p>
              <a href="/contact" className={styles.ctaButton}>
                <span>Contact Us</span>
                <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
