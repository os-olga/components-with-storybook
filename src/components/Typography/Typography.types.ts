import { ReactNode } from "react";

export enum TypographyTypeEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  sub_m = "sub_m",
  sub_s = "sub_s",
  body_m = "body_m",
  body_l = "body_l",
  caption = "caption",
}

export type TypographyProps = {
  children: ReactNode;
  variant: TypographyTypeEnum;
  className?: string;
  style?: React.CSSProperties;
};
