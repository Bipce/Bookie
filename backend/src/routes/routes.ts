import express from "express";
import { Accommodation } from "../models/accommodations";

const router = express.Router();

router.post("/", async (req, res) => {
  return res.send();
});

export default router;
