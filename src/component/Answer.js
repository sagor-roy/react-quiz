import React from "react";
import Classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answer() {
  return (
    <div className={Classes.answers}>
      <Checkbox className={Classes.answer}>
        <span> I agree to the Terms &amp; Conditions</span>
      </Checkbox>

      <Checkbox className={Classes.answer}>
        <span> I agree to the Terms &amp; Conditions</span>
      </Checkbox>

      <Checkbox className={Classes.answer}>
        <span> I agree to the Terms &amp; Conditions</span>
      </Checkbox>
    </div>
  );
}
