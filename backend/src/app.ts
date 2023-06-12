import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import { initializeData } from "./services/database";
import accommodations from "./routes/accommodations";
import activities from "./routes/activities";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/accommodations", accommodations);
app.use("/api/activities", activities);

app.use(express.static(path.join(__dirname, "../public")));

const loginDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to Database");
    await initializeData();
  } catch (error) {
    console.log(error);
  }
};

loginDb();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
