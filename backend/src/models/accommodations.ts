import { Schema, model } from "mongoose";

interface IAccommodation {
  _id: string;
  name: string;
  price: number;
  note: number;
  photo: string;
  isPopular?: boolean;
}

const accommodationSchema = new Schema<IAccommodation>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  note: { type: Number, required: true },
  photo: { type: String, required: true },
  isPopular: Boolean,
});

export const Accommodation = model<IAccommodation>("Accommodation", accommodationSchema);

export interface IGetAccomodationQuery {
  isPopular: boolean;
}
