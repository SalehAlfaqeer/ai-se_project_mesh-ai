import type { Request, Response } from 'express';

export const register = (req: Request, res: Response): void => {
  const { email, name } = req.body ?? {};

  res.status(201).json({
    success: true,
    data: {
      userId: 'user_002',
      email: email ?? 'newuser@example.com',
      name: name ?? 'New User',
      createdAt: new Date().toISOString(),
    },
    error: null,
  });
};

export const login = (req: Request, res: Response): void => {
  const { email } = req.body ?? {};

  res.status(200).json({
    success: true,
    data: {
      token: 'token_abc123',
      user: {
        userId: 'user_001',
        email: email ?? 'user@example.com',
        name: 'John Doe',
      },
    },
    error: null,
  });
};

export const getCurrentUser = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    data: {
      userId: 'user_001',
      email: 'user@example.com',
      name: 'John Doe',
      createdAt: '2026-01-01T00:00:00Z',
    },
    error: null,
  });
};
