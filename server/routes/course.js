import express from "express";
import {
  getAllCourses,
  getSingleCourse,

  fetchLectures,
} from "../controller/course";
import { isAuth } from "../middlewares/isAuth";
const router = express.Router();
router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/lecture/:id", isAuth, fetchLectures);
export default router;
