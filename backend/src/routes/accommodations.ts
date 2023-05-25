import express, { Request, Response } from "express";
import { Accommodation, IGetAccomodationQuery } from "../models/accommodations";

const router = express.Router();

router.get("/", async (req: Request<null, null, null, IGetAccomodationQuery>, res: Response) => {
  const { isPopular } = req.query;

  return res.json(await Accommodation.find({ isPopular }));
});

router.get("/:id", async (req, res) => {
  const accommodation = await Accommodation.findById(req.params.id);
  if (!accommodation) {
    return res.status(404).json("Not found");
  }
  return res.json(accommodation);
});

export default router;
