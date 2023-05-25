import { Schema, model } from "mongoose";

interface IActivities {
  _id: string;
  name: string;
  photo: string;
}

const activitiesSchema = new Schema<IActivities>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
});

export const Activities = model<IActivities>("Activities", activitiesSchema);
