"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/assets/shared/logo.svg";
import bars from "/public/assets/shared/icon-hamburger.svg";
import Image from "next/image";
import { barlow } from "@/app/fonts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof window != undefined) {
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
  let pathname = usePathname();
  const links = {
    home: "Home",
    destination: "Destination",
    crew: "Crew",
    terminology: "Terminology",
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <Image src={Logo} alt="logo" />
        {isOpen && <span onClick={() => setIsOpen(!isOpen)}>
          <Image src={bars} width={30} alt="bars"/>
        </span>}
        {!isOpen && (
          <ul>
            {Object.keys(links).map((link, index) => {
              if (pathname === "/") pathname = "/home";
              const isActive = pathname.match("/".concat(link));
              return (
                <li className="nav-text" key={index}>
                  <Link
                    href={link}
                    alt=""
                    className={[
                      isActive ? "active" : null,
                      barlow.className,
                      "nav-text",
                    ].join(" ")}
                  >
                    <span className={styles["nav-item__index"]}>
                      {String(index).padStart(2, "0")}
                    </span>
                    <span className={styles["nav-item__name"]}>
                      {links[link]}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
