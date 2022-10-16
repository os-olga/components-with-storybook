import React from "react";
import classNames from "classnames";
import { Typography, TypographyTypeEnum } from "components/Typography";

import { ToggleProps } from "./Toggle.types";

import styles from "./Toggle.module.scss";

export const ToggleComponent: React.FC<ToggleProps> = ({
  checked = false,
  className,
  handleChange,
  label = "text",
}) => {
  const toggleClass = classNames(styles.toggle, className);

  return (
    <label className={toggleClass}>
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <span className={styles.check}></span>
      <Typography variant={TypographyTypeEnum.body_l} className={styles.label}>
        {label}
      </Typography>
    </label>
  );
};

ToggleComponent.displayName = "Toggle";
