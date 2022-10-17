import { Story } from "@storybook/react";
import { Input } from "./index";

import { InputProps } from "./Input.types";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["text", "number", "email", "password"],
    },
  },
};

const Template: Story<InputProps> = ({ ...args }) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  placeholder: "enter",
};
