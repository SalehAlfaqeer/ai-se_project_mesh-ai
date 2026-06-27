import { Router } from 'express';
import { authRouter } from './auth.js';
import chatsRouter from './chats.js';
import docRouter from './doc.js';
import queryRouter from './query.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/chats', chatsRouter);
router.use('/documents', docRouter);
router.use('/query', queryRouter);

export default router;
