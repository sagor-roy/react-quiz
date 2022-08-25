import React from "react";
import Classes from "../styles/Illustration.module.css";

export default function Illustration(props) {
  return (
    <div className={Classes.illustration}>
      <img src={props.image} alt="Signup" />
    </div>
  );
}
