"use client";
import React, { useState } from "react";
import styles from "./destination.module.css";
import Image from "next/image";
import { bellefair } from "../fonts";
import Title from "@/components/Title/Title";

var data = require("public/assets/data");

type Planet = {
  name: string;
  description: string;
  distance: string;
  travel: string;
};

export default function Page() {
  const [planet, setPlanet] = useState("Moon");
  const planetObject = data.destinations.find((p: Planet) => {
    return p.name == planet;
  });
  const imageUrl = `/assets/destination/image-${planet.toLowerCase()}.webp`;
  console.log(imageUrl);
  const desc = planetObject.description;
  const averageDist = planetObject.distance;
  const travelTime = planetObject.travel;
  const titleText = 'Pick your destination'
  return (
    <>
      <span className={styles.bg}></span>
      <div className={[styles.container, bellefair.variable].join(" ")}>
        <Title id={1} text={titleText} />
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
                {data.destinations.map((obj: Planet, index: number) => {
                  return (
                    <li
                      key={index}
                      className={planet == obj.name ? styles.active : ""}
                      onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                        setPlanet(e.currentTarget.innerHTML)
                      }
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
