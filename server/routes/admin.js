import express from "express";
import {isAdmin,isAuth } from "../middlewares/isAuth";
import { addLecture, createCourse } from "../controller/admin";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();
router.post("/couse/new", isAuth,isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLecture);
export default router;
