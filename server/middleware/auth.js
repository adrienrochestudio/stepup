import { firebaseAdmin } from '../services/firebase.js';

export async function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Missing authorization token' });
  }

  if (!firebaseAdmin) {
    return res.status(500).json({ error: 'Auth service not configured' });
  }

  try {
    const decoded = await firebaseAdmin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
