import TryCatch from "../middlewares/TryCatch";
import { Courses } from "../models/Courses";
import { Lecture } from "../models/Lecture";

export const createCourse = TryCatch(async (req, res) => {
  const { title, description, category, createdBy, duration, price } = req.body;
  const image = req.file;
  await Courses.create({
    title,
    description,
    category,
    createdBy,
    image: image?.path,
    duration,
    price,
  });
  res.status(201).json({
    message: "Course Created Successfully",
  });
});
export const addLecture = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course)
    return res.status(400).json({
      message: "no couses with thid id",
    });
  const { title, description } = req.body;
  const file = req.file;
  const lecture = await Lecture.create({
    title,
    description,
    video: file?.path,
    courses:course._id,
  });
  res.status(201).json({
    message:"Lecture Added",lecture,

  })
});
