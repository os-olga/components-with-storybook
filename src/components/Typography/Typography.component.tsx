import classNames from "classnames";

import { TypographyProps } from "./Typography.types";

import styles from "./Typography.module.scss";

export const TypographyComponent: React.FC<TypographyProps> = ({
  children,
  variant,
  className,
  style,
}) => {
  const textClass = classNames(
    styles.typography,
    {
      [styles[`typography_variant_${variant}`]]: variant,
    },
    className
  );
  return (
    <span className={textClass} style={style}>
      {children}
    </span>
  );
};
