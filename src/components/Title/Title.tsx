import React from "react";
import styles from "./title.module.css";
import { NextPage } from "next";

type Props = {
  id: number;
  text: string;
}

const Title: NextPage<Props> = (props) => {
  return (
    <div className={styles.title}>
      <span className={styles.index}>{String(props.id).padStart(2, "0")}</span>
      <span>{props.text}</span>
    </div>
  );
};
export default Title
