import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Classes from "../styles/Form.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Input from "./TextInput";

export default function RegisterForm() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password does't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      navigate("/");
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Form
      className={`${Classes.signup} ${Classes.form}`}
      onSubmit={handleFormSubmit}
    >
      <Input
        type="text"
        placeholder="Enter name"
        icon="person"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox required>
        <span> I agree to the Terms &amp; Conditions</span>
      </Checkbox>

      <Button disabled={loading} type="submit">
        <span>Register Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login </Link> instead.
      </div>
    </Form>
  );
}
