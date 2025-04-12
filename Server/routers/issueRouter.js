import express from 'express';
import {
  createIssueWithMedia,
  getIssues,
  voteIssue,
  updateIssue
} from '../controllers/issueController.js';
import { upload } from '../utils/upload.js';

const router = express.Router();

router.get('/', getIssues); 
router.post('/with-media', upload.single('image'), createIssueWithMedia); 
router.patch('/:id/vote', voteIssue); 
router.patch('/:id', updateIssue); 

export default router;
