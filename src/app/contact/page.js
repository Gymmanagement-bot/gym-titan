'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const SUBJECTS = [
  { value: 'general',     label: 'General Inquiry'    },
  { value: 'sales',       label: 'Sales & Pricing'    },
  { value: 'support',     label: 'Technical Support'  },
  { value: 'demo',        label: 'Request a Demo'     },
  { value: 'partnership', label: 'Partnership'        },
  { value: 'other', label: 'Other'        },
];

// ─── Custom Dropdown ──────────────────────────────────────────────────────────
function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = SUBJECTS.find((s) => s.value === value) || SUBJECTS[0];

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={styles.selectWrapper}>
      {/* Trigger */}
      <button
        type="button"
        className={`${styles.selectTrigger} ${open ? styles.selectTriggerOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected.label}</span>
        <svg
          className={`${styles.selectChevron} ${open ? styles.selectChevronOpen : ''}`}
          width="18" height="18" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul className={styles.selectList} role="listbox">
          {SUBJECTS.map((s) => (
            <li
              key={s.value}
              role="option"
              aria-selected={s.value === value}
              className={`${styles.selectOption} ${s.value === value ? styles.selectOptionActive : ''}`}
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(s.value);
                setOpen(false);
              }}
            >
              {s.value === value && (
                <svg width="14" height="14" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                  style={{ flexShrink: 0 }}>
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Submitting Popup ─────────────────────────────────────────────────────────
function SubmittingPopup() {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupCard}>
        {/* Glow rings */}
        <div className={styles.popupGlow}></div>

        {/* Spinner */}
        <div className={styles.spinnerWrapper}>
          <div className={styles.spinnerOuter}></div>
          <div className={styles.spinnerInner}></div>
          <div className={styles.spinnerIcon}>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
              style={{ color: '#f97316' }}>
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h3 className={styles.popupTitle}>Sending Your Message</h3>
        <p className={styles.popupSubtitle}>Please wait a moment...</p>

        {/* Animated dots */}
        <div className={styles.dotsRow}>
          <span className={styles.dot} style={{ animationDelay: '0s' }}></span>
          <span className={styles.dot} style={{ animationDelay: '0.2s' }}></span>
          <span className={styles.dot} style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
}

// ─── Error Popup ──────────────────────────────────────────────────────────────
function ErrorPopup({ message, onClose }) {
  useEffect(() => {
    // Auto close after 8 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.popupOverlay}>
      <div className={`${styles.popupCard} ${styles.errorCard}`}>
        {/* Glow */}
        <div className={`${styles.popupGlow} ${styles.errorGlow}`}></div>

        {/* Error icon */}
        <div className={styles.errorIconWrapper}>
          <div className={styles.errorIconRing}></div>
          <div className={styles.errorIconBg}>
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
              style={{ color: '#fff' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        </div>

        <h3 className={styles.popupTitle}>Oops! Something Went Wrong</h3>

        <p className={styles.errorMessage}>
          {message}
        </p>

        {/* Divider */}
        <div className={styles.errorDivider}></div>

        <button onClick={onClose} className={styles.errorBtn}>
          <span>Close</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <p style={{ 
          marginTop: '12px', 
          fontSize: '0.75rem', 
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center'
        }}>
          Auto-closing in 8 seconds...
        </p>
      </div>
    </div>
  );
}

// ─── Success Popup ────────────────────────────────────────────────────────────
function SuccessPopup({ name, onClose }) {
  useEffect(() => {
    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.popupOverlay}>
      <div className={`${styles.popupCard} ${styles.successCard}`}>
        {/* Glow */}
        <div className={`${styles.popupGlow} ${styles.successGlow}`}></div>

        {/* Check icon */}
        <div className={styles.successIconWrapper}>
          <div className={styles.successIconRing}></div>
          <div className={styles.successIconBg}>
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
              style={{ color: '#fff' }}>
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h3 className={styles.popupTitle}>Message Sent Successfully!</h3>

        <p className={styles.successMessage}>
          Thank you, <span className={styles.highlight}>{name}</span>!
        </p>
        <p className={styles.popupSubtitle}>
          We have received your message and a confirmation has been sent to your email.
          We will reply to you <strong style={{ color: '#fff' }}>as soon as possible</strong>.
        </p>

        {/* Divider */}
        <div className={styles.successDivider}></div>

        <button onClick={onClose} className={styles.successBtn}>
          <span>Done</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </button>
        
        <p style={{ 
          marginTop: '12px', 
          fontSize: '0.75rem', 
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center'
        }}>
          Auto-closing in 5 seconds...
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  const handleSuccessClose = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
  };

  const handleErrorClose = () => {
    setStatus('idle');
    setErrorMsg('');
  };

  const contactInfo = [
    {
      title: 'Email Us',
      content: 'gymtitan@codeverza.com',
      link: 'mailto:gymtitan@codeverza.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'from-orange-600 to-orange-500',
    },
    {
      title: 'WhatsApp',
      content: '+92 300 1234567',
      link: 'https://wa.me/923001234567',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'from-sky-500 to-cyan-500',
    },
    {
      title: 'Facebook',
      content: 'codeverza',
      link: 'https://www.facebook.com/share/1GaLoS57GL/',
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
      color: 'from-blue-600 to-blue-500',
    },
    {
      title: 'Instagram',
      content: 'codeverza',
      link: 'https://www.instagram.com/codeverza?stkn=Z2NkOW84ejE1cXQ3',
      icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z M6.5 6.5a2 2 0 00-2 2v9a2 2 0 002 2h11a2 2 0 002-2v-9a2 2 0 00-2-2h-11z',
      color: 'from-pink-600 to-purple-500',
    },
    {
      title: 'Office Address',
      content: 'Karachi, Pakistan',
      link: null,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      {/* ── Popups ── */}
      {status === 'submitting' && <SubmittingPopup />}
      {status === 'success' && <SuccessPopup name={formData.name} onClose={handleSuccessClose} />}
      {status === 'error' && <ErrorPopup message={errorMsg} onClose={handleErrorClose} />}

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
              <span className={styles.badgeText}>GET IN TOUCH</span>
            </div>

            <h1 className={styles.heading}>
              <span style={{ color: 'white' }}>Contact </span>
              <span className={styles.headingGradient}>Gym Titan</span>
            </h1>

            <p className={styles.description}>
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Unified Card */}
      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          
          {/* Single Unified Card */}
          <div className={styles.unifiedCard}>
            
            {/* Left Side - Contact Form */}
            <div className={styles.formSection}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Get in Touch</h2>
                <p className={styles.formSubtitle}>
                  Have any queries? Fill out the form below and our team will contact you soon.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    placeholder="Enter your name"
                    className={styles.formInput} required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={styles.formInput} required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject *</label>
                  <CustomSelect
                    value={formData.subject}
                    onChange={(val) => setFormData({ ...formData, subject: val })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message *</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className={styles.formTextarea} required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Vertical Divider */}
            <div className={styles.verticalDivider}></div>

            {/* Right Side - Contact Information */}
            <div className={styles.infoSection}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <p className={styles.infoSubtitle}>
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className={styles.contactInfoList}>
                {contactInfo.map((info, idx) => (
                  <div key={idx} className={styles.infoItem}>
                    <div
                      className={styles.infoIcon}
                      style={{
                        background: `linear-gradient(135deg, ${
                          info.color === 'from-orange-600 to-orange-500'
                            ? '#ea580c, #f97316'
                            : info.color === 'from-cyan-500 to-blue-500'
                            ? '#06b6d4, #3b82f6'
                            : info.color === 'from-sky-500 to-cyan-500'
                            ? '#0ea5e9, #06b6d4'
                            : '#f97316, #ea580c'
                        })`,
                      }}
                    >
                      <svg
                        style={{ width: '1.25rem', height: '1.25rem', color: 'white' }}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d={info.icon} />
                      </svg>
                    </div>
                    <div className={styles.infoContent}>
                      <h4 className={styles.infoLabel}>{info.title}</h4>
                      <p className={styles.infoValue}>
                        {info.link ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                            {info.content}
                          </a>
                        ) : (
                          info.content
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
