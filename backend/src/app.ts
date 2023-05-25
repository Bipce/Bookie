import express from "express";
import mongoose from "mongoose";
import accommodations from "./routes/accommodations";
import activities from "./routes/activities";
import { initializeData } from "./services/database";

const app = express();

app.use(express.json());
app.use("/api/accommodations", accommodations);
app.use("/api/activities", activities);

const loginDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Bookie");
    console.log("Connect to Database");
    await initializeData();
  } catch (error) {
    console.log(error);
  }
};

loginDb();

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
