import React from "react";
import styles from "./title.module.css";
const Title = ({ id }) => {
  return (
    <div className={styles.title}>
      <span className={styles.index}>{String(id).padStart(2, "0")}</span>
      <span>Pick your destination</span>
    </div>
  );
};
export default Title
