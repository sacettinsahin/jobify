import JobSchema from "../models/JobModel.js";

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await JobSchema.find({}); //first parameter is filter.
  res.status(200).json({ jobs });
};

// CREATE JOB
export const createJob = async (req, res) => {
  const newJob = await JobSchema.create(res.body);
  res.status(201).json({ newJob });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobSchema.findById(id);

  if (!job) {
    return res.status(404).json({message:`No job with id: ${id}`});
  }
  res.status(200).json({ job });
};

// EDIT JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await JobSchema.findByIdAndUpdate(id, req.body, {
    new:true
  })

  if (!updatedJob) {
    res.status(404).json({ message: `No job with id: ${id}` });
    return;
  }

  res.status(200).json({ message: "Job is updated successfully", job:updatedJob });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobSchema.findByIdAndDelete(id);
  if (!removedJob) {
    res.status(404).json({ message: `No job with id: ${id}` });
    return;
  }

  res.status(200).json({ message: "Job deleted", job: removedJob });
};
