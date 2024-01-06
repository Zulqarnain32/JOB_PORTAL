import React from "react";

const Vacancies = () => {
  return (
    <>
      <div className="vacenies-container">
        <h1>Most Popular Vacencies</h1>
        <div className="vacency-box">
          <div className="single-vacency">
            <h3>Software Engineer</h3>
            <p>800 Open Positions</p>
            <h3>Frontend Developer</h3>
            <p>600 Open Positions</p>
            <h3>Data Scientist</h3>
            <p>400 Open Positions</p>
          </div>
          <div className="single-vacency">
            <h3>UX/UI Designer</h3>
            <p>300 Open Positions</p>
            <h3>Full Stack Developer</h3>
            <p>700 Open Positions</p>
            <h3>Product Manager</h3>
            <p>500 Open Positions</p>
          </div>
          <div className="single-vacency">
            <h3>DevOps Engineer</h3>
            <p>200 Open Positions</p>
            <h3>Mobile App Developer</h3>
            <p>900 Open Positions</p>
            <h3>AI/Machine Learning Engineer</h3>
            <p>100 Open Positions</p>
          </div>
          <div className="single-vacency">
            <h3>Cybersecurity Analyst</h3>
            <p>450 Open Positions</p>
            <h3>Cloud Solutions Architect</h3>
            <p>550 Open Positions</p>
            <h3>Blockchain Developer</h3>
            <p>350 Open Positions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;
