import axios, { AxiosResponse } from "axios";
import { IAccommodation } from "../models/accommodations";
import { IActivities } from "../models/activities";

export const getAccommodations = async (isPopular?: boolean) => {
  let res: AxiosResponse<IAccommodation[], any>;

  if (isPopular == null) {
    res = await axios.get<IAccommodation[]>("/accommodations");
  } else {
    res = await axios.get<IAccommodation[]>(`/accommodations?isPopular=${isPopular}`);
  }

  return res.data;
};

export const getActivities = async () => {
  const res = await axios.get<IActivities[]>("/activities");
  return res.data;
};

export const getAccommodation = async (id: string) => {
  const res = await axios.get<IAccommodation>(`/accommodations/${id}`);

  return res.data;
};
