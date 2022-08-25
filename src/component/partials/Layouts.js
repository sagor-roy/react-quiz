import React from "react";
import Classes from "../../styles/Layouts.module.css";

export default function Layouts({ children }) {
  return (
    <div className={Classes.main}>
      <div className={Classes.container}>{children}</div>
    </div>
  );
}
