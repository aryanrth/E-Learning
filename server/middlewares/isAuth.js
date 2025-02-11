import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
// import { User } from "../models/user.js";
export const isAuth = async (req, res, next) => {
  try {
    const token = req.header.token;
    if (!token)
      return res.status(403).json({
        message: "please Login",
      });

    const decodedData = jwt.verify(token, process.env.Jwt_Sec);
    req.user = await User.findById(decodedData._id);
    next();
  } catch (error) {
    res.status(500).json({
      message: "Login First",
    });
  }
};
export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "you are not admin",
      });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
