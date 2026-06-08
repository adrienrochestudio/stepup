import admin from 'firebase-admin';

let firebaseAdmin = null;

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

if (serviceAccount) {
  try {
    firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount)),
    });
  } catch (err) {
    console.warn('Firebase Admin init failed:', err.message);
  }
}

export { firebaseAdmin };
