import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:5000/auth/dashboard").then((res) => {
      console.log(res + "  dashboard page");
      if (res.data == "succeed") {
        setSuccess("success ok");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <h1 className="admin">Admin Panel in MERN Stack</h1>
      <h2>{success} Message</h2>

      <h1>Fetch Data from Users</h1>
      <div>
        <p>getUsersData</p>

        <div className="user-data-container"></div>
      </div>
    </>
  );
};

export default Dashboard;
