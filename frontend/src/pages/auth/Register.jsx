import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form>
          <label for="name">Name</label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your name"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="first"
            name="first"
            placeholder="Enter your email"
            required
          />

          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <button className="common-btn">Register</button>
        </form>
        <p>
          have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
