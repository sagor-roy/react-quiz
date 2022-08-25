import React from "react";
import Classes from "../styles/Button.module.css";

export default function Button({ text }) {
  return (
    <div className={Classes.button}>
      <span>{text}</span>
    </div>
  );
}
