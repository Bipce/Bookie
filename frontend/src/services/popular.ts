import axios from "axios";

export const getPopular = async () => {
  try {
    const res = await axios.get("/accommodations?isPopular=true");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
