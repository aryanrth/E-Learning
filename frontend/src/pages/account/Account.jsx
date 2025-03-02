import React from "react";
import "./account.css";
import { MdDashboard } from "react-icons/md";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import {IoMdLogOut} from "react-icons/io";

const Account = ({user}) => {
  const {setIsAuth,setUser}=UserData();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.clear();
    setIsAuth(false);
    setUser([]);
    toast.success("Logout successfully");
    navigate("/login");
  }
  return (
    <div>
      {
        user && (
          <div className="profile">
        <h2>My profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name-{user.name}</strong>
          </p>
          <p>
            <strong>Email-{user.email}</strong>
          </p>
          <button className="common-btn">
          <MdDashboard />DashBoard</button>
          <br/>
          <button onClick={logoutHandler} className="common-btn" style={{
            background: "red",
            color: "white",
          }}>
        
          <IoMdLogOut />Logout</button>
        </div>

      </div>
        )
      }
    </div>
  );
};

export default Account;
