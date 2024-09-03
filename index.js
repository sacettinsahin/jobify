import "express-async-errors"; //try-catch
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js"
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// MIDDLEWARE
app.use(express.json());

// ROUTE
app.use("/api/v1/jobs", jobRouter)

// not found route.
app.use("*", (req, res) => {
  res.status(404).json({ message: "This URL not found." });
});

// ERROR HANDLER MIDDLEWARE
app.use(errorHandlerMiddleware);

// DB CONNECTION
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server running on PORT: ${port}..`);
  });
} catch (error) {
  console.log(error);
  process.exit(1)

}

