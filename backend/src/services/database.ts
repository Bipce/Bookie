import accommodationsData from "../data/accommodations.json";
import activitiesData from "../data/activities.json";
import { Accommodation } from "../models/accommodations";
import { Activities } from "../models/activities";

export const initializeData = async () => {
  for (const item of accommodationsData) {
    if (await Accommodation.findById(item._id)) {
      continue;
    } else {
      const accommodations = new Accommodation({
        _id: item._id,
        name: item.name,
        price: item.price,
        note: item.note,
        photo: item.photo,
        isPopular: item.isPopular ?? false,
      });

      accommodations.save();
    }
  }

  for (const item of activitiesData) {
    if (await Activities.findById(item._id)) {
      continue;
    } else {
      const activities = new Activities({
        _id: item._id,
        name: item.name,
        photo: item.photo,
      });

      activities.save();
    }
  }
};
