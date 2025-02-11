import TryCatch from "../middlewares/TryCatch";
import { Courses } from "../models/Courses";
import { Lecture } from "../models/Lecture";
import { User } from "../models/user";

export const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find();
  res.json({
    courses,
  });
});
export const getSingleCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);
  res.json({
    course,
  });
});
export const fetchLectures = TryCatch(async (req, res) => {
  const lectures = await Lecture.find({ course: req.params.id });
  const user = await User.findById(req.user._id);
  if (user.role === "admin") {
    return res.json({ lectures });
  }
  if (!user.subscription.includes(req.params.id))
    return res.status(400).json({
      message: "you have not subscried to this course",
    });
  res.json({ lectures });
});
