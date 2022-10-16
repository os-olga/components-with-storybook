import classNames from "classnames";

import { RadioButtonProps } from "./RadioButton.types";

import styles from "./RadioButton.module.scss";

export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  value,
  name,
  label,
  handleChange,
  className,
  style,
}) => {
  const radioClass = classNames(styles.radio, className);
  return (
    <label className={radioClass}>
      <input
        type="radio"
        id={value}
        value={value}
        name={name}
        onChange={handleChange}
      />
      {label}
      <span></span>
    </label>
  );
};
