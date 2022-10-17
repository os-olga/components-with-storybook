import React, { ChangeEvent, ReactNode, FocusEvent } from "react";

export type InputProps = {
  name: string | number | undefined;
  value: string;
  type?: string;
  label?: string;
  buttonSide?: ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  minLength?: string;
  maxLength?: string;
  className?: string;
  style?: React.CSSProperties;
};
