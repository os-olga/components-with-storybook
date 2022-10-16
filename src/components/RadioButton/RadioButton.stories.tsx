import React, { useState } from "react";
import { RadioButton } from ".";

import { Story } from "@storybook/react";

import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/Radio",
  component: RadioButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template: Story<RadioButtonProps> = (args) => {
  return (
    <>
      <RadioButton {...args} />
    </>
  );
};

export const radioButton = Template.bind({});
radioButton.args = {
  label: "radio",
};
