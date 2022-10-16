import React from 'react';
import classNames from 'classnames';

import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.types';

export const BadgeComponent: React.FC<BadgeProps> = ({
  text='Popular',
  size = 'md',
  type='popular',
  className,
}) => {
  const badgeClass = classNames(
    styles.badge,
    {
      [styles[`badge_size_${size}`]]: size,
      [styles[`badge_type_${type}`]]: type,
    },
    className
  );

  return (
      <div className={badgeClass}>{text}</div>
  );
};

BadgeComponent.displayName = 'Badge';
