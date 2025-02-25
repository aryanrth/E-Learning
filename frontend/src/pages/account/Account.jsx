import React from "react";
import "./account.css";
import { MdDashboard } from "react-icons/md";

const Account = () => {
  return (
    <div>
      <div className="profile">
        <h2>My profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name-Aryan</strong>
          </p>
          <p>
            <strong>Email-rathouraryan200@gmail.com</strong>
          </p>
          <button className="common-btn">
          <MdDashboard />DashBoard</button>
        </div>

      </div>
    </div>
  );
};

export default Account;
