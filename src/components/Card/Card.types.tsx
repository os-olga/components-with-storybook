import { BadgeProps } from "components/Badge";

export type CardProps = {
  item: ItemType;
  isInCatalogue: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export type ItemType = {
  id: number;
  text: string;
  barcode: string;
  src: string | null;
  badges: BadgeProps[];
  rates: number;
  description: string;
  price: number;
  currency: string;
};
