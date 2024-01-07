import React from "react";
import Jobs from "./components/Jobs"
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"
import CreateJob from "./components/CreateJob";
import ReadJobInfo from "./components/ReadJobInfo";
import Registration from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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
          <Route path="job/readjob/:jobId" element={< ReadJobInfo/>} />
          <Route path="/create-job" element={< CreateJob/>} />
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
