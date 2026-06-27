import { Router } from 'express';
import {
  uploadDocument,
  listDocuments,
  getDocumentById,
  deleteDocument,
} from '../controllers/doc.js';

const router = Router();

router.post('/', uploadDocument);
router.get('/', listDocuments);
router.get('/:id', getDocumentById);
router.delete('/:id', deleteDocument);

export default router;
