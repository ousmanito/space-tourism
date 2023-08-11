"use client";
import React, { useState } from "react";
import styles from "./destination.module.css";
import Image from "next/image";
import { bellefair } from "../fonts";
import planets from "public/assets/data.json";

export default function Page() {
  const [planet, setPlanet] = useState("Moon");
  const planetObject = planets.destinations.find((p) => {
    return p.name == planet;
  });
  const imageUrl = `/assets/destination/image-${planet.toLowerCase()}.webp`;
  console.log(imageUrl);
  const desc = planetObject.description;
  const averageDist = planetObject.distance;
  const travelTime = planetObject.travel;
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
            <Image
              src={imageUrl}
              alt="planet-image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.nav}>
              <ul>
                {planets.destinations.map((obj, index) => {
                  console.log(planet, obj.name);
                  return (
                    <li
                      key={index}
                      className={planet == obj.name ? styles.active : ""}
                      onClick={(e) => setPlanet(e.target.innerHTML)}
                    >
                      {obj.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.text}>
              <h1>{planet}</h1>
              <p>{desc}</p>
              <div className={styles.line}>line</div>
              <div className={styles.footer}>
                <div className={styles.distance}>
                  <h3>AVG. DISTANCE</h3>
                  <h2>{averageDist}</h2>
                </div>
                <div className={styles.time}>
                  <h3>EST. TRAVEL TIME</h3>
                  <h2>{travelTime}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
