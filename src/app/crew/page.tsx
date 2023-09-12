"use client";
import React, { useEffect, useState } from "react";
import styles from "./crew.module.css";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { bellefair } from "../fonts";
import arrow from "/public/assets/arrow.svg";

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
  const [days, hours] = duration.split(" ");
  let result = "";
  if (parseInt(days)) {
    result += `${parseInt(days)} day${parseInt(days) > 1 ? "s" : ""}, `;
  }
  result += `${parseInt(hours)} hour${parseInt(hours) > 1 ? "s" : ""}`;

  return result;
};

const getAge = (birthdate: string): string => {
  const [day, month, year] = birthdate.split("/");
  const birthDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
  );
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return ` (${age} year${age > 1 ? "s" : ""})`;
};

export default function Page() {
  const [hasSwapped, setHasSwapped] = useState(false);

  useEffect(() => {
    let crewPic: HTMLElement | null;
    let text: HTMLElement | null;
    if (typeof window != undefined) {
      crewPic = document.querySelector(`.${styles.image}`);
      text = document.querySelector(`.${styles.text}`);
    }
    function handleResize() {
      if (crewPic && text) {
        if (window.innerWidth <= 750 && !hasSwapped) {
          swap(crewPic, text);
          setHasSwapped(true);
        } else if (window.innerWidth > 750 && hasSwapped) {
          swap(crewPic, text);
          setHasSwapped(false);
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [hasSwapped]);

  function handleTouchStart(e: TouchEvent) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchMove(e: TouchEvent) {
    const x = e.touches[0].clientX;
    if (startX) {
      const diff = startX - x;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
        setStartX(null);
      }
    }
  }
  function handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        prev();
        break;
      case "ArrowRight":
        next();
        break;
      default:
        break;
    }
  }
  const swap = (a: HTMLElement, b: HTMLElement) => {
    var aParent = a.parentNode;
    var bParent = b.parentNode;

    var aHolder = document.createElement("div");
    var bHolder = document.createElement("div");

    if (aParent && bParent) {
      aParent.replaceChild(aHolder, a);
      bParent.replaceChild(bHolder, b);

      aParent.replaceChild(b, aHolder);
      bParent.replaceChild(a, bHolder);
    }
  };

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
  const [startX, setStartX] = useState<number | null>(null);
  const [staffIndex, setStaffIndex] = useState(0);
  const crewObject: Crew = data.crew[staffIndex];
  const role = crewObject.role;
  const bio = crewObject.bio;
  const name = crewObject.name;
  const birthdate = crewObject.birthdate;
  const missions = crewObject.missions;
  const durationMissions = getMissionDuration(crewObject.durationMissions);
  const imageUrl = crewObject.images.webp;
  return (
    <>
      <span className={styles.bg}></span>
      <div
        className={[bellefair.variable, styles.container].join(" ")}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <Title id={2} />
        <div className={styles.main}>
          <div className={styles.content}>
            <div
              className={styles.left}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
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
              <img src={imageUrl} alt="staff-body" />
            </div>
            <div className={styles.details}>
              <div className={styles.birthdate}>
                <h2>Born</h2>
                <h3>{birthdate.concat(" ", getAge(birthdate))}</h3>
              </div>
              <ul className={styles.missions}>
                <h2>Missions</h2>
                {missions.map((m, id) => {
                  return (
                    <li className="list-style-def" key={id}>
                      {m}
                    </li>
                  );
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
