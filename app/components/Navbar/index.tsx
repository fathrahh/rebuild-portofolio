"use client";

import { useRef } from "react";
import cx from "classnames";
import { FaGithub } from "react-icons/fa";

import { gochiHand } from "@/app/utils/fonts";
import Container from "../Container";

import styles from "./navbar.module.css";
import NavLink from "../Navlink";

export default function Navbar() {
  const ulRef = useRef<HTMLUListElement>(null);
  return (
    <nav className={styles.navbar}>
      <Container className={styles["navbar-wrapper"]}>
        <div className={cx(gochiHand.variable, styles.logo)}>Tur.</div>
        <ul ref={ulRef} className={styles.navlinks}>
          <li>
            <NavLink href="/">Greet</NavLink>
          </li>
          <li>
            <NavLink href="/why">Why?</NavLink>
          </li>
          <li>
            <NavLink href="/me">Me</NavLink>
          </li>
        </ul>
        <div className={styles.action}>
          <a href="https://github.com/fathrahh" target="_blank">
            <FaGithub />
          </a>
          <a
            className={cx("btn", styles.btnHire)}
            href="/cv.pdf"
            download="curiculum vitae"
          >
            Hire Me{" "}
            <span className={styles.icon} data-icon="love">
              😍
            </span>{" "}
            <span className={styles.icon} data-icon="cool">
              😎
            </span>
          </a>
        </div>
      </Container>
    </nav>
  );
}
