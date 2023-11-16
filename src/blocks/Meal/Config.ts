import { Block } from "payload/types";
import { Content } from "../Content/Config";

export const Meal: Block = {
  slug: "meal",
  labels: {
    singular: "Måltidskategori",
    plural: "Måltidskategorier",
  },
  fields: [
    {
      name: "title",
      label: "Kategorinamn:",
      type: "text",
    },
    {
      name: "meal",
      label: "Maträtter",
      labels: {
        singular: "maträtt",
        plural: "maträtter",
      },
      type: "blocks",
      blocks: [Content],
    },
  ],
};

export default Meal;
