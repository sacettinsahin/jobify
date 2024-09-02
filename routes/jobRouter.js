import express from 'express';
import { getAllJobs, createJob, getJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// /api/v1/jobs
router.get('/', getAllJobs);
router.post('/', createJob);
router.get('/:id', getJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
