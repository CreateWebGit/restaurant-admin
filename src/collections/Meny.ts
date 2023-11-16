import { CollectionConfig } from "payload/types";
import { Meal } from "../blocks/Meal/Config";

const Meny: CollectionConfig = {
  slug: "mat-menyer",
  access: {
    read: ({ req: { user } }) => true,
  },
  labels: {
    singular: "Våran matmeny",
    plural: "Våran matmeny",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Meny titel",
      type: "text",
    },
    {
      name: "myMeel",
      label: " ",
      labels: {
        singular: "Måltidskategori",
        plural: "Måltidskategorier",
      },
      type: "blocks",
      blocks: [Meal],
    },
  ],
};

export default Meny;
