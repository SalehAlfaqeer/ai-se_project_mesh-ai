import { Router } from 'express';
import { getCurrentUser, register, login } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/me', getCurrentUser);

export { authRouter };
