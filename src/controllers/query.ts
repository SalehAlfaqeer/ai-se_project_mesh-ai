import type { Request, Response } from 'express';

export function queryKnowledge(req: Request, res: Response) {
  const { question } = req.body ?? {};

  res.status(200).json({
    success: true,
    data: {
      question: question ?? 'What can you tell me?',
      answer: 'This is a sample answer generated from the system knowledge base.',
    },
    error: null,
  });
}
