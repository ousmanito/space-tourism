"use client";
import React, { useState } from "react";
import styles from "./crew.module.css";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { bellefair } from "../fonts";
import arrow from "/public/assets/arrow.svg";

// const handleSwipe = (event: TouchEvent) => {
//   const xDiff = event.targetTouches[0].clientX - event.touches[0].clientX;
//
//   if (xDiff > 0) {
//     next();
//   } else {
//     prev();
//   }
// };

var data = require("public/assets/data");

type Images = {
  webp: string;
  png: string;
};

type Crew = {
  name: string;
  images: Images;
  role: string;
  bio: string;
};

export default function Page() {
  const next = () => {
    if (staffIndex < data.crew.length - 1) {
      setStaffIndex(staffIndex + 1);
    }
    setStaffIndex((staffIndex + 1) % data.crew.length);
  };

  const prev = () => {
    if (staffIndex == 0) {
      setStaffIndex(data.crew.length - 1);
    } else {
      setStaffIndex(staffIndex - 1);
    }
  };

  const goTo = (index: number) => {
    setStaffIndex(index);
  };
  const [staffIndex, setStaffIndex] = useState(0);
  const crewObject: Crew = data.crew[staffIndex];
  const role = crewObject.role;
  const bio = crewObject.bio;
  const name = crewObject.name;
  const imageUrl = crewObject.images.webp;
  return (
    <>
      <span className={styles.bg}></span>
      <div className={[bellefair.variable, styles.container].join(" ")}>
        <Title id={2} />
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.left}>
              <span className={styles.previous}>
                <Image
                  src={arrow}
                  alt="previous"
                  width={30}
                  height={30}
                  onClick={prev}
                />
              </span>
              <div className={styles.text}>
                <h3>{role}</h3>
                <h2>{name}</h2>
                <p>{bio}</p>
                <div className={styles.footer}>
                  {data.crew.map((t: Crew, index: number) => {
                    return (
                      <span
                        key={index}
                        className={[
                          t.name == name ? styles.active : "",
                          styles.dot,
                        ].join(" ")}
                      ></span>
                    );
                  })}
                </div>
              </div>
              <span className={styles.next}>
                <Image src={arrow} alt="next" width={30} onClick={next} />
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src={imageUrl}
              alt="staff-body"
              sizes="100vh"
              style={{ height: "100%", width: "fit-content" }}
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}
