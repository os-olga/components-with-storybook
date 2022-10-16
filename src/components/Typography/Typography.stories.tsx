import { Typography } from ".";

import { Story } from "@storybook/react";

import { TypographyProps, TypographyTypeEnum } from "./Typography.types";

export default {
  title: "components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "sub_m",
        "sub_s",
        "body_m",
        "body_l",
        "caption",
      ],
    },
  },
};

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
h1.args = {
  children: "Heading 1",
  variant: TypographyTypeEnum.h1,
};

export const h2 = Template.bind({});
h2.args = {
  children: "Heading 2",
  variant: TypographyTypeEnum.h2,
};

export const h3 = Template.bind({});
h3.args = {
  children: "Heading 3",
  variant: TypographyTypeEnum.h3,
};

export const h4 = Template.bind({});
h4.args = {
  children: "Heading 4",
  variant: TypographyTypeEnum.h4,
};

export const h5 = Template.bind({});
h5.args = {
  children: "Heading 5",
  variant: TypographyTypeEnum.h5,
};

export const sm = Template.bind({});
sm.args = {
  children: "Text sub_m",
  variant: TypographyTypeEnum.sub_m,
};

export const ss = Template.bind({});
ss.args = {
  children: "text sm",
  variant: TypographyTypeEnum.sub_s,
};

export const caption = Template.bind({});
caption.args = {
  children: "Caption",
  variant: TypographyTypeEnum.caption,
};
