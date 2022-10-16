import React from "react";
import classNames from "classnames";
import { TypographyTypeEnum, Typography } from "components/Typography";

import { AvatarProps } from "./Avatar.types";

import styles from "./Avatar.module.scss";

const obj = {
  sm: TypographyTypeEnum.body_m,
  md: TypographyTypeEnum.body_l,
  lg: TypographyTypeEnum.h3,
};

export const AvatarComponent: React.FC<AvatarProps> = ({
  firstname = "",
  lastname = "",
  image,
  size,
  className,
}) => {
  const avatarClass = classNames(
    styles.avatar,
    {
      [styles[`avatar_size_${size}`]]: size,
    },
    className
  );

  return (
    <div
      className={avatarClass}
      style={
        image
          ? {
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {!image && (
        <Typography variant={obj[size]}>
          {firstname[0] + lastname[0]}
        </Typography>
      )}
    </div>
  );
};

AvatarComponent.displayName = "Avatar";
