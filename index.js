import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "frontend" },
  { id: nanoid(), company: "google", position: "backend" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//middleware:
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world.");
});
app.post("/", (req, res) => {
  console.log("body: ", req.body);
  res.json({ message: "data received", data: req.body });
});

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE JOB
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ message: "please provide company and position" });
    return;
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ message: `Job is added: ${job.id}` });
});

// GET SINGLE JOB

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on PORT: ${port}..`);
});
