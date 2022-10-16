import { Toggle } from ".";

import { Story } from "@storybook/react";

import { ToggleProps } from "./Toggle.types";

export default {
  title: "components/Toggle",
  component: Toggle,
};

const Template: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />;
};

export const toggle = Template.bind({});
toggle.args = {
  checked: true,
  label: "test",
};
