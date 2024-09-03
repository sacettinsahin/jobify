import JobSchema from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await JobSchema.find({}); //first parameter is filter.
  res.status(StatusCodes.OK).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
  const newJob = await JobSchema.create(req.body);
  res.status(StatusCodes.CREATED).json({ newJob });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const job = await JobSchema.findById(req.params.id);
  res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
  const updatedJob = await JobSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ message: "Job is updated successfully", job: updatedJob });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const removedJob = await JobSchema.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ message: "Job deleted", job: removedJob });
};
