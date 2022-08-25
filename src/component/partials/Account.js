import React from "react";
import { Link } from "react-router-dom";
import Classes from "../../styles/Account.module.css";

export default function Account() {
  return (
    <div className={Classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/login">Signup</Link>
      <span className="material-icons-outlined" title="Logout">
        logout
      </span>
    </div>
  );
}
