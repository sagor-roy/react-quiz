import React from "react";
import Image from "../../assets/images/login.svg";
import Classes from "../../styles/Form.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Input from "../TextInput";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={Image} />
        <Form className={`${Classes.login} ${Classes.form}`} method="post">
          <Input
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <Input type="password" placeholder="Enter password" icon="lock" />

          <Button text="Submit now" />

          <div className="info">
            Don't have an account? <Link to="/register">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
