import { Router } from 'express';
import { stripe, webhookSecret } from '../services/stripe.js';
import { safeOrigin } from '../config.js';

const router = Router();

// Course prices (cents), will move to DB later
const coursePrices = {
  'eco-prod-101': { amount: 9900, name: 'Éco-production : Les Fondamentaux' },
  'label-ecoprod': { amount: 14900, name: 'Obtenir le Label Ecoprod' },
  'decors-durables': { amount: 7900, name: 'Décors et Scénographie Durables' },
  'transport-tournage': { amount: 5900, name: 'Transport et Logistique de Tournage' },
  'post-prod-verte': { amount: 7900, name: 'Post-production Éco-responsable' },
  'bilan-carbone': { amount: 11900, name: 'Bilan Carbone d\'une Production' },
};

router.post('/create-session', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Stripe not configured' });
  }

  const { courseId } = req.body;
  const course = coursePrices[courseId];

  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }

  // Validate the origin before using it in redirect URLs (open-redirect guard).
  const origin = safeOrigin(req);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: course.name },
          unit_amount: course.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${origin}/enroll/${courseId}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/enroll/${courseId}/cancel`,
      metadata: { courseId },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('Stripe session error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

router.post('/webhook', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Stripe not configured' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('Payment completed for course:', session.metadata.courseId);
    // TODO: Record enrollment in Firestore
  }

  res.json({ received: true });
});

export default router;
