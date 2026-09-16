'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: '✅' },
    { id: 'eligibility', title: 'Eligibility', icon: '👤' },
    { id: 'account', title: 'Account Registration', icon: '📝' },
    { id: 'services', title: 'Our Services', icon: '💼' },
    { id: 'user-responsibilities', title: 'User Responsibilities', icon: '⚖️' },
    { id: 'payment', title: 'Payment & Billing', icon: '💳' },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: '©️' },
    { id: 'prohibited', title: 'Prohibited Activities', icon: '🚫' },
    { id: 'termination', title: 'Termination', icon: '🔚' },
    { id: 'warranties', title: 'Warranties & Disclaimers', icon: '⚠️' },
    { id: 'liability', title: 'Limitation of Liability', icon: '🛡️' },
    { id: 'indemnification', title: 'Indemnification', icon: '🤝' },
    { id: 'changes', title: 'Changes to Terms', icon: '📝' },
    { id: 'governing-law', title: 'Governing Law', icon: '⚖️' },
    { id: 'contact', title: 'Contact Us', icon: '📧' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            {/* Animated Background Elements */}
            <div className={styles.heroParticle} style={{ left: '15%', top: '25%', animationDelay: '0s' }}></div>
            <div className={styles.heroParticle} style={{ left: '80%', top: '20%', animationDelay: '1s' }}></div>
            <div className={styles.heroParticle} style={{ left: '25%', top: '75%', animationDelay: '2s' }}></div>
            <div className={styles.heroParticle} style={{ left: '85%', top: '65%', animationDelay: '1.5s' }}></div>

            <div className={styles.docIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
                <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
                <line x1="12" y1="18" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <h2 className={styles.heroTitle}>
              <span className={styles.titleGradient}>Terms</span> of Service
            </h2>
            <p className={styles.heroSubtitle}>
              Please read these terms carefully before using Gym Titan services.
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
              <span className={styles.badgeIcon}>📜</span>
              Legal Agreement
            </div>
            <p className={styles.introText}>
              Welcome to <strong>Gym Titan</strong>! These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (the gym owner or authorized representative) and Gym Titan Inc. 
              regarding your access to and use of our gym management software and services. <strong>This software is exclusively designed for gym owners and fitness facility operators</strong> to manage their gym operations, 
              not for individual members or trainers. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <section id="acceptance" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>✅</span>
              <h3 className={styles.sectionTitle}>1. Acceptance of Terms</h3>
            </div>

            <p className={styles.text}>
              By creating an account, accessing our website, or using any of our services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not 
              use our services.
            </p>

            <div className={styles.highlightBox}>
              <div className={styles.highlightIcon}>⚡</div>
              <p className={styles.highlightText}>
                <strong>Important:</strong> These Terms apply to gym owners, fitness facility operators, and their authorized staff members who use Gym Titan to manage gym operations. This software is NOT intended for individual gym members or personal trainers operating independently.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="eligibility" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>👤</span>
              <h3 className={styles.sectionTitle}>2. Eligibility</h3>
            </div>

            <div className={styles.eligibilityCards}>
              <div className={styles.eligibilityCard}>
                <div className={styles.cardNumber}>18+</div>
                <h4>Age Requirement</h4>
                <p>You must be at least 18 years old to use our services</p>
              </div>
              <div className={styles.eligibilityCard}>
                <div className={styles.cardNumber}>🏢</div>
                <h4>Gym Owner/Operator</h4>
                <p>Must own or operate a gym/fitness facility and have authority to bind the business</p>
              </div>
              <div className={styles.eligibilityCard}>
                <div className={styles.cardNumber}>✓</div>
                <h4>Business Entity</h4>
                <p>Must represent a legitimate gym business with proper licensing and registration</p>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <strong>⚠️ Not For Individual Use:</strong> This software is exclusively for gym businesses and facility management. Individual gym members and independent personal trainers should not register for this service.
            </div>
          </section>

          {/* Section 3 */}
          <section id="account" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📝</span>
              <h3 className={styles.sectionTitle}>3. Account Registration</h3>
            </div>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              3.1 Account Creation
            </h3>
            <ul className={styles.list}>
              <li>You must provide accurate gym business information during registration (business name, address, license number)</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must notify us immediately of any unauthorized access to your account</li>
              <li>One gym business may create multiple accounts for different locations, but each location must be legitimate</li>
              <li>Staff members can be added as sub-users with role-based access permissions</li>
            </ul>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              3.2 Account Security
            </h3>
            <div className={styles.securityTips}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🔑</span>
                <p>Use strong, unique passwords</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🔒</span>
                <p>Enable two-factor authentication</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🚫</span>
                <p>Never share your credentials</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>👁️</span>
                <p>Monitor account activity regularly</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="services" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💼</span>
              <h3 className={styles.sectionTitle}>4. Our Services</h3>
            </div>

            <p className={styles.text}>
              Gym Titan provides comprehensive gym management software designed specifically for gym owners and fitness facility operators:
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👥</div>
                <h4>Member Management</h4>
                <p>Track gym members, attendance, and member profiles</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💳</div>
                <h4>Payment Processing</h4>
                <p>Handle member subscriptions, billing, and payments</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📊</div>
                <h4>Business Analytics</h4>
                <p>Revenue reports, membership trends, and operational insights</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏋️</div>
                <h4>Staff Management</h4>
                <p>Manage trainers, receptionist, and gym staff with role-based access</p>
              </div>
              {/* <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📅</div>
                <h4>Class & Session Scheduling</h4>
                <p>Schedule and manage fitness classes and training sessions</p>
              </div> */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔔</div>
                <h4>Automated Notifications</h4>
                <p>Send renewal reminders, announcements, and member communications</p>
              </div>
            </div>

            <div className={styles.disclaimer}>
              <strong>⚠️ Service Availability:</strong> We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance. This software is designed for gym business operations only.
            </div>
          </section>

          {/* Section 5 */}
          <section id="user-responsibilities" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚖️</span>
              <h3 className={styles.sectionTitle}>5. User Responsibilities</h3>
            </div>

            <p className={styles.text}>As a gym owner/operator using Gym Titan, you agree to:</p>

            <ul className={styles.list}>
              <li>Comply with all applicable laws and regulations related to gym operations</li>
              <li>Use the service only for managing your legitimate gym business</li>
              <li>Ensure your gym has proper licenses, insurance, and legal permits</li>
              <li>Maintain accurate member data and handle it responsibly</li>
              <li>Not share account access with unauthorized individuals</li>
              <li>Not use the software for any business other than gym/fitness facility operations</li>
              <li>Respect the intellectual property rights of Gym Titan</li>
              <li>Report any security vulnerabilities or issues promptly</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="payment" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💳</span>
              <h3 className={styles.sectionTitle}>6. Payment & Billing</h3>
            </div>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              6.1 Subscription Plans
            </h3>
            <p className={styles.text}>
              We offer various subscription plans tailored for different gym sizes and needs. You can view current plans on our Pricing page. 
              Plans are priced per gym location. Prices are subject to change with 30 days&apos; notice to existing subscribers.
            </p>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              6.2 Payment Terms
            </h3>
            <ul className={styles.list}>
              <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually per gym location based on your selected plan</li>
              <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled before renewal date</li>
              <li><strong>Payment Methods:</strong> We accept major credit cards, bank transfers, and other business payment methods</li>
              <li><strong>Failed Payments:</strong> Service may be suspended if payment fails; account may be terminated after 15 days</li>
              <li><strong>Multiple Locations:</strong> Each gym location requires a separate subscription</li>
            </ul>

            {/* <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              6.3 Refunds
            </h3>
            <div className={styles.refundBox}>
              <div className={styles.refundIcon}>💰</div>
              <div className={styles.refundContent}>
                <h4>Refund Policy</h4>
                <p>We offer a <strong>14-day money-back guarantee</strong> for new subscriptions. Refunds are not available for renewals or after the initial 14-day period. To request a refund, contact our support team.</p>
              </div>
            </div> */}
          </section>

          {/* Section 7 */}
          <section id="intellectual-property" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>©️</span>
              <h3 className={styles.sectionTitle}>7. Intellectual Property</h3>
            </div>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              7.1 Our Rights
            </h3>
            <p className={styles.text}>
              All content, features, and functionality of the Gym Titan service, including but not limited to text, graphics, logos, 
              icons, images, audio clips, and software, are the exclusive property of Gym Titan Inc. and are protected by copyright, 
              trademark, and other intellectual property laws.
            </p>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              7.2 Your Rights
            </h3>
            <p className={styles.text}>
              You retain all rights to your gym&apos;s business data, member information, and content you upload to our service. By uploading content, 
              you grant us a limited license to store, process, and display that content as necessary to provide our gym management services. 
              You are solely responsible for ensuring you have the right to collect and store member data in compliance with applicable privacy laws.
            </p>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              7.3 Restrictions
            </h3>
            <ul className={styles.list}>
              <li>You may not copy, modify, or distribute our software or content</li>
              <li>You may not reverse engineer or decompile our software</li>
              <li>You may not remove or alter any proprietary notices</li>
              <li>You may not use our trademarks without written permission</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="prohibited" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🚫</span>
              <h3 className={styles.sectionTitle}>8. Prohibited Activities</h3>
            </div>

            <p className={styles.text}>You are expressly prohibited from:</p>

            <div className={styles.prohibitedGrid}>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>⚠️</span>
                <h4>Unauthorized Access</h4>
                <p>Attempting to access accounts or systems without permission</p>
              </div>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>🤖</span>
                <h4>Automated Tools</h4>
                <p>Using bots, scrapers, or automated tools without consent</p>
              </div>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>💣</span>
                <h4>Harmful Code</h4>
                <p>Uploading viruses, malware, or malicious code</p>
              </div>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>📧</span>
                <h4>Spam</h4>
                <p>Sending unsolicited messages or spam</p>
              </div>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>🎭</span>
                <h4>Impersonation</h4>
                <p>Impersonating others or misrepresenting affiliation</p>
              </div>
              <div className={styles.prohibitedCard}>
                <span className={styles.prohibitedIcon}>🚫</span>
                <h4>Misuse for Non-Gym Business</h4>
                <p>Using the software for any purpose other than gym/fitness facility management</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="termination" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔚</span>
              <h3 className={styles.sectionTitle}>9. Termination</h3>
            </div>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              9.1 By You
            </h3>
            <p className={styles.text}>
              You may cancel your gym&apos;s subscription at any time through your account settings. Cancellation will take effect at the end 
              of your current billing period. You will continue to have access until then. Upon cancellation, you can export your gym data 
              for 30 days before it is permanently deleted.
            </p>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              9.2 By Us
            </h3>
            <p className={styles.text}>
              We reserve the right to suspend or terminate your account immediately, without prior notice, if:
            </p>
            <ul className={styles.list}>
              <li>You violate these Terms of Service</li>
              <li>Your payment fails and is not resolved within 15 days</li>
              <li>You engage in fraudulent or illegal activities</li>
              <li>You use the software for non-gym business purposes</li>
              <li>Your gym business is found to be operating without proper licenses</li>
              <li>Your account is inactive for more than 12 months</li>
              <li>We are required to do so by law</li>
            </ul>

            <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              9.3 Effect of Termination
            </h3>
            <div className={styles.terminationBox}>
              <p>Upon termination, your access to the service will cease immediately. We will retain your gym&apos;s data for 30 days to allow for data export and potential recovery, 
              after which it will be permanently deleted unless required by law to retain it longer. You are responsible for exporting any data you wish to keep before the 30-day period expires.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="warranties" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚠️</span>
              <h3 className={styles.sectionTitle}>10. Warranties & Disclaimers</h3>
            </div>

            <div className={styles.warningBox}>
              <div className={styles.warningIcon}>⚡</div>
              <div className={styles.warningContent}>
                <h4>AS-IS Service</h4>
                <p>
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                  INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
            </div>

            <p className={styles.text}>We do not warrant that:</p>
            <ul className={styles.list}>
              <li>The service will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the service will be accurate or reliable</li>
              <li>Any errors in the service will be corrected</li>
              <li>The service will meet your specific requirements</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="liability" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🛡️</span>
              <h3 className={styles.sectionTitle}>11. Limitation of Liability</h3>
            </div>

            <div className={styles.liabilityBox}>
              <p className={styles.text}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, GYM TITAN INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
                OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className={styles.text}>
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED 
                THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="indemnification" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🤝</span>
              <h3 className={styles.sectionTitle}>12. Indemnification</h3>
            </div>

            <p className={styles.text}>
              You agree to indemnify, defend, and hold harmless Gym Titan Inc., its officers, directors, employees, and agents from 
              and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or 
              in any way connected with:
            </p>

            <ul className={styles.list}>
              <li>Your gym&apos;s operations and use of the service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including member privacy rights</li>
              <li>Any content or data you submit or transmit through the service</li>
              <li>Your gym&apos;s operations, including any injuries or damages to members</li>
              <li>Your willful misconduct or negligence in handling member data</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section id="changes" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📝</span>
              <h3 className={styles.sectionTitle}>13. Changes to Terms</h3>
            </div>

            <p className={styles.text}>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by:
            </p>

            <div className={styles.notificationMethods}>
              <div className={styles.methodCard}>
                <span className={styles.methodIcon}>📧</span>
                <p>Email notification to your registered address</p>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.methodIcon}>📢</span>
                <p>In-app notification or banner</p>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.methodIcon}>🌐</span>
                <p>Notice on our website</p>
              </div>
            </div>

            <p className={styles.text}>
              Your continued use of the service after changes become effective constitutes acceptance of the revised Terms. 
              If you do not agree to the new Terms, you must stop using the service.
            </p>
          </section>

          {/* Section 14 */}
          <section id="governing-law" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚖️</span>
              <h3 className={styles.sectionTitle}>14. Governing Law</h3>
            </div>

            <p className={styles.text}>
              These Terms shall be governed by and construed in accordance with the laws of the State of Pakistan, 
              without regard to its conflict of law provisions.
            </p>

            {/* <h3 className={styles.subsectionTitle}>
              <span className={styles.bulletPoint}>▸</span>
              Dispute Resolution
            </h3>
            <p className={styles.text}>
              Any disputes arising out of or relating to these Terms or the service shall be resolved through:
            </p>
            <ul className={styles.list}>
              <li><strong>Negotiation:</strong> First, we&apos;ll try to resolve disputes informally</li>
              <li><strong>Mediation:</strong> If negotiation fails, we&apos;ll attempt mediation</li>
              <li><strong>Arbitration:</strong> Binding arbitration in [Your Location] as a last resort</li>
            </ul> */}

            {/* <div className={styles.infoBox}>
              <strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive any right to participate in class actions.
            </div> */}
          </section>

          {/* Section 15 */}
          <section id="contact" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📧</span>
              <h3 className={styles.sectionTitle}>15. Contact Us</h3>
            </div>
            
            <p className={styles.text}>
              If you have any questions about these Terms of Service, please contact us:
            </p>

            <div className={styles.contactBox}>
              {/* <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>⚖️</div>
                <div>
                  <div className={styles.contactLabel}>Legal Department</div>
                  <a href="mailto:legal@gymtitan.com" className={styles.contactLink}>legal@gymtitan.com</a>
                </div>
              </div> */}
              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>💬</div>
                <div>
                  <div className={styles.contactLabel}>Support Team</div>
                  <a href="mailto:gymtitan@codeverza.com" className={styles.contactLink}>gymtitan@codeverza.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconBox}>📍</div>
                <div>
                  <div className={styles.contactLabel}>Mailing Address</div>
                  <p className={styles.contactText}>Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
              <p className={styles.ctaText}>
                By using Gym Titan, you agree to these Terms. Transform your gym operations today!
              </p>
              <div className={styles.ctaButtons}>
                <a href="/pricing" className={styles.ctaButton}>
                  <span>View Pricing</span>
                  <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="/contact" className={styles.ctaButtonSecondary}>
                  <span>Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
