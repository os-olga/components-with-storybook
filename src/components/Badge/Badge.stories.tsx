import React from "react";
import { Badge } from ".";

import { Story } from "@storybook/react";

import { BadgeProps, BadgeTypeEnum } from "./Badge.types";

export default {
  title: "Components/Badge",
  component: Badge,
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
      options: [
        "notAvailable",
        "new",
        "popular",
        "inactive",
        "active",
        "deactivated",
        "process",
        "onApproval",
        "completed",
        "unpublished",
        "recomended",
        "competitorPosition",
      ],
    },
  },
};

const Template: Story<BadgeProps> = (args) => {
  return <Badge {...args} />;
};

export const badge = Template.bind({});
badge.args = {
  text: "Active",
  size: "sm",
  type: BadgeTypeEnum.active,
};
