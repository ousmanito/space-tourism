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
  missions: string[];
  birthdate: string;
  durationMissions: string;
};

const getMissionDuration = (duration: string): string => {
  const [days, hours] = duration.split(' ');
  let result = '';
  if (parseInt(days)) {
    result += `${parseInt(days)} day${parseInt(days) > 1 ? 's' : ''}, `;
  }
  result += `${parseInt(hours)} hour${parseInt(hours) > 1 ? 's' : ''}`;

  return result;
}

const getAge = (birthdate: string): string => {
  const [day, month, year] = birthdate.split('/');
  const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return ` (${age} year${age > 1 ? 's' : ''})`;
}

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
  const birthdate = crewObject.birthdate;
  const missions = crewObject.missions;
  const durationMissions = getMissionDuration(crewObject.durationMissions)
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
          <div className={styles.card}>
            <div className={styles.image}>

              <img
                src={imageUrl}
                alt="staff-body"
              />

            </div>
            <div className={styles.details}>

              <div className={styles.birthdate}>
                <h2>Born</h2>
                <h3>{birthdate.concat(' ', getAge(birthdate))}</h3>
              </div>
              <ul className={styles.missions}>
                <h2>Missions</h2>
                {missions.map((m, id) => {
                  return (
                    <li className="list-style-def" key={id}>{m}</li>
                  )
                })}
              </ul>
              <div className={styles.duration}>
                <h2>Time in space</h2>
                <h3>{durationMissions}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
