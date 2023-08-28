import { jobs } from "./jobs.js";
import { filterJobs, sortJobs } from "./methods.js"

export const groupJobs = (job, index, tempArray, jobTimeRemaining, jobsListResult, sortedJobsSize) => {
  if (job["Estimated time"] <= jobTimeRemaining.value) {
    tempArray.push(job.ID);
    jobTimeRemaining.value -= job["Estimated time"];
    if (index === sortedJobsSize - 1) {
      jobsListResult.push([...tempArray]);
    }
  }
}

export const generateJobList = (jobs) => {
  let tempArray = [];
  const jobsListResult = [];
  const jobTimeRemaining = { value: 8 };
  const sortedJobsSize = jobs.length
  
  jobs.forEach((job, index) => {
    if (job["Estimated time"] <= jobTimeRemaining.value) {
      groupJobs(job, index, tempArray, jobTimeRemaining, jobsListResult, sortedJobsSize);
    } else {
      jobsListResult.push([...tempArray]);
      tempArray = [];
      jobTimeRemaining.value = 8;
      
      if (job["Estimated time"] <= jobTimeRemaining.value) {
        groupJobs(job, index, tempArray, jobTimeRemaining, jobsListResult, sortedJobsSize);
      }
    }
  });
  
  return jobsListResult;
}

const filteredJobs = filterJobs(jobs);
const sortedJobs = sortJobs(filteredJobs);
const result = generateJobList(sortedJobs);
console.log(result);
