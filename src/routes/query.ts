import { Router } from 'express';
import { queryKnowledge } from '../controllers/query.js';

const router = Router();

router.post('/', queryKnowledge);

router.get('/', (req, res) => {
  res.status(405).json({
    success: false,
    data: null,
    error: 'Method not allowed: use POST /query',
  });
});

export default router;
