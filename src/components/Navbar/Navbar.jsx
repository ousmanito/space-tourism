"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/assets/shared/logo.svg";
import bars from "/public/assets/shared/icon-hamburger.svg";
import close from "/public/assets/shared/icon-close.svg";
import Image from "next/image";
import { barlow } from "@/app/fonts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (typeof window != undefined) {
      if (window.innerWidth > 1400) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
      window.addEventListener("resize", (e) => {
        let width = e.target.innerWidth;
        if (width > 1400) {
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      });
    }
  }, []);
  const toggleMenu = () => {
    setMenu(!menu);
    document
      .querySelector(`.${styles["sidebar-container"]}`)
      .classList.toggle(styles.open);
  };
  let pathname = usePathname();
  const links = {
    home: "Home",
    destination: "Destination",
    crew: "Crew",
    terminology: "Terminology",
  };

  return (
    <div className={styles.navbar}>
      <nav>
        <div className={styles["navbar-container"]}>
          <Image src={Logo} alt="logo" />
          {isOpen && (
            <span className={styles["toggle-btn"]} onClick={() => toggleMenu()}>
              <Image src={menu ? close : bars} width={30} alt="toggleIcon" />
            </span>
          )}
          {!isOpen && (
            <div className={styles["navlist-container"]}>
              <ul>
                {Object.keys(links).map((link, index) => {
                  console.log(link, index);
                  if (pathname === "/") pathname = "/home";
                  const isActive = pathname.match("/".concat(link));
                  return (
                    <li
                      className={[styles["nav-text"], barlow.className].join(" ")}
                      key={index}
                    >
                      <Link href={link} alt="">
                        <span className={styles["nav-item__index"]}>
                          {String(index).padStart(2, "0")}
                        </span>
                        <span
                          className={[
                            styles["nav-item__name"],
                            isActive ? styles.active : null,
                          ].join(" ")}
                        >
                          {links[link]}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

        </div>
      </nav>
        <div className={styles["sidebar-container"]}>
          <ul className={styles["sidebar"]}>
            {Object.keys(links).map((link, index) => {
              console.log(link, index);
              if (pathname === "/") pathname = "/home";
              const isActive = pathname.match("/".concat(link));
              return (
                <li
                  className={[styles["nav-text"], barlow.className].join(" ")}
                  key={index}
                >
                  <Link href={link} alt="">
                    <span className={styles["nav-item__index"]}>
                      {String(index).padStart(2, "0")}
                    </span>
                    <span
                      className={[
                        styles["nav-item__name"],
                        isActive ? styles.active : null,
                      ].join(" ")}
                    >
                      {links[link]}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
