import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health.js';
import coursesRouter from './routes/courses.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/courses', coursesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
