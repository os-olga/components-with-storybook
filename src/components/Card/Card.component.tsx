import React from "react";
import classNames from "classnames";
import { Badge } from "components/Badge";
import { Button } from "components/Button";
import { Rating } from "components/Rating";
import { Typography, TypographyTypeEnum } from "components/Typography";

import { CardProps } from "./Card.types";

import styles from "./Card.module.scss";

export const CardComponent: React.FC<CardProps> = ({
  item,
  isInCatalogue,
  className,
}) => {
  const cardClass = classNames(styles.card, className);

  return (
    <div className={cardClass}>
      <div className={styles.imageCard}>
        <div className={styles.badges}>
          {item?.badges?.map((badge) => {
            return (
              <Badge
                text={badge.text}
                size={badge.size}
                type={badge.type}
                key={badge.type}
              />
            );
          })}
        </div>

        {item.src === null ? (
          <img src="../../png/noimage.png" alt="" />
        ) : (
          <img src={item.src} alt="" />
        )}
      </div>

      <div className={styles.infoCard}>
        <Typography variant={TypographyTypeEnum.h4}>{item.text}</Typography>
        <Typography variant={TypographyTypeEnum.caption}>
          {item.barcode}
        </Typography>
        <Rating className={styles.ratesBlock} count={item.rates} />
        <Typography
          variant={TypographyTypeEnum.body_m}
          className={styles.description}
        >
          {item.description}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography variant={TypographyTypeEnum.h4}>
              {item.currency}
            </Typography>
            <Typography variant={TypographyTypeEnum.h4}>
              {item.price}
            </Typography>
          </div>
          {isInCatalogue && <Button text="Add" size="sm" />}
        </div>
      </div>
    </div>
  );
};

CardComponent.displayName = "Card";
