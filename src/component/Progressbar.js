import React from "react";
import Classes from '../styles/Progressbar.module.css';
import { Link } from "react-router-dom";

export default function Progressbar() {
  return (
    <div className={Classes.progressBar}>
      <div className={Classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Classes.rangeArea}>
        <div className={Classes.tooltip}>24% Cimplete!</div>
        <div className={Classes.rangeBody}>
          <div className={Classes.progress} style={{width: '20%'}}></div>
        </div>
      </div>
      <Link to="/result">
        <button className={`${Classes.button} ${Classes.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
}
