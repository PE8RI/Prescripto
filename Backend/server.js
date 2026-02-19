import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working properly"
  });
});

 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
