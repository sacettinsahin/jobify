import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) throw new UnauthenticatedError("authentication invalid.");
  //console.log(req.cookies);

  try {
    const {userId, role} = verifyJWT(token);
    req.user = {userId, role} // user data added to req.
    //console.log(userId, role)
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid.");
  }
};
