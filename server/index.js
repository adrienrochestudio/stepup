import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { allowedOrigins } from './config.js';
import healthRouter from './routes/health.js';
import coursesRouter from './routes/courses.js';
import checkoutRouter from './routes/checkout.js';
import enrollmentsRouter from './routes/enrollments.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Security headers.
app.use(helmet());

// Restrict CORS to known front-end origins (no wildcard).
app.use(
  cors({
    origin(origin, cb) {
      // Allow server-to-server / same-origin requests (no Origin header).
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
  }),
);

// Basic rate limiting to blunt brute-force / abuse.
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

// Stripe webhook needs the raw body, must be registered before express.json()
app.use('/api/checkout/webhook', express.raw({ type: 'application/json' }));
app.use(express.json({ limit: '100kb' }));

app.use('/api/health', healthRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/enrollments', enrollmentsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
