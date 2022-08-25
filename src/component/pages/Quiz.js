import React from "react";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";

export default function Quiz() {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>

      <Answer />

      <Progressbar />

      <Miniplayer />
    </div>
  );
}
