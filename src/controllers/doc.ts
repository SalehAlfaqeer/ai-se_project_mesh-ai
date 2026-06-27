import type { Request, Response } from 'express';

export function uploadDocument(req: Request, res: Response) {
  const { title, content } = req.body ?? {};

  res.status(201).json({
    success: true,
    data: {
      documentId: 'doc_001',
      title: title ?? 'Uploaded Document',
      content: content ?? 'Document content placeholder',
      createdAt: new Date().toISOString(),
    },
    error: null,
  });
}

export function listDocuments(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 'doc_001',
        title: 'Project spec',
        uploadedAt: '2026-06-01T12:00:00Z',
      },
      {
        id: 'doc_002',
        title: 'Chat transcript',
        uploadedAt: '2026-06-02T08:30:00Z',
      },
    ],
    error: null,
  });
}

export function getDocumentById(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    data: {
      id: req.params.id,
      title: `Document ${req.params.id}`,
      content: 'This is the stored content for the requested document.',
      uploadedAt: '2026-06-01T12:00:00Z',
    },
    error: null,
  });
}

export function deleteDocument(req: Request, res: Response) {
  res.sendStatus(204);
}
