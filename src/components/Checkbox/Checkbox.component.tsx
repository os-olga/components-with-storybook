import React from "react";
import classNames from "classnames";
import { SvgIcon } from "components/SvgIcon";

import { CheckboxProps } from "./Checkbox.types";

import styles from "./Checkbox.module.scss";

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  label,
  className,
  checked,
  handleChange,
}) => {
  const checkboxClass = classNames(styles.checkbox, className);

  return (
    <div style={{ position: "relative" }}>
      <label className={checkboxClass}>
        <input
          type="checkbox"
          id={label}
          onChange={handleChange}
          checked={checked}
        />
        {label}
        <SvgIcon
          src={"../../svg/checkmark.svg"}
          size={12}
          className={styles.checkmark}
        />
        <span className="check"></span>
      </label>
    </div>
  );
};
