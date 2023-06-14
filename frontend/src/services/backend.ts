import axios, { AxiosResponse } from "axios";
import { IAccommodation } from "../models/accommodations";

export const getAccommodations = async (isPopular?: boolean) => {
  let res: AxiosResponse<IAccommodation[], any>;

  if (isPopular == null) {
    res = await axios.get<IAccommodation[]>("/accommodations");
  } else {
    res = await axios.get<IAccommodation[]>(`/accommodations?isPopular=${isPopular}`);
  }

  return res.data;
};
