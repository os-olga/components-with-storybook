import React, { useState } from "react";
import classNames from "classnames";

import { InputProps } from "./Input.types";

import styles from "./Input.module.scss";

export const InputComponent: React.FC<InputProps> = ({
  type,
  value,
  label,
  handleChange,
  onClick,
  placeholder,
  disabled,
  className,
  style,
}) => {
  const [focus, setFocus] = useState(false);

  const inputClass = classNames(
    styles.input,
    { [styles.active]: focus },

    className
  );

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    if (value) {
      return;
    }

    setFocus(false);
  };

  return (
    <div className={inputClass}>
      <input
        type={type ? type : "text"}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="true"
        className={styles.tag}
        style={style}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
