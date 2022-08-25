import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/logo-bg.png";
import Classes from "../../styles/Navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <Link to="/" className={Classes.brand}>
            <img src={Image} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
