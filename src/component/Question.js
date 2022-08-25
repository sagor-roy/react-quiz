import React from "react";
import Answers from "../styles/Answer.module.css";
import Classes from "../styles/Question.module.css";
import Checkbox from "./Checkbox";

export default function Question() {
  return (
    <div className={Classes.question}>
      <div className={Classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div className={Answers.answers}>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
        <Checkbox className={Answers.answer}>A New Hope 1</Checkbox>
      </div>
    </div>
  );
}
