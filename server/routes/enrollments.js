import { Router } from 'express';

const router = Router();

// In-memory store (will move to Firestore)
const enrollments = [];

router.get('/:userId', (req, res) => {
  const userEnrollments = enrollments.filter((e) => e.userId === req.params.userId);
  res.json({ enrollments: userEnrollments });
});

router.post('/', (req, res) => {
  const { userId, courseId, cohortId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ error: 'userId and courseId are required' });
  }

  const enrollment = {
    id: `enr_${Date.now()}`,
    userId,
    courseId,
    cohortId: cohortId || null,
    enrolledAt: new Date().toISOString(),
    status: 'active',
  };

  enrollments.push(enrollment);
  res.status(201).json({ enrollment });
});

export default router;
