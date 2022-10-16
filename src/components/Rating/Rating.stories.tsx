import { Rating } from ".";

import { Story } from "@storybook/react";

export default {
  title: "components/Rating",
  component: Rating,
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

// const Template: Story<RatingProps> = (args) => <Rating {...args} />;
