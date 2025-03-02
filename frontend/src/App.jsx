import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";

const App = () => {
  const { isAuth, user,loading } = UserData();
  return (
    <>
     {loading?(<Loading/>):( <BrowserRouter>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/account"
            element={isAuth ? <Account user={user} /> : <Login />}
          />
          <Route path="/Login" element={isAuth ? <Home /> : <Login />} />
          <Route path="/Register" element={isAuth ? <Home /> : <Register />} />
          <Route path="/Verify" element={isAuth ? <Home /> : <Verify />} />
        </Routes>
        <Footer />
      </BrowserRouter>)}
    </>
  );
};

export default App;
