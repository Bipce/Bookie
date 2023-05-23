import data from "../data/accommodations.json";
import { Accommodation } from "../models/accommodations";

export const initializeData = async () => {
  for (const item of data) {
    if (await Accommodation.findById(item._id)) {
      continue;
    } else {
      const accommodations = new Accommodation({
        _id: item._id,
        name: item.name,
        price: item.price,
        note: item.note,
        photo: item.photo,
        isPopular: item.isPopular,
      });

      accommodations.save();
    }
  }
};
