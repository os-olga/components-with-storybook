import { Avatar } from ".";

import { Story } from "@storybook/react";

import { AvatarProps } from "./Avatar.types";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
  },
};

const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />;
};

export const avatar = Template.bind({});
avatar.args = {
  firstname: "Marfa",
  lastname: "Nemo",
  size: "sm",
  image: "",
};
