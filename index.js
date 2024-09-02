import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
//routes
import jobRouter from "./routes/jobRouter.js"

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//middleware:
app.use(express.json());

app.use("/api/v1/jobs", jobRouter)



// not found route.
app.use("*", (req, res) => {
  res.status(404).json({ message: "This URL not found." });
});
// trigger with "throw new Error('...')
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "something went wrong" });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server running on PORT: ${port}..`);
});
