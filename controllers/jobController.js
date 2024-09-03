import JobSchema from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await JobSchema.find({}); //first parameter is filter.
  res.status(StatusCodes.OK).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
  const newJob = await JobSchema.create(res.body);
  res.status(StatusCodes.CREATED).json({ newJob });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobSchema.findById(id);

  if (!job) {
    throw new NotFoundError(`no job with id: ${id}`);
  }

  res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await JobSchema.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    throw new NotFoundError(`no job with id: ${id}`);
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Job is updated successfully", job: updatedJob });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobSchema.findByIdAndDelete(id);
  if (!removedJob) {
    throw new NotFoundError(`no job with id: ${id}`);
  }

  res.status(StatusCodes.OK).json({ message: "Job deleted", job: removedJob });
};
