import classNames from "classnames";

import { RatingProps } from "./Rating.types";

import styles from "./Rating.module.scss";

export const RatingComponent: React.FC<RatingProps> = ({
  count,
  className,
}) => {
  const ratingClass = classNames(styles.rating, className);

  const stars: JSX.Element[] = [];
  for (let i = 1; i <= count; i++) {
    stars.push(<img src="../../svg/star.svg" alt="star" key={i} />);
  }

  return <div className={ratingClass}>{stars}</div>;
};
