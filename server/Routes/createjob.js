const express = require('express')
const router = express.Router()
const JobModel = require('../model/JobSchema')


//creating a job
router.post('/createjob', async (req,res) => {
    const {jobTitle,company,city,jobDate,jobType,jobStatus} = req.body;

    if (!jobTitle ||!company ||!city ||!jobDate ||!jobType ||!jobStatus){
        return res.json({message:"fill all form fields"})
    }
    const newJob = new JobModel(req.body)
    await newJob.save();
    res.json({message:"job created"})
})

//read job
router.get('/readjob', async (req,res) => {
    JobModel.find({})
    .then(jobs => res.json(jobs))
    .catch(err => res.json(err))

})

router.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    JobModel.findByIdAndDelete({_id:id})
    .then(jobs => res.json(jobs))
    .catch(err => res.json(err))
})

module.exports = router