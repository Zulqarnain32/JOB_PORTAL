import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Footer from './Footer'
import axios from "axios"
const Recruiter = () => {
  const [jobData, setJobData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/createjob/readjob')
      .then((result) => {
        // console.log(result.data);
        setJobData(result.data)
       
      })
  }, [])

  const handleDelete = (id) => {
    console.log("user id is " + id);
    axios.delete('http://localhost:5000/createjob/delete/'+id)
    .then(result => {
      console.log(result)
      window.location.reload()
    })
    .catch(err => console.log(err))
}

  
  return (
    <>
    <Link to = "/create-job"><button className='cr-job'>Create Job</button></Link>
      <div className="job-container">
        {
          jobData.map((job) => (
            <div className="job" key={job._id}>
              <div className='job-heading'>
                <div className='letter'>
                  <div className="l">C</div>
                </div>
                <div>
                  <div className="job-title">{job.jobTitle}</div>
                  <p className="company-name">{job.company}</p>
                </div>
              </div>
              <div className="job-info">
                <p>{job.jobDate}</p>
                <p>{job.city}</p>
                <p>{job.jobType}</p>
                <p className={`${job.jobStatus == "pending" ? "yellow":"green"}`}>{job.jobStatus}</p>
              </div>
              <div className="btns">
                <Link to = {`readjob/${job._id}`}>
                  <div className="details btn">Edit</div>
                </Link>
                {/* <div className="details btn">Details</div> */}
                <div className="delete btn" onClick={(e) => handleDelete(job._id)}>Delete</div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/> 

    </>
  )
}

export default Recruiter
