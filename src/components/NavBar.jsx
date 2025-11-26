import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.nav} navMobile`}>
      <Link to="/">
        <div className={styles.navLogo}>
          <div className={styles.logoCircle}>
            <svg
            style={{ width: "18px", height: "18px", color: "white" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13l1-3c.2-.6.8-1 1.4-1h13.2c.6 0 1.2.4 1.4 1l1 3v6c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1H6v1c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-6zm3.5 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM6.9 10L6 13h12l-.9-3H6.9z" />
          </svg>

          </div>
        </div>
      </Link>

      <div className={`${styles.navCenter} navCenterMobile`}>
        <Link to="/" className={`${styles.navLink} navLink`}>
          Home
        </Link>
        <Link to="/etica" className={`${styles.navLink} navLink`}>
          Questão Ética
        </Link>
        <Link to="/saiba-mais" className={`${styles.navLink} navLink`}>
          Saiba Mais
        </Link>
        <Link to="/pro-con" className={`${styles.navLink} navLink`}>
          Prós e Contras
        </Link>
      </div>
    </nav>
  );
}