import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import {UserData} from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <label for="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="first"
            name="first"
            placeholder="Enter your name"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="first"
            name="first"
            placeholder="Enter your email"
            required
          />

          <label for="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <button type="submit" className="common-btn" disabled={btnLoading}>
            {btnLoading ? "please wait..." : "Register"}
          </button>
        </form>
        <p>
          have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
