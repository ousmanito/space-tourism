import React from "react";
import { bellefair } from "@/app/fonts";
import styles from "./home.module.css";

const Acceuil = () => {
  return (
    <>
      <div className={styles.bg}></div>
      <section className={[bellefair.variable, styles.container].join(" ")}>
        <div className={styles.header}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <a className={styles['btn-container']} href="destination">
          <div className={styles.button}>
            <h2>EXPLORE</h2>
          </div>
        </a>
      </section>
    </>
  );
};

export default Acceuil;
