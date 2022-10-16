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

export const typography = Template.bind({});
typography.args = {
  children:
    "Spicy jalapeno bacon ipsum dolor amet swine tenderloin andouille, beef ribs rump prosciutto alcatra hamburger jerky.",
  variant: TypographyTypeEnum.h1,
};
