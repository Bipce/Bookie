import express from "express";
import { Accommodation } from "../models/accommodations";

const router = express.Router();

router.post("/", async (req, res) => {
  return res.send();
});

router.get("/", async (req, res) => {
  const accommodations = await Accommodation.find();
  return res.json(accommodations);
});

export default router;
