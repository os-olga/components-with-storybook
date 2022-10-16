import { BadgeTypeEnum } from "components/Badge";
import { ItemType } from "components/Card";

export const camerasCard: ItemType[] = [
  {
    id: 1,
    text: "DS-2CD2821G0 (AC24V/DC12V)",
    barcode: "SAP123877",
    src: "../../png/camera.png",
    price: 100,
    rates: 4,
    description: "2MP IP camera in a standard case Lorem ipsum dolor sit.",
    currency: "$",
    badges: [
      { type: BadgeTypeEnum.popular, text: "Popular", size: "md" },
      {
        type: BadgeTypeEnum.competitorPosition,
        text: "Competitor position",
        size: "md",
      },
      { type: BadgeTypeEnum.new, text: "New", size: "md" },
    ],
  },
  {
    id: 2,
    text: "DR-21D28PPG0 (BR24V/YU12V)",
    barcode: "SAP123877",
    src: null,
    price: 200,
    rates: 3,
    description: "2MP IP camera in a standard case Lorem ipsum dolor sit.",
    currency: "$",
    badges: [
      { type: BadgeTypeEnum.notAvailable, text: "Not Available", size: "md" },
    ],
  },
];
