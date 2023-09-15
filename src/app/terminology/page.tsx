"use client";
import React, { useEffect, useState } from "react";
import styles from "./terminology.module.css";
import Image from "next/image";
import Title from "@/components/Title/Title";
import { bellefair } from "../fonts";
import imgg from "/public/assets/technology/";

var data = require("public/assets/data");

type Images = {
  portrait: string;
  landscape: string;
};

type Tech = {
  name: string;
  images: Images;
  description: string;
};

export default function Page() {
  const [techId, setTechId] = useState(0);
  const tech: Tech = data.technology[techId];
  const name = tech.name;
  const desc = tech.description;
  const [windowWidth, setWindowWidth] = useState(500);
  const imageUrl =
    windowWidth <= 1000 ? tech.images.landscape : tech.images.portrait;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <span className={styles.bg}></span>
      <div className={[bellefair.variable, styles.container].join(" ")}>
        <Title id={2} />
        <main>
          <div className={styles.left}>
            <ul className={styles.buttons}>
              <li
                className={techId == 0 ? styles.active : ""}
                onClick={() => setTechId(0)}
              >
                1
              </li>
              <li
                className={techId == 1 ? styles.active : ""}
                onClick={() => setTechId(1)}
              >
                2
              </li>
              <li
                className={techId == 2 ? styles.active : ""}
                onClick={() => setTechId(2)}
              >
                3
              </li>
            </ul>
            <div className={styles.text}>
              <h4>THE TERMINOLOGY…</h4>
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={imageUrl} alt="" />
          </div>
        </main>
      </div>
    </>
  );
}
