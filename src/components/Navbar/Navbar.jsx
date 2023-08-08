"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/shared/logo.svg";
import Image from "next/image";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const Navbar = () => {
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
                  </span >
                  <span className={styles['nav-item__name']}>{links[link]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
