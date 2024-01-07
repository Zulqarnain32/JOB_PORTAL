import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ReadJobInfo = () => {
  const [jobData, setJobData] = useState([]);
  const { jobId } = useParams();
  console.log("jobId:", jobId);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/createjob/readjob`)
      .then((result) => {
        setJobData(result.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const selectedJob = jobData.find((job) => job._id === jobId);

  return (
    <div className="read-job-container">
      {selectedJob ? (
        <div className="j-title">
          <h1>Job Title: {selectedJob.jobTitle}</h1>
          <p className="post-by">Posted by :{selectedJob.company}</p>
          <p className="post-time">🕥 {selectedJob.jobDate}</p>
          <div className="description">
            <h3 className="underline">Description</h3>
            <p className="des-p">
              Software engineering is the systematic application of engineering
              principles to design, develop, test, and maintain software
              systems. It involves a disciplined and structured approach to
              software development, incorporating methods, tools, and best
              practices to create reliable, scalable, and maintainable software
              solutions. Software engineers collaborate to address complex
              problems, ensuring the efficient and effective delivery of
              high-quality software products that meet user needs and industry
              standards.
            </p>
          </div>
          <div className="deadline">Deadline:  Jan 25, 2024</div>
          <div className="vacancy">Job Vacancies : 4</div>
          <h3 className="underline">
            Requirements
          </h3>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Cloud Computing</li>
          </ul>
          <h3 className="underline">
            Facilities
          </h3>
               <ul>
                <li>Bonus</li>
                <li>Food</li>
                <li>Transportation</li>
               </ul>
               <h4 className="sallary">
                Sallary: 200K
               </h4>
               <h3 className="underline">To Apply</h3>
               <div className="send-cv">Send Your Cv/Resume</div>
               <div className="company-job">Email: jobs@{selectedJob.company}.com</div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default ReadJobInfo;
