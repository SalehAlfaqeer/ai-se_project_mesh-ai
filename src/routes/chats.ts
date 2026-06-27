import { Router } from 'express';
import {
  getChats,
  createChat,
  getChatById,
  deleteChat,
  addChatMessage,
} from '../controllers/chats.js';

const router = Router();

router.get('/', getChats);
router.post('/', createChat);
router.get('/:id', getChatById);
router.delete('/:id', deleteChat);
router.post('/:id/messages', addChatMessage);

export default router;
