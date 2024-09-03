import express from 'express';
import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobController.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

// /api/v1/jobs
router.get('/', getAllJobs);
router.post('/', validateJobInput,createJob);
router.get('/:id', getJob);
router.put('/:id', validateJobInput, updateJob);
router.delete('/:id', deleteJob);

export default router;
