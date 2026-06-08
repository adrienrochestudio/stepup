import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import coursesRouter from './routes/courses.js';
import checkoutRouter from './routes/checkout.js';
import enrollmentsRouter from './routes/enrollments.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Stripe webhook needs raw body — must be before express.json()
app.use('/api/checkout/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/enrollments', enrollmentsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
