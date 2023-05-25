import express from "express";
import { Activities } from "../models/activities";

const router = express.Router();

router.get("/", async (req, res) => {
  const activities = await Activities.find();

  return res.json(activities);
});

router.get("/:id", async (req, res) => {
  const activitie = await Activities.findById(req.params.id);

  if (!activitie) {
    return res.status(404).json("Not found");
  }

  return res.json(activitie);
});

export default router;
