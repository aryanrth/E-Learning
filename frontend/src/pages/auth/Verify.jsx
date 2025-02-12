import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Verify = () => {
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form>
          <label for="otp">OTP</label>
          <input type="text" id="otp" placeholder="Ebter OTP" required />
          <button className="common-btn">Verify</button>
        </form>
        <p>
          Go to <Link to="/login">Log in</Link>
          page
        </p>
      </div>
    </div>
  );
};

export default Verify;
