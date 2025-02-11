import mongoose from "mongoose";
const schema = new mongoose({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Courses",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Lecture = mongoose.model("lecture", schema);
