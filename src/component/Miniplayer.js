import React from "react";
import Image from "../assets/images/3.jpg";
import Classes from "../styles/Miniplayer.module.css";

export default function Miniplayer() {
  return (
    <div className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${Classes.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${Classes.close}`}> close </span>
      <img src={Image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
