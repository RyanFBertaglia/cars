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
              style={{ width: "16px", height: "16px", color: "white" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
      </Link>

      <div className={`${styles.navCenter} navCenterMobile`}>
        <Link to="/" className={`${styles.navLink} navLink`}>
          Home
        </Link>
        <Link to="/noticias" className={`${styles.navLink} navLink`}>
          Últimas Notícias
        </Link>
        <Link to="/saiba-mais" className={`${styles.navLink} navLink`}>
          Saiba Mais
        </Link>
      </div>
    </nav>
  );
}