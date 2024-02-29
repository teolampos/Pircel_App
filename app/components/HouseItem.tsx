"use client";
import { useEffect, useState } from "react";
import styles from "./houseItem.module.scss";
import { parseColors } from "../helpers/colorHelpers";

interface Props {
  name: string;
  animal: string;
  founder: string;
  colorString: string;
}

export default function HouseItem({
  name,
  animal,
  founder,
  colorString,
}: Props) {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(parseColors(colorString));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{name}</h2>
        <span className={styles.animal}>{animal || null}</span>
      </div>
      <div
        className={styles.gradient}
        style={{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
        }}
      ></div>
      <div className={styles.footer}>
        <span>Founder: </span>
        <h4>{founder}</h4>
      </div>
    </div>
  );
}
