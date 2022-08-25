import React from "react";
import Image from "../../assets/images/success.png";
import Classes from "../../styles/Quiz.module.css";
import Question from "../Question";

export default function Result() {
  return (
    <div>
      <div className={Classes.summary}>
        <div className={Classes.point}>
          <p className={Classes.score}>
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={Classes.badge}>
          <img src={Image} alt="Success" />
        </div>
      </div>

      <div className={Classes.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>

        <Question />
        <Question />
      </div>
    </div>
  );
}
