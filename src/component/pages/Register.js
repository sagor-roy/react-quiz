import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/signup.svg";
import Classes from "../../styles/Form.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Input from "../TextInput";

export default function Register() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={Image} />
        <Form className={`${Classes.signup} ${Classes.form}`} method="post">
          <Input type="text" placeholder="Enter name" icon="person" />

          <Input
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <Input type="password" placeholder="Enter password" icon="lock" />

          <Input
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox>
            <span> I agree to the Terms &amp; Conditions</span>
          </Checkbox>

          <Button text="Submit now" />

          <div className="info">
            Already have an account? <Link to="/login">Login </Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
