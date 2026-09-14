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

// ─── Success Popup ────────────────────────────────────────────────────────────
function SuccessPopup({ name, onClose }) {
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

        <h3 className={styles.popupTitle}>Message Sent!</h3>

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

  const contactInfo = [
    {
      title: 'Email Us',
      content: 'gymtitan@codeverza.com',
      link: 'mailto:gymtitan@codeverza.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'from-orange-600 to-orange-500',
    },
    {
      title: 'Call Us',
      content: '+92 300 1234567',
      link: 'tel:+923001234567',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'WhatsApp',
      content: '+92 300 1234567',
      link: 'https://wa.me/923001234567',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'from-sky-500 to-cyan-500',
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

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.contactGrid}>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              {contactInfo.map((info, idx) => (
                <div key={idx} className={styles.infoCard}>
                  <div className={styles.infoHeader}>
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
                        style={{ width: '1.5rem', height: '1.5rem', color: 'white' }}
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
                    <h3 className={styles.infoTitle}>{info.title}</h3>
                  </div>
                  <p className={styles.infoText}>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                        {info.content}
                      </a>
                    ) : (
                      info.content
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.heading} style={{ fontSize: '1.875rem', marginBottom: '1.5rem' }}>
                <span style={{ color: 'white' }}>Send us a </span>
                <span className={styles.headingGradient}>Message</span>
              </h2>

              {status === 'error' && (
                <div className={styles.errorBanner}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
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

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
