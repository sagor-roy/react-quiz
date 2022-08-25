import React from "react";
import Image from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import RegisterForm from "../RegisterForm";

export default function Register() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={Image} />
        <RegisterForm />
      </div>
    </div>
  );
}
