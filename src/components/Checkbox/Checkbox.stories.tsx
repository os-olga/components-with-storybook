import { Checkbox } from ".";

import { Story } from "@storybook/react";

import { CheckboxProps } from "./Checkbox.types";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const checkbox = Template.bind({});
checkbox.args = {
  checked: false,
};
