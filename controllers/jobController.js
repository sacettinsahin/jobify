import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "frontend" },
  { id: nanoid(), company: "google", position: "backend" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
}; 

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ message: `Job is added: ${job.id}` });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    throw new Error(`No job with id: ${id}`);
  }

  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ message: "Please provide company and position." });
    return;
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: `No job with id: ${id}` });
    return;
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ message: "Job is updated successfully", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: `No job with id: ${id}` });
    return;
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res
    .status(200)
    .json({ message: `This data deleted successfully, id: ${id}` });
};
