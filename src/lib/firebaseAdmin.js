import admin from 'firebase-admin';

/**
 * Singleton Firebase Admin SDK initializer.
 * Safe to import multiple times — only initializes once per server process.
 */
function getFirebaseAdmin() {
  if (admin.apps.length > 0) {
    return admin.apps[0];
  }

  // FIREBASE_PRIVATE_KEY comes from .env.local with literal \n — replace them.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
    throw new Error('Missing Firebase Admin SDK environment variables.');
  }

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

// Initialize on module load
getFirebaseAdmin();

export const db = admin.firestore();
