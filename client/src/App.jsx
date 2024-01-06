import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"
import Jobs from "./components/Jobs"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route
            path="/job"
            element={localStorage.length > 0 ? <Jobs /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
