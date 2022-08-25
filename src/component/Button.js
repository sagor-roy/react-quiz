import React from "react";
import Classes from "../styles/Button.module.css";

export default function Button({ children }) {
  return (
    <button className={Classes.button}>
      {children}
    </button>
  );
}
