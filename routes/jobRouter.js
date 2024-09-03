import express from 'express';
import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobController.js';
import { validateJobInput, validateIdParam } from '../middleware/validationMiddleware.js';

const router = express.Router();

// /api/v1/jobs
router.get('/', getAllJobs);
router.post('/', validateJobInput,createJob);
router.get('/:id', validateIdParam, getJob);
router.put('/:id', validateJobInput, validateIdParam, updateJob);
router.delete('/:id',validateIdParam, deleteJob);

export default router;
