import React from "react";
import logo from '../../assets/images/logo.png';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav
      className={`navbar ${styles["nav"]}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className={styles["navbar-item"]} href="https://bulma.io">
          <img
            alt="logo"
            src={logo}
          />
        </a>

        <a
          href="#kk"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div className="navbar-item">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
