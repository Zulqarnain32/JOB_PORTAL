const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    jobTitle:{
        type:"String"
    },
    company:{
        type:"String"
    },
    city:{
        type:"String"
    },
    jobDate:{
        type:"String"
    },
    jobStatus:{
        type:"String"
    },
    jobType:{
        type:"String"
    },
})

const JobModel = mongoose.model('JobModel',JobSchema)
module.exports = JobModel