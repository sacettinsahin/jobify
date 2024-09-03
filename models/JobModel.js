import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobTye: {
      type: String,
      enum: ["full-time", "part-time", "intership"],
      default: "full-time",
    },
    jobLocaltion: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

// first value-> table name
export default mongoose.model("Job", JobSchema);
