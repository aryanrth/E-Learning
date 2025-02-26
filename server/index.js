import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  connectDb();
});
