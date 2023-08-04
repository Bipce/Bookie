import axios, { AxiosResponse } from "axios";
import { IAccommodations } from "../models/accommodations";
import { IActivities } from "../models/activities";

export const getAccommodations = async (isPopular?: boolean) => {
  let res: AxiosResponse<IAccommodations[], any>;

  if (isPopular == null) {
    res = await axios.get<IAccommodations[]>("/accommodations");
  } else {
    res = await axios.get<IAccommodations[]>(`/accommodations?isPopular=${isPopular}`);
  }

  return res.data;
};

export const getActivities = async () => {
  const res = await axios.get<IActivities[]>("/activities");
  return res.data;
};

export const getAccommodation = async (id: string) => {
  const res = await axios.get<IAccommodations>(`/accommodations/${id}`);

  return res.data;
};

export const getActivitie = async (id: string) => {
  const res = await axios.get<IActivities>(`/activities/${id}`);

  return res.data;
};
