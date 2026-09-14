import { db } from './firebaseAdmin.js';

const EMAIL_COOLDOWN_MS  = 60 * 60 * 1000;   // 1 hour
const IP_WINDOW_MS       = 60 * 60 * 1000;   // 1 hour window
const IP_MAX_REQUESTS    = 5;                 // max 5 submissions per IP per hour

/**
 * Format remaining milliseconds into a human-readable string.
 * e.g. 3720000 → "1 hour and 2 minutes"  |  2700000 → "45 minutes"
 */
function formatRemaining(ms) {
  const totalMinutes = Math.ceil(ms / 60000);
  if (totalMinutes >= 60) {
    const hours   = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (minutes === 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
    return `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  return `${totalMinutes} minute${totalMinutes > 1 ? 's' : ''}`;
}

/**
 * Check email-based cooldown (1 submission per email per hour).
 *
 * @param {string} email
 * @returns {{ allowed: boolean, retryAfter?: string }}
 */
export async function checkEmailRateLimit(email) {
  const normalizedEmail = email.trim().toLowerCase();
  const docRef = db.collection('contact_submissions').doc(normalizedEmail);
  const doc    = await docRef.get();

  if (doc.exists) {
    const { lastSubmittedAt } = doc.data();
    const elapsed = Date.now() - lastSubmittedAt;

    if (elapsed < EMAIL_COOLDOWN_MS) {
      const remaining = EMAIL_COOLDOWN_MS - elapsed;
      return {
        allowed: false,
        retryAfter: formatRemaining(remaining),
      };
    }
  }

  return { allowed: true };
}

/**
 * Check IP-based rate limit (max 5 requests per IP per hour).
 *
 * @param {string} ip
 * @returns {{ allowed: boolean }}
 */
export async function checkIPRateLimit(ip) {
  // Sanitize IP to use as a Firestore document ID (replace dots/colons)
  const safeIP  = ip.replace(/[.:]/g, '_');
  const docRef  = db.collection('contact_ip_limits').doc(safeIP);
  const doc     = await docRef.get();
  const now     = Date.now();

  if (doc.exists) {
    const { windowStart, count } = doc.data();
    const elapsed = now - windowStart;

    if (elapsed < IP_WINDOW_MS) {
      // Still within the same window
      if (count >= IP_MAX_REQUESTS) {
        return { allowed: false };
      }
      // Increment count — will be committed after validation passes
      return { allowed: true, docRef, update: { count: count + 1, windowStart } };
    }
    // Window expired — reset
    return { allowed: true, docRef, update: { count: 1, windowStart: now } };
  }

  // First request from this IP
  return { allowed: true, docRef, update: { count: 1, windowStart: now } };
}

/**
 * Record a successful submission:
 * - Updates email cooldown timestamp
 * - Commits IP counter increment
 *
 * Must only be called AFTER emails have been sent successfully.
 *
 * @param {string} email
 * @param {object} ipLimitResult - result object returned from checkIPRateLimit
 */
export async function recordSuccessfulSubmission(email, ipLimitResult) {
  const normalizedEmail = email.trim().toLowerCase();
  const batch = db.batch();

  // Email cooldown record
  const emailRef = db.collection('contact_submissions').doc(normalizedEmail);
  batch.set(emailRef, { lastSubmittedAt: Date.now() }, { merge: true });

  // IP counter
  if (ipLimitResult?.docRef && ipLimitResult?.update) {
    batch.set(ipLimitResult.docRef, ipLimitResult.update);
  }

  await batch.commit();
}
