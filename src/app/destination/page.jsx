import React from "react";
import styles from "./destination.module.css";
import Image from "next/image";
import moon from "/public/assets/destination/image-moon.webp";
import { bellefair } from "../fonts";

export default function Page() {
  return (
    <>
      <span className={styles.bg}></span>
      <div className={[styles.container, bellefair.variable].join(" ")}>
        <div className={styles.title}>
          <span className={styles.index}>{"1".padStart(2, "0")}</span>
          <span>Pick your destination</span>
        </div>
        <div className={styles.main}>
          <div className={styles.image}>
            <Image src={moon} alt="moon" width={"100%"} />
          </div>
          <div className={styles.content}>
            <div className={styles.nav}>
              <ul>
                <li>Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
              </ul>
            </div>
            <div className={styles.text}>
              <h1>Moon</h1>
              <p>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia.
              </p>
              <div className={styles.line}>line</div>
              <div className={styles.footer}>
                <div className={styles.distance}>
                  <h3>AVG. DISTANCE</h3>
                  <h2>100,000 km</h2>
                </div>
                <div className={styles.time}>
                  <h3>EST. TRAVEL TIME</h3>
                  <h2>25 days</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
