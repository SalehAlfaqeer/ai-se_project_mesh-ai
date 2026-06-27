import { Request, Response } from 'express';

export function getChats(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    data: [
      { id: '1', title: 'First chat' },
      { id: '2', title: 'Second chat' },
    ],
    error: null,
  });
}

export function createChat(req: Request, res: Response) {
  const { title } = req.body ?? {};
  res.status(201).json({
    success: true,
    data: { id: '3', title: title ?? 'New chat' },
    error: null,
  });
}

export function getChatById(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id,
      title: `Chat ${req.params.id}`,
      participants: ['user_001'],
      createdAt: '2026-06-01T12:00:00Z',
    },
    error: null,
  });
}

export function deleteChat(req: Request, res: Response) {
  res.sendStatus(204);
}

export function addChatMessage(req: Request, res: Response) {
  const { message } = req.body ?? {};

  res.status(201).json({
    success: true,
    data: {
      chatId: req.params.id,
      message: message ?? 'Hello world',
      reply: {
        id: 'reply_001',
        text: 'This is a reply from the chat service.',
      },
    },
    error: null,
  });
}
