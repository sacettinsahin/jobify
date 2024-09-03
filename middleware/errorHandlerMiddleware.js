import { StatusCodes } from "http-status-codes";

// trigger with "throw new Error('...') 
//and no need to try catch blocks.(express-async-errors)
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  const msg = err.message || "Something went wrong, try again later."

  res.status(statusCode).json({ message: msg });
};

export default errorHandlerMiddleware;