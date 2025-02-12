import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return(
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to Elearning Platform</h1>
          <p>Learn ,Grow,Excel</p>
          <button className="common-btn" onClick={()=>navigate("/courses")}>Get Started</button>
        </div>
      </div>
    </div>
  )
};

export default Home;
