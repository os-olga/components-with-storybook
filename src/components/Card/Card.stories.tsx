import React from "react";
import { Card } from ".";

import { Story } from "@storybook/react";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: {
        type: "select",
      },
    },
  },
};

// const Template: Story<CardProps> = (args) => {
//   return (
//     <Cra {...args} />
//   );
// };

// export const badge = Template.bind({});
// badge.args = {
//   text: 'Active',
//   size: 'sm',
//   type: BadgeTypeEnum.active
// };

// export const deactivatedMediumBadge = Template.bind({});
// deactivatedMediumBadge.args = {
//   text: 'Deactivated',
//   size: 'md',
//   type: BadgeTypeEnum.deactivated
// };

// export const newLargeBadge = Template.bind({});
// newLargeBadge.args = {
//   text: 'New',
//   size: 'lg',
//   type: BadgeTypeEnum.new
// };
