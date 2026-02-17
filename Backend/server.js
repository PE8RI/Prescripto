import express from "express";
import cors from "cors";
import dotenv from "dotenv";

 

const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
